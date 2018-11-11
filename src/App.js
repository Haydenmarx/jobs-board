import React, { Component } from "react";
import fire from "./config";
import Jobs from "./components/Jobs";
import NewJob from "./components/NewJob";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);
    messagesRef.on("child_added", snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    });
  }
  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire
      .database()
      .ref("messages")
      .push(this.inputEl.value);
    this.inputEl.value = ""; // <- clear the input
  }
  render() {
    return (
      <div>
        {/* <form onSubmit={this.addMessage.bind(this)}> */}
        {/* {console.log(this, this.context.store.getState())} */}
        {/* {console.log(this)} */}
        {/*
        <input type="text" ref={el => (this.inputEl = el)} />
        <input type="submit" />
        <ul>
          this.state.messages.map(message => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
        */}
        {this.props.user.company !== null && <NewJob />}
        <Jobs />
        {/*</form>*/}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.users
  };
};

export default connect(mapStateToProps)(App);
