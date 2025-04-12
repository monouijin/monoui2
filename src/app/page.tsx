import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "自己紹介",
  description: "中野勇太です。よろしくお願いします！"
}

export default function Home() {
  return(
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
      </main>
      <Footer/>
    </>
  );
}