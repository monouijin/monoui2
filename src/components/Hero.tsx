"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      id="ホーム"
      className="min-h-screen flex items-center py-16 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            こんにちは、<span className="text-primary">中野勇太</span>です
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            愛媛県松山市に住んでいる中野勇太です。
            Webアプリケーションの開発に興味があり、将来はWebエンジニアになりたいです。
          </p>
          <div className="flex space-x-4 justify-center md:justify-start mb-8">
            <a
              href="project"
              className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              使用技術
            </a>
            <a
              href="contact"
              className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
            >
              お問い合わせ
            </a>
          </div>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a
              href="https://github.com/monouijin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <div className="absolute inset-0 bg-primary rounded-full opacity-10"></div>
            <div className="absolute inset-4 bg-white rounded-full shadow-lg overflow-hidden">
              {/* プロフィール画像を表示 */}
              <div className="relative h-full w-full">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={384}
                  height={384}
                  style={{widows: "100%", height: "100%", objectFit: "cover"}}
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
