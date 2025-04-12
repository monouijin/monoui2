"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItem = [
    { label: "ホーム", path: "/"},
    { label: "GitHub", path: "https://github.com/monouijin"},
    { label: "お問い合わせ", path: "/contact"}
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary cursor-pointer">
            MyProfile
          </h1>
        </Link>

        {/* desktop */}
        <nav className="hidden md:flex space-x-8">
          {menuItem.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* mobile button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItem.map((item) => (
              <Link
                href={item.path}
                key={item.label}
                className="text-gray-700 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
