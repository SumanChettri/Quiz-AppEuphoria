import { Link } from "react-router-dom";
import {Github, Linkedin, Reddit} from "../assets"
const About = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 text-white py-5 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-3xl tracking-tight hover:text-emerald-200 transition-colors">
            Programming Quiz
          </Link>
          <Link 
            to="/about" 
            className="font-semibold text-lg hover:text-emerald-200 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
          >
            About
          </Link>
        </div>
      </header>
      
      <div className="min-h-screen py-12 px-4">
        <div className="w-full max-w-4xl mx-auto animate-fade-in">
          <div className="glass-effect card-shadow-lg rounded-2xl p-8 md:p-10">
            <h1 className="text-5xl font-bold text-left mb-3 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              About Programming Quiz
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Test your coding knowledge and improve your skills
            </p>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to <span className="font-semibold text-emerald-600">Programming Quiz</span>! 
                This application is designed to provide an interactive platform for developers to test 
                their knowledge on programming topics including JavaScript, React, and Node.js. Our aim 
                is to make learning fun and engaging through quizzes that challenge and educate.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-left mb-6 text-gray-800 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></span>
                Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-5 border-2 border-emerald-100">
                  <div className="text-2xl mb-2">📚</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Multiple Topics</h3>
                  <p className="text-gray-600">Questions covering JavaScript, React, and Node.js</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-5 border-2 border-teal-100">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Immediate Feedback</h3>
                  <p className="text-gray-600">Get instant feedback on your answers</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 border-2 border-green-100">
                  <div className="text-2xl mb-2">📊</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Track Progress</h3>
                  <p className="text-gray-600">See your scores and track improvement</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-5 border-2 border-cyan-100">
                  <div className="text-2xl mb-2">💡</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Detailed Explanations</h3>
                  <p className="text-gray-600">Learn from comprehensive explanations</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-left mb-6 text-gray-800 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></span>
                Contact Us
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                If you have any questions or feedback, please feel free to reach out to us at{" "}
                <a 
                  href="mailto:sumantewari758@gmail.com" 
                  className="text-emerald-600 hover:text-emerald-700 font-semibold underline decoration-2 underline-offset-2 transition-colors"
                >
                  sumantewari758@gmail.com
                </a>
                .
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t-2 border-gray-200">
              <Link
                to="/"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
              >
                ← Back to Quiz
              </Link>
              <div className="flex gap-4 items-center">
                <a 
                  href="https://github.com/SumanChetttri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-md"
                  aria-label="GitHub"
                >
                  <img src={Github} alt="GitHub" className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-md opacity-50 cursor-not-allowed"
                  aria-label="LinkedIn"
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-md opacity-50 cursor-not-allowed"
                  aria-label="Reddit"
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={Reddit} alt="Reddit" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
