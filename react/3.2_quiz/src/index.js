import React from "react";
import ReactDOM from "react-dom";
import QuizTitle from "./QuizTttle";
import Q1Input from "./Q1Input";
import Q2Input from "./Q2Input";

if (module.hot) {
  module.hot.accept();
}

const QuizContainer = () => {
  return (
    <div>
      <div className="quiz-container">
        <QuizTitle />
        <Q1Input />
        <Q2Input />
      </div>
    </div>
  );
};

ReactDOM.render(<QuizContainer />, document.querySelector("#root"));
