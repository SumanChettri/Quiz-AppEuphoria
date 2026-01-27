import { useContext } from "react";
import CheckResult from "./CheckResult";
import MyContext from "../contexts/Context";

const getCategoryColor = (category) => {
  const colors = {
    javascript: 'from-yellow-500 to-orange-500',
    reactjs: 'from-blue-500 to-cyan-500',
    nodejs: 'from-green-500 to-emerald-500',
    python: 'from-blue-600 to-indigo-600',
    htmlcss: 'from-pink-500 to-rose-500',
    typescript: 'from-blue-700 to-indigo-700',
  };
  return colors[category] || 'from-indigo-600 to-purple-600';
};

const Result = () => {
  const { handleRetryBtn, handleCheckBtn, state } = useContext(MyContext);

  // filters the correct answers
  const right = state.userAnswer.filter((i) => i.result === true);
  const wrong = state.filteredQuestion.length - right.length;
  const scorePercent = Math.round((right.length / state.filteredQuestion.length) * 100);
  
  const getScoreColor = (score) => {
    if (score >= 80) return 'from-green-500 to-emerald-600';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-600';
  };

  const getPerformanceMessage = (score) => {
    if (score >= 90) return { emoji: '🏆', text: 'Outstanding!', subtext: 'You\'re a true expert!' };
    if (score >= 80) return { emoji: '🎉', text: 'Excellent Work!', subtext: 'You have great knowledge!' };
    if (score >= 70) return { emoji: '👍', text: 'Great Job!', subtext: 'You\'re doing well!' };
    if (score >= 60) return { emoji: '👏', text: 'Good Effort!', subtext: 'Keep learning!' };
    if (score >= 50) return { emoji: '💪', text: 'Keep Practicing!', subtext: 'You\'re improving!' };
    return { emoji: '📚', text: 'Don\'t Give Up!', subtext: 'Practice makes perfect!' };
  };

  const performance = getPerformanceMessage(scorePercent);
  
  return (
    <div className="min-h-screen py-8 px-4 flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* if check button is not clicked  render results page else render Checkresult page*/}
      {!state.isCheck ? (
        <div className="w-full max-w-3xl animate-fade-in">
          <div className="glass-effect card-shadow-lg rounded-2xl p-8 md:p-10 bg-white/90 backdrop-blur-sm">
            {/* Category Badge */}
            <div className="flex justify-center mb-6">
              <span className={`text-sm font-bold px-6 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(state.options.categorie)} text-white shadow-md`}>
                {state.options.categorie.toUpperCase()} • {state.options.mode.toUpperCase()}
              </span>
            </div>

            {/* Score Circle */}
            <div className="mb-8 flex justify-center">
              <div className={`relative w-56 h-56 rounded-full bg-gradient-to-br ${getScoreColor(scorePercent)} flex items-center justify-center shadow-2xl transform transition-all hover:scale-105`}>
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm animate-pulse"></div>
                <div className="relative z-10 text-center">
                  <div className="text-7xl font-bold text-white mb-2">{scorePercent}%</div>
                  <div className="text-white/90 text-sm font-medium">Score</div>
                </div>
                {/* Circular Progress */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="white"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - scorePercent / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>
            </div>
            
            {/* Performance Message */}
            <div className="mb-8 text-center">
              <div className="text-6xl mb-3">{performance.emoji}</div>
              <p className="text-3xl font-bold text-gray-800 mb-2">{performance.text}</p>
              <p className="text-lg text-gray-600">{performance.subtext}</p>
              <p className="text-gray-500 mt-2">
                You answered <span className="font-bold text-gray-700">{right.length}</span> out of <span className="font-bold text-gray-700">{state.filteredQuestion.length}</span> questions correctly.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl">✓</span>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-green-600">{right.length}</div>
                    <div className="text-sm text-gray-600 font-medium">Correct</div>
                  </div>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2 mt-3">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(right.length / state.filteredQuestion.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl">✗</span>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-red-600">{wrong}</div>
                    <div className="text-sm text-gray-600 font-medium">Incorrect</div>
                  </div>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2 mt-3">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(wrong / state.filteredQuestion.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 text-center">
                <div className="text-2xl font-bold text-blue-600">{state.filteredQuestion.length}</div>
                <div className="text-xs text-gray-600 mt-1">Total</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 text-center">
                <div className="text-2xl font-bold text-purple-600">{state.options.mode}</div>
                <div className="text-xs text-gray-600 mt-1">Difficulty</div>
              </div>
              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100 text-center">
                <div className="text-2xl font-bold text-cyan-600">{state.options.quantity}</div>
                <div className="text-xs text-gray-600 mt-1">Questions</div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                onClick={handleRetryBtn}
                className={`bg-gradient-to-r ${getCategoryColor(state.options.categorie)} hover:opacity-90 text-white text-lg font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 flex items-center justify-center gap-2`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Again
              </button>
              <button
                type="submit"
                onClick={handleCheckBtn}
                className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Review Answers
              </button>
            </div>
          </div>
        </div>
      ) : (
        <CheckResult />
      )}
    </div>
  );
};

export default Result;
