import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1>Hello world!</h1>;
}

ReactDOM.render(
  <div>
    <Heading></Heading>
    <ul>
      <li>Hello</li>
      <li>Hello</li>
      <li>Hello</li>
      <li>Hello</li>
    </ul>
  </div>,
  document.getElementById("root")
);
