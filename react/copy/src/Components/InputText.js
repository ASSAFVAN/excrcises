import React from "react";
import Button from "./Button";
class InputText extends React.Component {
  state = { text: "" };
  inputRef = React.createRef();

  componentDidMount = () => {
    this.inputRef.current.focus();
  };

  changeInput = (e) => {
    this.setState({ textInput: e.target.value });
  };

  copyText = () => {
    const textArea = this.inputRef.current;
    textArea.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div>
        What is the meaning of life?
        <div>
          <textarea
            ref={this.inputRef}
            onChange={this.changeInput}
            type="textarea"
            value={this.state.text}
          />
        </div>
        <div>
          <Button title="Click to copy" handleClick={this.copyText} />
        </div>
      </div>
    );
  }
}
export default InputText;
