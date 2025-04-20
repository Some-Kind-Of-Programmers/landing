import { Button } from "@/components/ui/button";
import { FaTelegram } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export default function HeroSection() {
  const handleLearnMoreClick = () => {
    scrollToElement("about");
  };

  return (
    <section className="pt-10 pb-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="text-primary-200 font-medium mb-4">Welcome to</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Some Kind Of Programmers</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              A vibrant Telegram community where developers connect, collaborate, and grow together through code and conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-primary-700 hover:bg-gray-100">
                <a href="https://t.me/some_kind_of_programmers" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <FaTelegram className="mr-2 text-xl" />
                  Join our Telegram
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary-700"
                onClick={handleLearnMoreClick}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 flex items-center text-primary-100">
              <span className="font-semibold text-lg mr-2 opacity-90">1,000+</span>
              <span className="opacity-80">members and growing</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="font-mono text-primary-100 bg-gray-900/50 p-4 rounded-lg overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-sm text-primary-200">terminal</div>
                </div>
                <div className="text-sm">
                  <div className="mb-2"><span className="text-green-400">user@skop</span>:<span className="text-blue-400">~</span>$ connect telegram</div>
                  <div className="mb-2 text-primary-200">Connecting to Some Kind Of Programmers...</div>
                  <div className="mb-2 text-primary-200">Great! You're connected to the community!</div>
                  <div className="mb-2"><span className="text-green-400">user@skop</span>:<span className="text-blue-400">~</span>$ explore community</div>
                  <div className="mb-2 text-primary-200">Discovering active members and discussions...</div>
                  <div className="mb-2 text-primary-200">Found: Code sharing, project collaborations, tech discussions</div>
                  <div className="animate-pulse">█</div>
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
