import { Link } from "wouter";
import { FaTelegram, FaGithub, FaTwitter, FaYoutube, FaVk } from "react-icons/fa";
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
              <div className="h-8 w-8 flex items-center justify-center text-white">
                <img src="/logo.png" alt="SKOP Logo" className="h-8 w-auto" />
              </div>
              <span className="text-lg font-semibold text-skop-white">
                SKOP
              </span>
            </Link>
            <p className="mb-4 text-gray-400">
              The ones who program their lives.
            </p>
            <div className="flex space-x-4 items-center">
              <a
                href="https://t.me/some_kind_of_programmers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white"
              >
                <FaTelegram className="text-xl" />
              </a>
              <a
                href="https://www.youtube.com/@SomeKindOfProgrammers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-white"
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="https://vk.com/some_kind_of_programmers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-white"
              >
                <FaVk className="text-2xl" />
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-skop-orange font-semibold mb-4">Быстрая навигация</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О нас
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("features")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Зачем тебе SKOP
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("community")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Сообщество
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
            <h3 className="text-skop-orange font-semibold mb-4">Контакты</h3>
            <p className="text-gray-400 mb-2">
              Остались вопросы о сообществе?
            </p>
            <a
              href="https://t.me/some_kind_of_programmers"
              className="inline-flex items-center text-blue-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="mr-2" />
              Напиши нам
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Some Kind Of Programmers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
