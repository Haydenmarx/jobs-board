import React, { Component } from "react";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import CurrencyFormat from "react-currency-format";
import Moment from "moment";

const classes = {
  card: "card",
  avatar: "avatar",
  media: "media",
  actions: "actions"
};

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      applicants: false
    };
  }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  toggleApplicants = () => {
    this.setState({ applicants: !this.state.applicants });
  };
  renderButton = (applied, jobID, posterID, userID) => {
    if (applied[jobID])
      return (
        <Button style={{ minWidth: "150px" }} variant="contained" disabled>
          Applied
        </Button>
      );
    if (posterID === userID && !this.state.applicants)
      return (
        <Button
          style={{ minWidth: "150px" }}
          variant="contained"
          color="primary"
          onClick={this.toggleApplicants}
        >
          Applicants
        </Button>
      );
    if (posterID === userID && this.state.applicants)
      return (
        <Button
          style={{ minWidth: "150px" }}
          variant="contained"
          color="primary"
          onClick={this.toggleApplicants}
        >
          Job Posting
        </Button>
      );
    /* send message to db to add id, username and date to array of applicants */
    return (
      <Button
        style={{ minWidth: "150px" }}
        variant="contained"
        color="primary"
        onClick={() => {
          this.props.updateJob(
            userID,
            this.props.user.name,
            this.props.index,
            Date()
          );
          this.props.updateUser(jobID);
        }}
      >
        Apply
      </Button>
    );
  };
  render() {
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Job" className={classes.avatar}>
              <span style={{ fontSize: ".3em" }}>{this.props.company}</span>
            </Avatar>
          }
          title={this.props.title}
          subheader={this.props.category}
        />
        <CardContent>
          {!this.state.applicants && (
            <Typography component="p">
              <span>Salary: </span>
              <CurrencyFormat
                value={this.props.budget}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <br />
              <span>Description: </span>
              {this.props.description.slice(0, 34)}
              {this.props.description.length > 34 && <span>...</span>}
            </Typography>
          )}
          {this.state.applicants && (
            <ul>
              {this.props.applicants.length === 0 && (
                <span>No Applicants yet...</span>
              )}
              {this.props.applicants.map(applicant => {
                return (
                  <li key={`job${this.props.jobID}-applicant${applicant.id}`}>
                    <span>{applicant.name}</span>
                    <span>: </span>
                    <span>{Moment(applicant.date).fromNow()}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </CardContent>
        <CardActions
          className={classes.actions}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {this.renderButton(
            this.props.user.applied,
            this.props.jobID,
            this.props.posterID,
            this.props.user.id
          )}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {/* <Typography paragraph>Description:</Typography> */}
            <Typography paragraph>{this.props.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateJob: (id, name, index, date) =>
      dispatch({
        type: "ApplyTo_Job",
        id,
        name,
        index,
        date
      }),
    updateUser: id =>
      dispatch({
        type: "UpdateApplied_USER",
        id
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Job);
