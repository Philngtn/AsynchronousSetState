import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meaningOfLife: 7,
    };
  }
  // 2nd way to declare state, we dont need the constructor for simple state
  // state = {meaningOfLife:48}

  // Props is added in the index.js to adding the props for the class App

  handleClick = () => {
    this.setState(
      // 1st argument of setState
      (prevState, prevProps) => {
        return { meaningOfLife: prevState.meaningOfLife + prevProps.increment };
      }, // 2nd Argument of setState "to see the result synchoronously"
      () => console.log(this.state.meaningOfLife)
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.meaningOfLife}</p>
          <button onClick={this.handleClick}>Update button</button>
        </header>
      </div>
    );
  }
}

export default App;
