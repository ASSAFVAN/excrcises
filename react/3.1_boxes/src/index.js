import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

const BoxContainer = () => {
  return (
    <div>
      <div className="green-box a">
        <div className="blue-box">
          <div className="pink-box">
            <div className="purple-box"></div>
            <div className="purple-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<BoxContainer />, document.querySelector("#root"));
