import React from "react";

const CardDetails = (props) => {
  return (
    <div>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default CardDetails;
