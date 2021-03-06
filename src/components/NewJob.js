import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormGroup,
  Input,
  InputAdornment,
  TextField,
  Button,
  Card
} from "@material-ui/core";

const styles = {
  formGroup: { width: "80%", margin: "5px 0px 0px 10%" }
};

class NewJob extends Component {
  constructor() {
    super();
    this.state = {
      newJobTitle: "",
      newJobCategory: "",
      newJobBudget: "",
      newJobDescription: ""
    };
  }
  updateState = e => {
    const updated = {};
    updated[e.target.id] = e.target.value;
    this.setState(updated);
  };
  clearForm = () => {
    this.updateState({ target: { id: "newJobTitle", value: "" } });
    this.updateState({ target: { id: "newJobCategory", value: "" } });
    this.updateState({ target: { id: "newJobBudget", value: "" } });
    this.updateState({ target: { id: "newJobDescription", value: "" } });
  };
  render() {
    return (
      <Card>
        <FormGroup style={styles.formGroup}>
          <label>Job Title:</label>
          <Input
            id="newJobTitle"
            value={this.state.newJobTitle}
            onChange={this.updateState}
          />
        </FormGroup>
        <FormGroup style={styles.formGroup}>
          <label>Category:</label>
          <Input
            id="newJobCategory"
            value={this.state.newJobCategory}
            onChange={this.updateState}
          />
        </FormGroup>
        <FormGroup style={styles.formGroup}>
          <label>Budget:</label>
          <Input
            id="newJobBudget"
            value={this.state.newJobBudget}
            onChange={this.updateState}
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormGroup>
        <FormGroup style={styles.formGroup}>
          <label>Description:</label>
          <TextField
            id="newJobDescription"
            value={this.state.newJobDescription}
            onChange={this.updateState}
          />
        </FormGroup>
        <Button
          variant="contained"
          color="primary"
          style={styles.formGroup}
          onClick={() => {
            this.props.AddJob(
              this.state.newJobTitle,
              this.state.newJobCategory,
              this.state.newJobBudget,
              this.state.newJobDescription,
              this.props.user.company,
              this.props.user.id,
              {},
              this.props.jobs.length + 1
            );
            this.clearForm();
          }}
        >
          Submit New Job!
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.users,
    jobs: state.jobs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddJob: (
      title,
      category,
      budget,
      description,
      company,
      posterID,
      applicants,
      id
    ) =>
      dispatch({
        type: "Add_Job",
        title,
        category,
        budget,
        description,
        company,
        posterID,
        applicants,
        id
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewJob);
