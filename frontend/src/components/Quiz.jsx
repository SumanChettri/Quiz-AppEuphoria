import Result from "./Result";
import MyContext from "../contexts/Context";
import { useContext, useEffect, useState } from "react";

const Quiz = () => {
  const { handleClick, handleSubmit, state, dispatch } = useContext(MyContext);
  const [timeLeft, setTimeLeft] = useState(state.timeRemaining);
  const [clientQuestions, setClientQuestions] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('client_questions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.questions) && parsed.questions.length > 0) {
          setClientQuestions(parsed.questions);
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!state.timeRemaining) return;
    
    setTimeLeft(state.timeRemaining);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-submit when time runs out
          if (state.userChoice) {
            setTimeout(() => handleSubmit(), 100);
          }
          return 0;
        }
        const newTime = prev - 1;
        dispatch({ type: "updateTime", timeRemaining: newTime });
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.currentQuestionIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key >= '1' && e.key <= '4') {
        const index = parseInt(e.key) - 1;
        if (state.filteredQuestion[state.currentQuestionIndex]?.choices[index]) {
          handleClick(state.filteredQuestion[state.currentQuestionIndex].choices[index].selected);
        }
      } else if (e.key === 'Enter' && state.userChoice) {
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [state.userChoice, state.currentQuestionIndex]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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

  const mapClientQuestion = (q) => ({
    question: q.question,
    options: q.options,
    answer: q.answer,
  });

  if (clientQuestions) {
    const questions = clientQuestions.map(mapClientQuestion);
    // Render a lightweight quiz using client-provided data.
    // ...existing quiz rendering using `questions` instead of fetched ones...
  }

  return (
    <div className="min-h-screen py-8 px-4 flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {state.currentQuestionIndex !== state.filteredQuestion.length ? (
        <div className="w-full max-w-3xl animate-fade-in">
          <div className="glass-effect card-shadow-lg rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
            {/* Progress Bar */}
            <div className="h-3 bg-gray-200 relative">
              <div 
                className={`h-full bg-gradient-to-r ${getCategoryColor(state.options.categorie)} transition-all duration-500 ease-out`}
                style={{ width: `${((state.currentQuestionIndex + 1) / state.filteredQuestion.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="p-8 md:p-10">
              {/* Header with Timer and Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r ${getCategoryColor(state.options.categorie)} text-white shadow-md`}>
                      {state.options.categorie.toUpperCase()}
                    </span>
                    <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-4 py-1.5 rounded-full">
                      Question {state.currentQuestionIndex + 1} of {state.filteredQuestion.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    {state.timeRemaining && (
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold ${
                        timeLeft < 60 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-blue-100 text-blue-700'
                      }`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formatTime(timeLeft)}
                      </div>
                    )}
                    <div className="text-sm font-semibold text-gray-600">
                      {Math.round(((state.currentQuestionIndex + 1) / state.filteredQuestion.length) * 100)}%
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                  {state.filteredQuestion[state.currentQuestionIndex].query}
                </h2>
              </div>
              
              {/* Choices */}
              <div className="flex flex-col gap-3 mb-8">
                {state.filteredQuestion[state.currentQuestionIndex].choices.map(
                  (choice, index) => (
                    <button
                      key={choice.selected}
                      className={`group flex items-start gap-4 text-left p-5 rounded-xl border-2 transition-all duration-200 transform hover:scale-[1.01] ${
                        state.userChoice === choice.selected
                          ? `bg-gradient-to-r ${getCategoryColor(state.options.categorie)} bg-opacity-10 border-current shadow-lg scale-[1.02]`
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
                      }`}
                      value={choice.selected}
                      onClick={() => handleClick(choice.selected)}
                    >
                      <span className={`font-bold text-lg min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg transition-all ${
                        state.userChoice === choice.selected
                          ? `bg-gradient-to-r ${getCategoryColor(state.options.categorie)} text-white shadow-md`
                          : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-700'
                      }`}>
                        {choice.selected.toUpperCase()}
                      </span>
                      <span className="flex-1 text-lg text-gray-800 font-medium pt-1">
                        {choice.a}
                      </span>
                      <span className="text-xs text-gray-400 font-mono pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {index + 1}
                      </span>
                    </button>
                  )
                )}
              </div>
              
              {/* Hint and Next Button */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Press 1-4 to select answer, Enter to submit
                </p>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!state.userChoice}
                  className={`text-lg font-semibold px-10 py-3.5 rounded-xl shadow-lg transform transition-all duration-200 focus:outline-none focus:ring-4 flex items-center gap-2 ${
                    state.userChoice
                      ? `bg-gradient-to-r ${getCategoryColor(state.options.categorie)} hover:opacity-90 text-white hover:shadow-xl hover:-translate-y-0.5`
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {state.currentQuestionIndex + 1 === state.filteredQuestion.length ? (
                    <>
                      Finish Quiz
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Next Question
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Result />
      )}
    </div>
  );
};

export default Quiz;
