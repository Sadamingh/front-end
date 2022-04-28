import React from "react";
import ReactDOM from "react-dom";

var name = "Adam";

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>This is a paragraph.</p>
    <ul>
      <li> Hello </li>
      <li> Hello </li>
      <li> Hello </li>
    </ul>
  </div>,
  document.getElementById("root")
);
