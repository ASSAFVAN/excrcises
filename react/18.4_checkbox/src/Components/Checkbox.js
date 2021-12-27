import React, { useState } from "react";

export default function Checkbox() {
  const arr = ["one", "two", "three", "four", "five"];

  const [isChecked, setIsChecked] = useState([]);

  const handleOnChange = (id) => {
    console.log(id);
  };

  const renderBoxes = () => {
    return arr.map((box, i) => {
      return (
        <li key={i}>
          <input type="checkbox" onChange={() => handleOnChange(i)}></input>
          {box}
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{renderBoxes()}</ul>
      <div>
        <button>Delete</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
