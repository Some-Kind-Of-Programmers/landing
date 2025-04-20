import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, value }) => (
  <AccordionItem value={value} className="mb-6 border-none">
    <AccordionTrigger className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg font-medium text-gray-800">
      {question}
    </AccordionTrigger>
    <AccordionContent className="p-4 bg-white text-gray-600">
      {answer}
    </AccordionContent>
  </AccordionItem>
);

const faqItems = [
  {
    question: "What kind of programmers can join?",
    answer: "All kinds! Whether you're a beginner just learning to code, a seasoned professional, or anywhere in between, everyone is welcome. Our community includes frontend, backend, mobile, and data engineers from various backgrounds.",
    value: "item-1"
  },
  {
    question: "Is the community active?",
    answer: "Yes! We have daily discussions about programming topics, regular code reviews, and community members sharing interesting resources and job opportunities. There's always something happening in the group.",
    value: "item-2"
  },
  {
    question: "What languages and technologies are discussed?",
    answer: "Our community covers a wide range of programming languages and technologies, including JavaScript, Python, Java, C++, React, Node.js, Django, Docker, and many more. If you have questions about a specific technology, chances are someone in the group has experience with it.",
    value: "item-3"
  },
  {
    question: "Are there rules in the community?",
    answer: "Yes, we maintain a respectful and professional environment. Our basic rules include being respectful to other members, no spam, no unsolicited advertising, and keeping discussions focused on programming and technology-related topics.",
    value: "item-4"
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Common questions about our Telegram community.
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
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button asChild variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              <a 
                href="https://t.me/some_kind_of_programmers" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ask in the community
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
