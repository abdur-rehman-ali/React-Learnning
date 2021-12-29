import React from "react";

export default function Child(props) {
  return (
    <div>
      {/* Calling method in parent component from button in child component
            by passig method as props */}
      <button onClick={props.eventHandler}>Greet parent</button>

      {/* Passing data as argument from child component to function in parent component  */}
      <button onClick={() => props.eventHandler("child")}>Greet parent1</button>
    </div>
  );
}
