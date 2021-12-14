import React from "react";
import "./App.css";
// import Counter from "./Components/Counter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.IncrementItem = this.IncrementItem.bind(this);
  }
  IncrementItem = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.IncrementItem}>increment</button>
      </div>
    );
  }
}

export default App;
