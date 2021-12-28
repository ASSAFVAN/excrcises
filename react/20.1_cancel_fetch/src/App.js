import { useState } from "react";
import "./App.css";
import FetchData from "./Components/FetchData";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
      {show && <FetchData />}
    </div>
  );
}
