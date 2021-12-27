import React, { useState } from "react";

export default function Paragraph({ text, maxLength }) {
  let shownText = text.substring(0, maxLength);
  const [myText, setShownText] = useState(`${shownText}...`);
  const [btnText, setBtnText] = useState("read more");

  const handleClick = () => {
    if (myText.length === maxLength + 3) {
      setShownText(text);
      setBtnText("show less");
    } else {
      setShownText(`${shownText}...`);
      setBtnText("read more");
    }
  };

  return (
    <div>
      <span>{myText}</span>
      <button onClick={handleClick}>{btnText}</button>
    </div>
  );
}
