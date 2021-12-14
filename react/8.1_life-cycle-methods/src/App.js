import React from "react";
import "./App.css";

class App extends React.Component {
  state = { favoriteColor: "yellow" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "red" });
    }, 2000);
  }

  componentDidUpdate() {
    const myDiv = document.getElementById("myDiv");
    myDiv.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="myDiv"></div>
      </div>
    );
  }
}

export default App;
