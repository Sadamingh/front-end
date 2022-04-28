import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1>Hello world!</h1>;
}

function Greetings() {
  return (
    <ul>
      <li>Hello</li>
      <li>Hello</li>
      <li>Hello</li>
      <li>Hello</li>
    </ul>
  );
}

ReactDOM.render(
  <div>
    <Heading />
    <Greetings />
  </div>,
  document.getElementById("root")
);
