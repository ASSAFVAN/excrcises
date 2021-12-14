import React from "react";
import "./App.css";
import Box from "./Components/Box";

class App extends React.Component {
  render() {
    return (
      <div>
        <Box width="100px" height="100px" />
        <Box width="130px" height="80px" />
        <Box width="140px" height="60px" />
      </div>
    );
  }
}

export default App;
