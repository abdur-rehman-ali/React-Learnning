import React from "react";


//Funtion to write code without JSX
let Greet = () => {
  return React.createElement(
    "div",
    { id: "container" },
    React.createElement(
      "h1",
      { className: "heading" },
      "Hello from createElement"
    )
  );
};

export default Greet;
