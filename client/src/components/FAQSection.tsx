import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, value }) => (
  <AccordionItem value={value} className="mb-6 border-none">
    <AccordionTrigger className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-skop-blue text-lg font-medium text-gray-800">
      {question}
    </AccordionTrigger>
    <AccordionContent className="p-4 bg-white text-gray-600">
      {answer}
    </AccordionContent>
  </AccordionItem>
);

const faqItems = [
  {
    question: "Членство бесплатное? В чём подвох?",
    answer:
      "Подвоха нет и членство бесплатное, нужно только анкету заполнить :)",
    value: "item-1",
  },
  {
    question: "Насколько сообщество активное?",
    answer:
      "Очень активное! Люди постоянно задают вопросы, общаются, что-то публикуют и посещают мероприятия.",
    value: "item-2",
  },
  {
    question: "Можно получить короткий список преимуществ?",
    answer:
      "Агрегатор митапов, мок-интервью, вечеринки, клуб английского языка, коворкинг встречи, поиск людей через анкеты, вакансии.",
    value: "item-3",
  },
  {
    question: "Какие правила в сообществе?",
    answer:
      "Заполни анкету и не пиши что-то совсем из ряда вон выходящее. Ну и соблюдай политику топиков. К слову, за всю историю сообщества, мы забанили только одного участника :)",
    value: "item-4",
  },
  {
    question: "Что такое анкета и где её заполнять?",
    answer:
      "Анкета - это рассказ о себе. Ты можешь рассказать о чём угодно в любом удобном для тебя формате и стиле, оставив ссылки, например, на свои резюме, каналы, проекты и так далее. Заполняется анкета в специальном разделе Telegram-сообщества, который так и называется: \"Анкеты\".",
    value: "item-5",
  },
  {
    question: "В названии сообщества говорится про программистов. Вступать имеет смысл только программистам?",
    answer:
      "Вообще нет. У нас есть представитель всех подмножеств IT-сферы: программисты, аналитики, менеджеры, инвесторы, стартаперы. представители HR-сферы. Члены сообщества - те, кто программирует свои жизни. Если так можно выразиться, конечно.",
    value: "item-6",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skop-blue mb-4">
            FAQ
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Частые вопросы о нашем сообществе.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item) => (
              <FAQItem
                key={item.value}
                question={item.question}
                answer={item.answer}
                value={item.value}
              />
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Неужели остались ещё вопросы?</p>
            <Button
              asChild
              variant="outline"
              className="border-skop-orange text-skop-orange hover:bg-skop-orange hover:text-white"
            >
              <a
                href="https://t.me/some_kind_of_programmers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Задай их в сообществе
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
