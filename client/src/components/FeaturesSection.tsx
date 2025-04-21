import {
  FaCodeBranch,
  FaGraduationCap,
  FaRocket,
  FaPaperPlane,
} from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skop-blue mb-4">
            Зачем тебе наше сообщество?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Мы предлагаем уникальное сочетание саморазвития и профессионализма
            вместе с неформальной обстановкой.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-skop-blue mb-4">
                <FaCodeBranch className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Знакомства в реальном времени с помощью системы анкет
              </h3>
              <p className="text-gray-600">
                Каждый новый участник заполняет анкету в соответствующем
                разделе. Это способствует гибкому выбору новых знакомых,
                партнёров, работодателей, сотрудников.
              </p>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-skop-blue mb-4">
                <FaGraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Постоянное нескучное саморазвитие
              </h3>
              <p className="text-gray-600">
                Благодаря различным мероприятиям (митапам, коворкингам,
                вечеринкам) и постоянному общению с профессионалами, твои
                результаты саморазвития вырастут экспоненциально!
              </p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-skop-blue mb-4">
                <FaRocket className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Реактивный профессиональный рост
              </h3>
              <p className="text-gray-600">
                Благодаря <a className="text-blue-600"  href="https://www.youtube.com/@SomeKindOfProgrammers">Some Kind Of Interview</a>, саморазвитию и
                знакомствам ты легко взлетишь на новый уровень в своей карьере.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="mb-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-skop-blue flex items-center justify-center text-white font-semibold text-sm mr-3">
                  SKOP
                </div>
                <div>
                  <div className="font-semibold">Some Kind Of Programmers</div>
                  <div className="text-sm text-gray-500">Общение</div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Chat Messages */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                    КБ
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">
                      Камиль Биктимиров
                    </div>
                    <p className="text-sm text-gray-700">
                      Ребят, дарова, работал кто-нибудь с Next.js 13 App Router?
                      У меня возникли проблемы с серверными компонентами
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                      МС
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">
                      Михаил Сердюк
                    </div>
                    <p className="text-sm text-gray-700">
                      Ну я уже несколько месяцев им пользуюсь, в чём именно
                      загвоздка?)
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                      АС
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">
                      Андрей Смирнов
                    </div>
                    <p className="text-sm text-gray-700">
                      Могу тоже подсказать. Есть <a href="https://www.youtube.com/watch?v=ZVnjOPwW4ZA"><span className="text-blue-600">вот тут</span></a> хороший туториал, может
                      поможет
                      <a >
                        
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                      КБ
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">
                      Камиль Биктимиров
                    </div>
                    <p className="text-sm text-gray-700">
                      Спасибо, чекну) Вообще, в идеале, мне бы созвониться с
                      кем-нибудь, чтобы именно показать проблему наглядно)
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                      МС
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">
                      Михаил Сердюк
                    </div>
                    <p className="text-sm text-gray-700">
                      Ну давай, без проблем, напиши в личку, когда удобно.
                      Кстати, идёшь на MoscowJS в этом месяце?
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                      КБ
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">
                      Камиль Биктимиров
                    </div>
                    <p className="text-sm text-gray-700">
                      О, ты тоже идёшь?) Был на позапрошлом митапе, познакомился
                      с дюжиной крутых фронтендеров и парочкой бэкендеров, так
                      что буду точно) И спасибо большое за помощь ;)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <a href="https://t.me/some_kind_of_programmers">
                  <button className="ml-2 p-2 bg-skop-orange text-white rounded-lg flex items-center justify-center">
                    <FaPaperPlane className="h-4 w-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
