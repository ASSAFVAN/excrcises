// Import the react and reactdom liberaries
import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

// create a react Component
const App = () => {
  const buttonText = { text: "click Me!" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
