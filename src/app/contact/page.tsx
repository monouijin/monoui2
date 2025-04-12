import type { NextPage } from "next";
import ClientContact from "./components/ClientContact";

export const metadata = {
    title: "お問い合わせ",
    description: "お問い合わせはこちら"
}

const Contact: NextPage = () => {
  return (
    <>
      <div className="main-h-screen bg-gray-50 py-12">
        <main className="container mx-auto px-4">
          <ClientContact />
        </main>
      </div>
    </>
  );
};

export default Contact;
