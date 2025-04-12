import TecList from "./components/TecList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            技術スタック
          </h1>
          <p className="mt-4 text-xl text-gray-600">このサイトに使用した技術</p>
        </div>
        <TecList />
        <div className="mt-10 text-center">
          <Link href="/">
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              戻る
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
