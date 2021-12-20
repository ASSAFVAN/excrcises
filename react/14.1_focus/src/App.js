import React from "react";
import "./App.css";
import InputText from "./Components/InputText";

class App extends React.Component {
  state = { textInput: "" };

  render() {
    return (
      <div>
        <InputText />
      </div>
    );
  }
}

export default App;
