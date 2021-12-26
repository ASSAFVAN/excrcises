import React from "react";
import Todo from "./Components/Todo";
import "./App.css";

export default function App() {
  const todoList = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ];

  const renderItems = () => {
    return todoList.map((element) => {
      return (
        <Todo
          key={element.name}
          name={element.name}
          completed={element.completed}
        />
      );
    });
  };

  return <div>{renderItems()}</div>;
}
