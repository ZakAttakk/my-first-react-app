import React from "react";
import SpecialBox from "./components/SpecialBox";
import ReallySpecialBox from "./components/ReallySpecialBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    // this.resetClicks = this.resetClicks.bind(this);
  }

  componentDidMount = () => {
    console.log("You main App compoent loaded!  Here are 5 bonus clicks!");
    this.setState({ clicks: 5 });
  };

  addClick = () => {
    var newNumber = this.state.clicks + 1;
    this.setState({ clicks: newNumber });
  };

  resetClicks = () => {
    console.log("test");
    this.setState({ clicks: 0 });
  };

  render = () => {
    console.log("render");
    if (this.state.clicks >= 20) {
      var box = (
        <ReallySpecialBox
          clicks={this.state.clicks}
          resetClicks={this.resetClicks}
        />
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <div>Clicks: {this.state.clicks}</div>
        <br />
        <button onClick={this.addClick}>Click me</button>
        <br />
        {this.state.clicks >= 10 ? <SpecialBox /> : <div></div>}
        {box}
      </div>
    );
  };
}

export default App;
