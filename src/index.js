//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

const customStyle = {
  color: "",
  fontFamily: "sans",
};
const date = new Date();
const time = date.getHours();

let greeting;

if (time < 12) {
  customStyle.color = "red";
  greeting = "Good Morning";
} else if (time < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good evening";
  customStyle.color = "blue";
}
ReactDom.render(
  <div>
    <p>{`${date}`}</p>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
