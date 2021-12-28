import React from "react";

//Steps to create state in components
//1.Create state object in constructor method of class
//2.Bind that state object with render method

//Props are passed as argument to component
//Props are immutable
//Functional components - props
//Class components - this.props


//State is an object which is maintained inside a component
//We can change the state
//Functional components - useState hook
//Class components - this.state

class Message extends React.Component {
  constructor() {
    super(); //We need to call constructor of base class
    this.state = {
      message: "Please subscibe my channel",
    };
  }

  changeMessage() {
    //this,setState method accept an object which is new State of our state object
    this.setState({
      message: "Thanks for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
