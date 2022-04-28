import React from "react";
import ReactDOM from "react-dom";

var name = "Adam";
var number = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {number}.</p>
    <ul>
      <li> Hello </li>
      <li> Hello </li>
      <li> Hello </li>
    </ul>
  </div>,
  document.getElementById("root")
);
