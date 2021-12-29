import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome here",
    };

    // 3rd way to bind this keyword (inside constructor)
    //Most prefered ones
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    this.setState({
      message: "Thanks for subscribing",
    });
  }

  // 3rd way to bind this keyword (Using arrow function)
  changeMessage = () => {
    this.setState({
      message: "Thanks for subscribing",
    });
  };

  render() {
    return (
      <div>
        <h1>Event bind example - {this.state.message} </h1>
        {/* 1st way to bind this keyword */}
        <button onClick={this.changeMessage.bind(this)}>Subscribe1</button>

        {/* 2nd way to bind this keyword */}
        <button onClick={() => this.changeMessage()}>Subscribe2</button>

        <button onClick={this.changeMessage}>Subscribe3</button>
      </div>
    );
  }
}

export default EventBind;
