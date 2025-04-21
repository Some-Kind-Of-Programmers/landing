import { Button } from "@/components/ui/button";
import { FaTelegram } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export default function HeroSection() {
  const handleLearnMoreClick = () => {
    scrollToElement("about");
  };

  return (
    <section className="pt-10 pb-20 bg-gradient-to-r from-[#0d518f] to-[#1573c9] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="text-blue-100 font-medium mb-4">Welcome to...</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Some Kind Of Programmers
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Активное нетворкинговое сообщество, где представители IT-сферы
              общаются, сотрудничают, развиваются в онлайне и посредством
              посещения мероприятий: коворкингов, вечеринок, митапов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-skop-orange hover:bg-skop-orange/90 text-white"
              >
                <a
                  href="https://t.me/some_kind_of_programmers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaTelegram className="mr-2 text-xl" />
                  Присоединяйся к нам в Telegram
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-skop-blue bg-skop-blue/30"
                onClick={handleLearnMoreClick}
              >
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 flex items-center text-blue-100">
              <span className="font-semibold text-lg mr-2 opacity-90">
                700+
              </span>
              <span className="opacity-90">участников</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl relative z-10">
              <div className="font-mono bg-gray-900/70 p-4 rounded-lg overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-sm text-blue-200">terminal</div>
                </div>
                <div className="text-sm">
                  <div className="mb-2">
                    <span className="text-green-400">user@skop</span>:
                    <span className="text-skop-blue/90">~</span>$ connect
                    telegram
                  </div>
                  <div className="mb-2 text-blue-200">
                    Connecting to Some Kind Of Programmers...
                  </div>
                  <div className="mb-2 text-blue-200">
                    Great! You're connected to the community!
                  </div>
                  <div className="mb-2">
                    <span className="text-green-400">user@skop</span>:
                    <span className="text-skop-blue/90">~</span>$ explore
                    community
                  </div>
                  <div className="mb-2 text-blue-200">
                    Discovering active members and discussions...
                  </div>
                  <div className="mb-2 text-blue-200">
                    Found: Code sharing, project collaborations, tech
                    discussions, meetups, parties
                  </div>
                  <div className="text-skop-orange animate-pulse">█</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
