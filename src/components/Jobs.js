import React from "react";
import Job from "./Job";
import { connect } from "react-redux";

const Jobs = props => {
  return (
    <ul>
      {props.jobs.map((job, i) => {
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
    </ul>
  );
};

const mapStateToProps = function(state) {
  return {
    jobs: state.jobs
  };
};

export default connect(mapStateToProps)(Jobs);
