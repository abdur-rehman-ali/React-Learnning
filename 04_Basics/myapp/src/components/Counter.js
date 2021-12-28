import React, { Component } from "react";

//1.If ue don't change state using setState method . it will never reflect in UI.
// So always use setState method to modify the state

//2.If code has to be executed after the state has been updated?
//Then place that code in a callback as a second argument to setState method

//3.When you have to update the state based upon the previous state value,
//Pass a function as an argument to setState instead of object


class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    //Never update the state directly,it will not be reflected in UI
    // this.state.count = this.state.count+1;
    // console.log(this.state.count);

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(
    //       "Need to be execute after state has been updated",
    //       this.state.count
    //     );
    //   }
    // );
    // console.log(this.state.count);

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
