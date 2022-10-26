import React from "react";

class ReallySpecialBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log("Really special Box rendered!");
  };

  render() {
    console.log(this.props);
    return (
      <div className="border">
        You found the really speical box!
        <br />
        Clicks: {this.props.clicks}
        <button onClick={this.props.resetClicks}>Reset Clicks</button>
      </div>
    );
  }
}

export default ReallySpecialBox;
