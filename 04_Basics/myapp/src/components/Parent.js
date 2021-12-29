import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Parent",
    };
    this.greet = this.greet.bind(this);
  }

  greet(child) {
    alert(`This is ${this.state.message} from ${child}`);
  }
  render() {
    return (
      <div>
        {/* <h1>This is parent component</h1> */}
        <Child eventHandler={this.greet} />
      </div>
    );
  }
}

export default Parent;
