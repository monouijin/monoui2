import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">MyProfile</h2>
            <p className="text-gray-400">
              システム開発に真剣に取り組みます
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/monouijin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MyProfile. Nakano Yuta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
