import React from "react";

export default class App extends React.Component {
  state = {
    date: "",
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    let date = new Date().toDateString();
    this.setState({ date });
  };

  render() {
    const { date } = this.state;

    return <div>{date}</div>;
  }
}
