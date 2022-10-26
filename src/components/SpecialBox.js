import React from "react";

class SpecialBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log("Special Box rendered!");
  };

  render() {
    return (
      <div className="border">
        You found the special box!
        <br />
      </div>
    );
  }
}

export default SpecialBox;
