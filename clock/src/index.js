import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("LTS"),
    };
  }
  componentDidMount() {
    this.time = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  tick() {
    this.setState({
      time: moment().format("LTS"),
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div id="clock">{this.state.time}</div>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
