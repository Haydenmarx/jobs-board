import React, { Component } from "react";
import Job from "./Job";
import { connect } from "react-redux";

const testJobs = [
  {
    id: 0,
    title: "Hacker",
    category: "Computer",
    budget: 50000,
    description: "Gain Access to Computers",
    company: "Fake Company",
    posterID: 3,
    applicants: [{ id: 0, name: "hayden", date: Date() }]
  },
  {
    id: 1,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company2",
    posterID: 0,
    applicants: []
  },
  {
    id: 2,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company2",
    posterID: 0,
    applicants: []
  },
  {
    id: 3,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company3",
    posterID: 7,
    applicants: [
      { id: 4, name: "hayden5", date: Date() },
      { id: 3, name: "hayden4", date: Date() },
      { id: 2, name: "hayden3", date: Date() }
    ]
  },
  {
    id: 4,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company3",
    posterID: 0,
    applicants: [
      { id: 4, name: "hayden5", date: Date() },
      { id: 3, name: "hayden4", date: Date() },
      { id: 2, name: "hayden3", date: Date() }
    ]
  },
  {
    id: 5,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company3",
    posterID: 7,
    applicants: [
      { id: 4, name: "hayden5", date: Date() },
      { id: 3, name: "hayden4", date: Date() },
      { id: 2, name: "hayden3", date: Date() },
      { id: 0, name: "hayden", date: Date() }
    ]
  },
  {
    id: 6,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company3",
    posterID: 7,
    applicants: [
      { id: 4, name: "hayden5", date: Date() },
      { id: 7, name: "hayden7", date: Date() }
    ]
  },
  {
    id: 7,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company3",
    posterID: 7,
    applicants: [
      { id: 4, name: "hayden5", date: Date() },
      { id: 5, name: "hayden6", date: Date() },
      { id: 2, name: "hayden3", date: Date() }
    ]
  },
  {
    id: 8,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company3",
    posterID: 7,
    applicants: [
      { id: 4, name: "hayden5", date: Date() },
      { id: 0, name: "hayden", date: Date() }
    ]
  },
  {
    id: 9,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company3",
    posterID: 7,
    applicants: [
      { id: 4, name: "hayden5", date: Date() },
      { id: 6, name: "hayden7", date: Date() },
      { id: 2, name: "hayden3", date: Date() }
    ]
  },
  {
    id: 10,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company3",
    posterID: 7,
    applicants: [
      { id: 4, name: "hayden4", date: Date() },
      { id: 2, name: "hayden3", date: Date() }
    ]
  }
];

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      loaded: 8
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.props.addJobs(testJobs);
  }

  handleScroll = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight + 100 >=
      document.documentElement.scrollHeight
    ) {
      this.setState({ loaded: this.state.loaded + 5 });
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
          <li style={{ textAlign: "center" }}>End of Available Jobs</li>
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

const mapDispatchToProps = dispatch => {
  return {
    getJobs: jobs => dispatch({ type: "Get_Multiple_Jobs", jobs }),
    addJobs: jobs => dispatch({ type: "Add_Multiple_Jobs", jobs })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jobs);
