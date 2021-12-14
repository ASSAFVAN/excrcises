import React from "react";
// import "./box.css";
class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { myClass: "hidden" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ myClass: "show" });
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ myClass: "hidden" });
    }, 4000);
  }

  render() {
    return (
      <div
        className={`${this.state.myClass} red`}
        style={{ width: this.props.width, height: this.props.height }}
      ></div>
    );
  }
}

export default Box;
