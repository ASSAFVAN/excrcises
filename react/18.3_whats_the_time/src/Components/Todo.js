import React, { useState } from "react";

export default function Todo(props) {
  const [isCompleted, setIsCompleted] = useState(props.completed);

  const handleClick = () => {
    isCompleted ? setIsCompleted(false) : setIsCompleted(true);
  };

  return (
    <div>
      <label className={`${!isCompleted ? "cross" : ""}`}>{props.name}</label>
      <button onClick={handleClick}>
        {isCompleted ? <span>&#10003;</span> : <span>&#10007;</span>}
      </button>
    </div>
  );
}
