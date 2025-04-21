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
      <div className="text-skop-blue mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const aboutItems = [
  {
    icon: <FaCode />,
    title: "Мы делимся знаниями.",
    description:
      "Обменивайся идеями, событиями, проектами. Получай информацию от лучших специалистов различных областей.",
  },
  {
    icon: <FaUsers />,
    title: "Мы помогаем друг другу.",
    description:
      "Задавай вопросы, ищи наставников, ходи на мероприятия, знакомься с людьми, чтобы добиться любых целей.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Мы создаём проекты.",
    description:
      "Создавай и развивай проекты, находи партнёров и инвесторов, ищи работу и сотрудников абсолютно бесплатно.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skop-blue mb-4">
            О нашем сообществе
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Мы создаём пространство, где IT-специалисты всех уровней могут
            знакомиться, общаться, развиваться и помогать друг другу.
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
          <Button
            asChild
            className="bg-skop-orange hover:bg-skop-orange/90 text-white"
          >
            <a
              href="https://t.me/some_kind_of_programmers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <FaTelegram className="mr-2" />
              Присоединяйся
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
