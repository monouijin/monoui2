import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "こちらは全て必須項目です" },
        { status: 400 }
      );
    }

    const emailAuth = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailAuth.test(email)) {
      return NextResponse.json(
        { success: false, message: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"お問い合わせフォーム" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `【お問い合わせ】${subject}`,
      text: `
        名前: ${name}
        メールアドレス: ${email}
        
        お問い合わせ内容:
        ${message}
      `,
      html: `
        <div>
          <h2>お問い合わせがありました</h2>
          <p><strong>名前:</strong> ${name}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>件名:</strong> ${subject}</p>
          <h3>お問い合わせ内容:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: "お問い合わせを受け付けました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "サーバーエラーです" },
      { status: 500 }
    );
  }
}

