import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,
    };
  }

  render() {
    // 1.Conditional rendering using if-else

    if (this.state.isLogged) {
      return (
        <div>
          <h1>Welcome Joiya</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome Guest</h1>
        </div>
      );
    }

    //2. Element variable( We store element to be rendered in a variable)

    let message = "";
    if (this.state.isLogged) {
      message = (
        <div>
          <h1>Hello joiya</h1>
        </div>
      );
    } else {
      message = (
        <div>
          <h1>Hello Guest</h1>
        </div>
      );
    }
    return message;

    //3.Ternary operator

    return this.state.isLogged ? (
      <div>
        <h1>Hello joiya</h1>
      </div>
    ) : (
      <div>
        <h1>Hello Guest</h1>
      </div>
    )

    //4.Short circuit approaco
    return (
      this.state.isLogged && (
        <div>
          <h1>Hello Joiya</h1>
        </div>
      )
    );
  }
}
export default UserGreeting;
