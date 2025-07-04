import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar, FaTelegram } from "react-icons/fa";

interface TestimonialProps {
  message: string;
  name: string;
  role: string;
  ratedStars: number;
  imgSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  message,
  name,
  role,
  ratedStars,
  imgSrc,
}) => (
  <Card className="bg-white shadow-sm">
    <CardContent className="p-6">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
          <img className="rounded-full" src={imgSrc} alt="Photo" />
        </div>
        <div>
          <div className="font-medium text-gray-800">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="text-yellow-400 flex">
          {[...Array(ratedStars)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>

      <p className="text-gray-700">{message}</p>
    </CardContent>
  </Card>
);

const testimonials = [
  {
    message:
      "Здорово, что Камиль создал такое сообщество. Можно зайти, пообщаться, задать вопросы по коду и не только, поугарать над мемами. А так же быть в курсе ближайших митапов. Ну и главное - в сообществе собрались добрые и отзывчивые люди, с которыми можно встретиться ещё оффлайн или на квартирнике)",
    name: "Влад Кожушко",
    role: "Senior Android Developer",
    ratedStars: 5,
    imgSrc:
      "https://squidex.jugru.team/api/assets/srm/52aa2436-ba2e-4082-8347-4da5ba76acdb/kozhushko.jpg?cache=3600&width=350&height=350&mode=CropUpsize",
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skop-blue mb-4">
            Настоящие отзывы
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Вот что о нас говорят наши участники.
          </p>
        </div>

        <Card className="bg-white shadow-sm mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
                <img className="rounded-full" src="/my_photo.jpg" alt="Photo" />
              </div>
              <div>
                <div className="font-medium text-gray-800">
                  Биктимиров Камиль
                </div>
                <div className="text-sm text-gray-500">
                  Основатель сообщества
                </div>
              </div>
            </div>

            <p className="text-gray-700">
              Я давно мечтал о пространстве, где смогу в абсолютно неформальной
              обстановке общаться с людьми в IT и помогать им. Делиться
              знаниями, событиями, опытом, полезными материалами. Ходить вместе
              на мероприятия, организовывать их. Однако я и не мог подумать, что
              со временем мои идеи разделят столько людей. Спасибо каждому
              участнику за вклад в развитие сообщества. Поверь, именно для тебя
              – да, тебя, дорогой читатель, оно и создавалось :)
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
                  <img
                    className="rounded-full"
                    src="https://github.com/all-mute.png"
                    alt="Photo"
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-800">
                    David Merkulov
                  </div>
                  <div className="text-sm text-gray-500">
                    <a href="https://hao.vc/">
                      <span className="text-blue-600">hao.vc</span>
                    </a>{" "}
                    Founder, Ex-YandexGPT
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>

              <p className="text-gray-700">
                Камиль пригласил меня вступить в сообщество еще на самой ранней
                стадии. Благодаря этому я: ходил на митапы всегда с компанией,
                находил себе новые бизнес-знакомства, ко-фаундеров в стартапы.
                Часто захожу смотреть мемы и листать анкеты новых участников.
              </p>
            </CardContent>
          </Card>

          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              message={testimonial.message}
              name={testimonial.name}
              role={testimonial.role}
              ratedStars={testimonial.ratedStars}
              imgSrc={testimonial.imgSrc}
            />
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-white shadow-md">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-2xl font-bold text-skop-blue mb-4">
                    Готов присоединиться к нам?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Познакомься более чем с 700 членами сообщества и извлеки для
                    себя пользу по максимуму.
                  </p>
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
                      Присоединиться
                    </a>
                  </Button>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaTelegram className="text-skop-blue text-5xl md:text-6xl" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-skop-orange text-white text-xs font-bold px-2 py-1 rounded-full">
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
