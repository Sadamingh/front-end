import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
var greeting = "Hello";

var customStyle = {
  color: "gray"
};

if (today.getHours() < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (today.getHours() >= 12 && today.getHours() <= 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
