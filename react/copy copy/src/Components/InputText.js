import React, { Component } from "react";

export default class InputText extends Component {
  // state = { text: "" };
  handleSubmit = () => {
    console.log(this.props);

    this.props.handleCallback(this.state, this.props.id);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.inputText}
          // onChange={this.handleOnChange}
          onChange={this.props.changedValue}
        />
        {/* <button onClick={this.handleSubmit}>Create User</button> */}
      </div>
    );
  }
}
