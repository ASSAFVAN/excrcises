import React from "react";
// import "./app.css";
//hot replacement
if (module.hot) {
  module.hot.accept();
}
class ChangeBox extends React.Component {
  state = {
    count: 0,
    style: {
      backgroundColor: `#333`,
      width: "200px",
      height: "200px",
      borderRadius: 0,
    },
  };

  componentDidMount() {
    // const styleObj = { backgroundColor: `#${randomColor}`, width: "200px", height: "200px" };
    setInterval(() => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      this.setState((prevState) => ({
        style: {
          ...prevState.style,
          backgroundColor: `#${randomColor}`,
        },
        count: this.state.count + 1,
      }));
    }, 500);
  }
  componentDidUpdate() {
    if (this.state.count === 5) {
      this.setState((prevState) => ({
        style: {
          ...prevState.style,
          borderRadius: "50%",
        },
        count: this.state.count + 1,
      }));
    }
  }
  render() {
    return <div style={this.state.style}></div>;
  }
}

export default ChangeBox;
