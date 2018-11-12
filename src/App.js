import React from "react";
import Jobs from "./components/Jobs";
import NewJob from "./components/NewJob";
import GithubJobs from "./components/GithubJobs";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

const App = props => {
  const demo = () => {
    props.SwitchUserType(props.user);
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        {props.user.company !== "false" && (
          <Button style={{ width: "100%" }} onClick={demo}>
            Change To Applicant View
          </Button>
        )}
        {props.user.company === "false" && (
          <Button style={{ width: "100%" }} onClick={demo}>
            Change To Employeer View
          </Button>
        )}
        {props.user.company !== "false" && <NewJob />}
        <Jobs />
      </div>
      <GithubJobs />
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    SwitchUserType: user =>
      dispatch({
        type: "Demo",
        user
      })
  };
};

const mapStateToProps = function(state) {
  return {
    user: state.users
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
