import React from "react";
import ReactDOM from "react-dom";
import * as calculator from "./App";

ReactDOM.render(
  <div>
    <ul>
      <li>{calculator.add(2, 3)}</li>
      <li>{calculator.subtract(2, 3)}</li>
      <li>{calculator.multiply(2, 3)}</li>
      <li>{calculator.divide(2, 3)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
