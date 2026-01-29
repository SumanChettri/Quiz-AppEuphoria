import { questionsData } from ".";
import Quiz from "./Quiz";
import StartPage from "./StartPage";
import MyContext from "../contexts/Context";
import { useReducer } from "react";
import { reducer, initialValue } from "../reducers/Reducer";

const Home = () => {
  // uses useReducer to manage state across the app
  const [state, dispatch] = useReducer(reducer, initialValue);

  // this function accepts the selected preferences
  const handleSelect = (key, e) => {
    const selected = e.target.value;
    dispatch({ type: "setoptions", key: key, selected: selected });
  };

  // this initiates quiz after selection of preferences
  const handleStart = () => {
    // filters the questions based on users choices
    let filterData = questionsData.filter(
      (data) =>
        data.info.categorie === state.options.categorie &&
        data.info.mode === state.options.mode
    );
    // slices number of questions based on selected quantity
    const quantity = parseInt(state.options.quantity);
    if (quantity === 5) filterData = filterData.slice(0, 5);
    else if (quantity === 10) filterData = filterData.slice(0, 10);
    else if (quantity === 15) filterData = filterData.slice(0, 15);
    else if (quantity === 20) filterData = filterData.slice(0, 20);
    // updates the default question data
    dispatch({ type: "filteredQuestion", filterData: filterData });
    // Calculate time limit: 60 seconds per question
    const timeLimit = quantity * 60;
    // sets the started value to true with timer
    dispatch({ type: "isStarted", timeLimit: timeLimit });
  };

  // this function handles single choice click
  const handleClick = (selected) => {
    // updates user choice on single question
    dispatch({ type: "userChoice", selected: selected });
  };

  // handles next question button click
  const handleSubmit = () => {
    // checks user's choice with the answer
    let res = false;
    if (
      state.userChoice ===
      state.filteredQuestion[state.currentQuestionIndex].answer
    ) {
      res = true;
    }
    // updates users answer
    dispatch({
      type: "userAnswer",
      answer: {
        id: state.currentQuestionIndex,
        answer: state.userChoice,
        result: res,
      },
    });

    // resets the previous question choice
    dispatch({ type: "resetChoice" });
    // updates the question index to go to the next
    dispatch({ type: "updatecurrentQuestionIndex" });
  };

  // resets the quiz to take again
  const handleRetryBtn = () => {
    dispatch({ type: "reset" });
  };

  // handles checking the answers
  const handleCheckBtn = () => {
    dispatch({ type: "checkBtn" });
  };

  return (
    <div>
      {/* if start button is clicked render Quiz component else StartPage */}
      {state.isStarted ? (
        <MyContext.Provider
          value={{
            handleClick,
            handleSubmit,
            handleRetryBtn,
            handleCheckBtn,
            state,
            dispatch,
          }}
        >
          <Quiz />
        </MyContext.Provider>
      ) : (
        <MyContext.Provider value={{ handleStart, handleSelect }}>
          <StartPage />
        </MyContext.Provider>
      )}
    </div>
  );
};

export default Home;
