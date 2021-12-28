import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [show, setShow] = useState(false);
  const label = useRef("Edit");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  const handleClick = () => {
    if (label.current === "Edit") {
      label.current = "Save";
      setShow(true);
    } else {
      label.current = "Edit";
      setShow(false);
    }
  };

  return (
    <div>
      {show && <input ref={inputRef} type="text" />}
      <button ref={label} onClick={handleClick}>
        {label.current}
      </button>
    </div>
  );
}
