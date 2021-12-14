// Import the react and reactdom liberaries
import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

// create a react Component
const App = () => {
  const data = ["hello", " ", "world"];
  const number1 = 5;
  const number2 = 6;
  return <div>{data}</div>;
  return <div>{("number1", "+", "number2")}</div>;
};
const App2 = () => {
  const number1 = 5;
  const number2 = 6;
  const sum = number1 + number2;
  return <div>{`${number1}+${number2}=${sum}`}</div>;
};
const App3 = () => {
  const string = "I love react!";
  const stringLength = string.length;
  return <div>{`The string's length is ${stringLength}`}</div>;
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
ReactDOM.render(<App2 />, document.querySelector("#root"));
ReactDOM.render(<App3 />, document.querySelector("#root"));
