import { useContext } from "react";
import MyContext from "../contexts/Context";

const CheckResult = () => {
  const { handleRetryBtn, state } = useContext(MyContext);
  
  const getUserAnswer = (questionId) => {
    const userAnswer = state.userAnswer.find((ans) => ans.id === questionId - 1);
    return userAnswer ? userAnswer.answer : null;
  };
  
  const isCorrect = (questionId) => {
    const userAnswer = state.userAnswer.find((ans) => ans.id === questionId - 1);
    return userAnswer ? userAnswer.result : false;
  };
  
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="w-full max-w-4xl mx-auto animate-fade-in">
        <div className="glass-effect card-shadow-lg rounded-2xl p-6 md:p-8">
          <h1 className="text-4xl font-bold text-left mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Review Answers
          </h1>
          <p className="text-gray-600 mb-8">Check your answers and explanations below</p>
          
          <div className="flex flex-col gap-6 mb-8">
            {/* maps through filteredQuestions and render the answers */}
            {state.filteredQuestion.map((question, index) => {
              const userAns = getUserAnswer(question.id);
              const correct = isCorrect(question.id);
              
              return (
                <div
                  key={question.id}
                  className={`rounded-xl p-6 border-2 transition-all ${
                    correct
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                      correct ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {correct ? '✓' : '✗'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Question {index + 1}: {question.query}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-700">Your Answer:</span>
                          <span className={`font-medium ${correct ? 'text-green-700' : 'text-red-700'}`}>
                            {userAns ? userAns.toUpperCase() : 'Not answered'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-700">Correct Answer:</span>
                          <span className="font-medium text-green-700">
                            {question.answer.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Explanation:</p>
                        <p className="text-gray-700 leading-relaxed">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleRetryBtn}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg font-semibold px-10 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckResult;
