import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FaCode, FaUsers, FaLaptopCode, FaTelegram } from "react-icons/fa";

interface AboutItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutItem: React.FC<AboutItemProps> = ({ icon, title, description }) => (
  <Card className="bg-white hover:shadow-md transition-shadow">
    <CardContent className="p-8">
      <div className="text-skop-blue mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </CardContent>
  </Card>
);

const aboutItems = [
  {
    icon: <FaCode />,
    title: "Knowledge Sharing",
    description: "Exchange ideas, share best practices, and learn from real-world coding experiences from peers around the world."
  },
  {
    icon: <FaUsers />,
    title: "Supportive Community",
    description: "Ask questions, get help debugging, and receive guidance from friendly programmers at all career stages."
  },
  {
    icon: <FaLaptopCode />,
    title: "Project Collaboration",
    description: "Find teammates for side projects, hackathons, or open-source contributions to build your portfolio together."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skop-blue mb-4">About Our Community</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We're building a place where programmers of all skill levels can connect, learn, and grow together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <AboutItem 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button asChild className="bg-skop-orange hover:bg-skop-orange/90 text-white">
            <a 
              href="https://t.me/some_kind_of_programmers" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center"
            >
              <FaTelegram className="mr-2" />
              Join the discussion
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
