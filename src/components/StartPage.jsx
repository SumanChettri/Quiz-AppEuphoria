
import { useContext } from "react";
import { quizOptions } from ".";
import MyContext from "../contexts/Context";

const getCategoryInfo = (category) => {
  const categories = {
    javascript: { icon: "🟨", color: "from-yellow-400 to-orange-500", name: "JavaScript" },
    reactjs: { icon: "⚛️", color: "from-blue-400 to-cyan-500", name: "React.js" },
    nodejs: { icon: "🟢", color: "from-green-400 to-emerald-500", name: "Node.js" },
    python: { icon: "🐍", color: "from-blue-500 to-indigo-600", name: "Python" },
    htmlcss: { icon: "🎨", color: "from-pink-400 to-rose-500", name: "HTML/CSS" },
    typescript: { icon: "🔷", color: "from-blue-600 to-indigo-700", name: "TypeScript" },
  };
  return categories[category] || { icon: "📚", color: "from-gray-400 to-gray-500", name: category };
};

const StartPage = () => {
  const { handleStart, handleSelect } = useContext(MyContext);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="w-full max-w-4xl animate-fade-in">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <div className="text-6xl mb-2">🚀</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent mb-4">
            Programming Quiz
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">
            Test your coding knowledge and level up your skills
          </p>
          <p className="text-gray-600">
            Challenge yourself with questions on JavaScript, React, and Node.js
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border-2 border-blue-100 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-bold text-gray-800 mb-1">Multiple Topics</h3>
            <p className="text-sm text-gray-600">Covering JavaScript, React & Node.js</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border-2 border-cyan-100 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-gray-800 mb-1">Instant Feedback</h3>
            <p className="text-sm text-gray-600">Get immediate results and explanations</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border-2 border-teal-100 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-bold text-gray-800 mb-1">Track Progress</h3>
            <p className="text-sm text-gray-600">Monitor your improvement over time</p>
          </div>
        </div>

        {/* Quiz Configuration Card */}
        <div className="glass-effect card-shadow rounded-2xl p-8 md:p-10 bg-white/90 backdrop-blur-sm">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></span>
              Configure Your Quiz
            </h2>
            <p className="text-gray-600">Customize your quiz experience</p>
          </div>
          
          <ul className="space-y-6 mb-8">
            {/* maps through question preference options  */}
            {quizOptions.map((quiz, index) => (
              <li key={quiz.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <label
                  htmlFor={`dropdown-${quiz.title}`}
                  className="block text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {quiz.title}
                </label>
                <div className="relative">
                  <select
                    id={`dropdown-${quiz.title}`}
                    name="dropdown"
                    onChange={(e) => handleSelect(quiz.type, e)}
                    defaultValue={quiz.options[0]}
                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-3.5 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none hover:border-blue-300 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    {quiz.options.map((option) => {
                      if (quiz.type === "categorie") {
                        const catInfo = getCategoryInfo(option);
                        return (
                          <option key={option} value={option} className="bg-white py-2">
                            {catInfo.icon} {catInfo.name}
                          </option>
                        );
                      }
                      return (
                        <option key={option} value={option} className="bg-white py-2">
                          {typeof option === 'string' ? option.charAt(0).toUpperCase() + option.slice(1) : option}
                        </option>
                      );
                    })}
                  </select>
                  <svg
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 text-blue-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleStart}
              className="group relative bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 hover:from-blue-700 hover:via-cyan-600 hover:to-teal-700 text-white text-xl font-semibold px-12 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full md:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Quiz
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span>✨</span>
              <span>Ready to challenge yourself?</span>
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
            <div className="text-2xl font-bold text-blue-600">180+</div>
            <div className="text-xs text-gray-600 mt-1">Questions</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-cyan-100">
            <div className="text-2xl font-bold text-cyan-600">6</div>
            <div className="text-xs text-gray-600 mt-1">Categories</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-teal-100">
            <div className="text-2xl font-bold text-teal-600">3</div>
            <div className="text-xs text-gray-600 mt-1">Difficulties</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-purple-100">
            <div className="text-2xl font-bold text-purple-600">∞</div>
            <div className="text-xs text-gray-600 mt-1">Practice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
