import React from "react";
import Paragraph from "./Components/Paragraph";
import "./App.css";

export default function App() {
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae debitis labore facere ipsam magnam. Voluptate esse exercitationem quibusdam velit modi porro suscipit quasi omnis odit praesentium. Ea ex facilis vel?";
  const maxLength = 20;

  return (
    <div>
      <Paragraph text={text} maxLength={maxLength} />
    </div>
  );
}
