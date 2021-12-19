import React from "react";
class Name extends React.Component {
  displayNames = () => {
    const persons = this.props.names;
    return persons.map((person, i) => {
      return <div key={i}>{person}</div>;
    });
  };

  render() {
    return <div>{this.displayNames()}</div>;
  }
}
export default Name;
