import { FaCodeBranch, FaGraduationCap, FaRocket, FaPaperPlane } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skop-blue mb-4">Why Join Our Community?</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We offer a unique blend of learning, networking, and technical growth opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-skop-blue mb-4">
                <FaCodeBranch className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Real-time Technical Discussions</h3>
              <p className="text-gray-600">
                Engage in meaningful conversations about programming languages, frameworks, and industry trends as they happen.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-skop-blue mb-4">
                <FaGraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                Access shared resources, tutorials, and learn about new technologies from other community members.
              </p>
            </div>
            
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-skop-blue mb-4">
                <FaRocket className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Get insights on job opportunities, interview preparation, and career advancement from peers in the industry.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="mb-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-skop-blue flex items-center justify-center text-white font-semibold mr-3">TG</div>
                <div>
                  <div className="font-semibold">Telegram Chat</div>
                  <div className="text-sm text-gray-500">Some Kind Of Programmers</div>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Chat Messages */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">AK</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">Alex Kim</div>
                    <p className="text-sm text-gray-700">
                      Has anyone worked with Next.js 13 App Router? I'm struggling with server components.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">TS</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">Taylor Smith</div>
                    <p className="text-sm text-gray-700">
                      I've been using it for a few months! What specific issues are you having?
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">JD</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">Jamie Doe</div>
                    <p className="text-sm text-gray-700">
                      I can help too. I found this great tutorial that might be useful: <span className="text-blue-600">link.example.com/nextjs-guide</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">AK</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="text-sm font-medium text-gray-800">Alex Kim</div>
                    <p className="text-sm text-gray-700">
                      Thanks! I'll check it out. Would any of you be up for a quick call to walk through my setup?
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
                <button className="ml-2 p-2 bg-skop-orange text-white rounded-lg flex items-center justify-center">
                  <FaPaperPlane className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
