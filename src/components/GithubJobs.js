import React, { Component } from "react";
import Moment from "moment";
import Button from "@material-ui/core/Button";

class GithubJobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      first: 0,
      last: 10
    };
  }
  componentDidMount() {
    this.setState({ jobs: ["test", "test2"] });
    const api = "https://jobs.github.com/positions.json?location=sf";

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + api)
      .then(response => response.text())
      .then(contents => this.setState({ jobs: JSON.parse(contents) }))
      .catch(() => console.log("Error"));
  }
  viewPreviousJobs = () => {
    if (this.state.last > 10) {
      const first = this.state.first - 10;
      const last = this.state.last - 10;
      this.setState({ first: first, last: last });
    }
  };
  viewNextJobs = () => {
    if (this.state.last < this.state.jobs.length) {
      const first = this.state.first + 10;
      const last = this.state.last + 10;
      this.setState({ first: first, last: last });
    }
  };
  render() {
    return (
      <ul
        style={{
          width: "200px",
          listStyle: "none",
          paddingLeft: "0px",
          textAlign: "center"
        }}
      >
        {this.state.jobs.slice(this.state.first, this.state.last).map(job => {
          return (
            <li key={job.id} style={{ paddingLeft: "5px" }}>
              <a href={job.url} style={{ wordBreak: "break-word" }}>
                {job.type} {job.title}
              </a>
              <p>Location: {job.location}</p>
              <p>Posted: {Moment(job.created_at).fromNow()}</p>
              <hr />
            </li>
          );
        })}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            disabled={this.state.first === 0}
            onClick={this.viewPreviousJobs}
          >
            Prev{" "}
          </Button>
          <Button
            disabled={this.state.last >= this.state.jobs.length}
            onClick={this.viewNextJobs}
          >
            Next
          </Button>
        </div>
      </ul>
    );
  }
}

export default GithubJobs;
