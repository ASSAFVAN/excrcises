import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div>{props.children}</div>
      <div>
        <button className="buttons">SHARE</button>
        <button className="buttons">EXPLORE</button>
      </div>
    </div>
  );
};

export default Card;
