import React, { Component } from "react";
import db from "./config";
import Jobs from "./components/Jobs";
import NewJob from "./components/NewJob";
import GithubJobs from "./components/GithubJobs";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    // var docRef = db.collection("users").doc("m3a0oAoUkq2tWVRnOST9");
    /*
    db.collection("users").add({
      name: "Third Person",
      company: "Google",
      applied: {}
    })
    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    */
    // docRef
    //   .get()
    //   .then(function(doc) {
    //     if (doc.exists) {
    //       console.log("Document data:", doc.data());
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting document:", error);
    //   });
    // db.collection("users")
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       console.log(`${doc.id} => ${doc.data()}`);
    //     });
    //   });
    // let messagesRef = fire
    //   .database()
    //   .ref("users")
    //   .orderByKey()
    //   .limitToLast(100);
    // messagesRef.on("child_added", snapshot => {
    /* Update React state when message is added at Firebase Database */
    // console.log(snapshot);
    // let message = { text: snapshot.val(), id: snapshot.key };
    // this.setState({ messages: [message].concat(this.state.messages) });
    // });
  }
  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    /*
    fire
      .database()
      .ref("messages")
      .push(this.inputEl.value);
    this.inputEl.value = ""; // <- clear the input
    */
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
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
        <div style={{ flex: 1 }}>
          {this.props.user.company !== "false" && <NewJob />}
          <Jobs />
        </div>
        <GithubJobs />
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
