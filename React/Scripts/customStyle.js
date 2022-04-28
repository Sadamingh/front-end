import React from "react";
import ReactDOM from "react-dom";

var fname = "Adam";
var lname = "Edelweiss";
var number = Math.floor(Math.random() * 10);

var today = new Date();
var currentYear = today.getFullYear();

var imgURL = "https://picsum.photos/300/200";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1 style={customStyle} contentEditable="true" spellCheck="false">
      Hello {`${fname} ${lname}`}!
    </h1>
    <p>Your lucky number is {number}.</p>
    <img src={imgURL} />
    <ul>
      <li> Hello </li>
      <li> Hello </li>
      <li> Hello </li>
    </ul>
    <footer>Copyright in {currentYear}.</footer>
  </div>,
  document.getElementById("root")
);
