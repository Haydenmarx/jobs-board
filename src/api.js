import db from "./config";

const api = {};

api.getUser = userID => {
  return db.collection("users").doc(userID);
};

api.getAllUsers = () => {
  return db.collection("users").get();
  // .then(querySnapshot => {
  //   querySnapshot.forEach(doc => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  // });
};

api.addUser = (name, company) => {
  return db.collection("users").add({
    name: name,
    company: company,
    applied: {}
  });
  // .then(function(docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(function(error) {
  //     console.error("Error adding document: ", error);
  //   });
};

api.updateUser = (userID, name, company, applied) => {
  return db
    .collection("users")
    .doc(userID)
    .set({
      name: name,
      company: company,
      applied: applied
    });
};

api.getAllJobs = () => {
  // return db.collection("jobs").get();
  // return db.ref("jobs");
  // db.collection("jobs").on("value", function(snapshot) {
  // console.log(snapshot.val());
  // });
};

api.addJob = (budget, category, company, description, posterID, title) => {
  return db.collection("jobs").add({
    applicants: {},
    budget: budget,
    category: category,
    company: company,
    description: description,
    posterID: posterID,
    title: title
  });
};

api.updateJob = (
  jobID,
  applicants,
  budget,
  category,
  company,
  description,
  posterID,
  title
) => {
  return db
    .collection("jobs")
    .doc(jobID)
    .set({
      applicants: applicants,
      budget: budget,
      category: category,
      company: company,
      description: description,
      posterID: posterID,
      title: title
    });
};

export default api;
