import { Link } from "wouter";
import { FaTelegram, FaGithub, FaTwitter } from "react-icons/fa";
import { scrollToElement, currentYear } from "@/lib/utils";

export default function Footer() {
  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-skop-blue flex items-center justify-center text-white">
                <span className="font-mono font-bold text-lg">{"{}"}</span>
              </div>
              <span className="text-lg font-semibold text-skop-orange">SKOP</span>
            </Link>
            <p className="mb-4 text-gray-400">
              A community of programmers sharing knowledge and growing together on Telegram.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/some_kind_of_programmers" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 hover:text-white"
              >
                <FaTelegram className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-skop-orange font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick("about")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("features")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("community")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("faq")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-skop-orange font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              Have questions about our community?
            </p>
            <a 
              href="https://t.me/some_kind_of_programmers" 
              className="inline-flex items-center text-blue-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="mr-2" />
              Message us on Telegram
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Some Kind Of Programmers. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm mx-3">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm mx-3">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
