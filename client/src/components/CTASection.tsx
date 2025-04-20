import { Button } from "@/components/ui/button";
import { FaTelegram, FaShareAlt } from "react-icons/fa";

export default function CTASection() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Some Kind Of Programmers',
        text: 'Join this awesome Telegram community for programmers!',
        url: 'https://t.me/some_kind_of_programmers',
      });
    } else {
      navigator.clipboard.writeText('https://t.me/some_kind_of_programmers')
        .then(() => {
          alert('Link copied to clipboard! Share it with your friends.');
        })
        .catch((err) => {
          console.error('Could not copy text: ', err);
        });
    }
  };

  return (
    <section className="py-16 bg-skop-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Some Kind Of Programmers Today</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
          Be part of a supportive community where you can learn, share, and grow as a developer.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-skop-orange text-white hover:bg-skop-orange/90">
            <a 
              href="https://t.me/some_kind_of_programmers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaTelegram className="mr-2 text-xl" />
              Join our Telegram
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-skop-blue flex items-center"
            onClick={handleShare}
          >
            <FaShareAlt className="mr-2" />
            Share with others
          </Button>
        </div>
      </div>
    </section>
  );
}
