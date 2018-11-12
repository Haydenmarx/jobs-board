import React, { Component } from "react";
import Job from "./Job";
import { connect } from "react-redux";

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      loaded: 10
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight + 100 >=
      document.documentElement.scrollHeight
    ) {
      this.setState({ loaded: this.state.loaded + 10 });
    }
  };

  render() {
    return (
      <ul style={{ paddingLeft: "0px", marginTop: "0px" }}>
        {this.props.jobs.slice(0, this.state.loaded).map((job, i) => {
          return (
            <Job
              index={i}
              key={job.id}
              title={job.title}
              category={job.category}
              budget={job.budget}
              description={job.description}
              company={job.company}
              jobID={job.id}
              applicants={job.applicants}
              posterID={job.posterID}
            />
          );
        })}
        {this.state.loaded >= this.props.jobs.length && (
          <li>End of Available Jobs</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    jobs: state.jobs
  };
};

export default connect(mapStateToProps)(Jobs);
