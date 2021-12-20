import React from "react";
class InputText extends React.Component {
  state = { text: "a" };
  inputRef = React.createRef();

  componentDidMount = () => {
    this.inputRef.current.focus();
  };

  render() {
    console.log(this.inputRef);

    return (
      <div>
        <input ref={this.inputRef} type="text" value={this.state.text} />
      </div>
    );
  }
}
export default InputText;
