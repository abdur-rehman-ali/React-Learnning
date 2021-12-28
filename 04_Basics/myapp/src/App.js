import "./App.css";

import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Greet from "./components/Greet";

let App = () => {
  return (
    <div>
      <Hello name="ali" aka="joyia">
        <p>Some extra information about ali</p>
      </Hello>
      <Hello name="root" aka="spiderman">
        <h6>Root is a good batsmen</h6>
      </Hello>
      <Hello name="bairstow" aka="batsman" />
      <Welcome name="joyia" />
      <Welcome name="saad" />
      <Welcome name="ali" />
      <Greet />
    </div>
  );
};

export default App;