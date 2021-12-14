import React from "react";

// const Card = (props) => {

// };

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div>{this.props.children}</div>
        <div>
          <button className="buttons">SHARE</button>
          <button className="buttons">EXPLORE</button>
        </div>
      </div>
    );
  }
}

export default Card;
