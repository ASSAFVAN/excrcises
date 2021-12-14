import React from "react";

// const CardDetails = (props) => {

// };

class CardDetails extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default CardDetails;
