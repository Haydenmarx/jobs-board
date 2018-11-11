import React, { Component } from "react";

class Job extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        Title Category Budget Description
      </div>
    );
  }
}

export default Job;
