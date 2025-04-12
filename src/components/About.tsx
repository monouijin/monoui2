"use client"; 

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: "Webサイト制作",
      description:
        "主に、PHPやTypeScript、JavaScriptを用いてWebサイトを制作しています。",
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "フロントエンド開発",
      description:
        "React、Next.jsなどを使用して、webアプリ開発に挑戦しています。",
    },
    {
      icon: <FaDatabase size={40} />,
      title: "バックエンド開発",
      description: "これからはバックエンド開発にも挑戦したいと考えています。",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            取り組んでいること＆今後やってみたいこと
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Webアプリケーション開発、web制作に興味があります
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
