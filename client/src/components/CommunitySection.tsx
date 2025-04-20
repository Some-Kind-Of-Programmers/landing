import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar, FaTelegram } from "react-icons/fa";

interface TestimonialProps {
  message: string;
  name: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ message, name, role }) => (
  <Card className="bg-white shadow-sm">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-4">{message}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
        <div>
          <div className="font-medium text-gray-800">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const testimonials = [
  {
    message: "This community helped me solve a complex algorithm problem I was stuck on for days. Someone took the time to walk me through it step by step.",
    name: "Michael Chen",
    role: "Frontend Developer"
  },
  {
    message: "I found my current job through a connection I made in this group. The networking opportunities here are incredible for programmers.",
    name: "Sarah Johnson",
    role: "Backend Engineer"
  },
  {
    message: "As a self-taught developer, this community has been invaluable. The resources shared here have accelerated my learning journey tremendously.",
    name: "Carlos Rodriguez",
    role: "Full Stack Developer"
  }
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Community Spotlight</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Hear from our members about what makes Some Kind Of Programmers special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              message={testimonial.message}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <Card className="bg-white shadow-md">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to join our growing community?</h3>
                  <p className="text-gray-600 mb-6">
                    Connect with over 1,000 developers who are sharing knowledge, helping each other, and building amazing things together.
                  </p>
                  <Button asChild>
                    <a 
                      href="https://t.me/some_kind_of_programmers" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <FaTelegram className="mr-2" />
                      Join now on Telegram
                    </a>
                  </Button>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-primary-100 rounded-full flex items-center justify-center">
                      <FaTelegram className="text-primary-600 text-5xl md:text-6xl" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      LIVE
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
