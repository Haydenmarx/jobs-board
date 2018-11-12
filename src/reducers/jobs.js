const jobs = (state = [], action) => {
  switch (action.type) {
    case "Add_Multiple_Jobs":
      // console.log("action", action);
      // return state;
      return [...action.jobs, ...state];
    case "Add_Job":
      const newJob = {};
      newJob.id = action.id;
      newJob.title = action.title;
      newJob.category = action.category;
      newJob.budget = action.budget;
      newJob.description = action.description;
      newJob.company = action.company;
      newJob.posterID = action.posterID;
      newJob.applicants = [];
      return [newJob, ...state];
    case "ApplyTo_Job":
      const updated = state.slice(action.index)[0];
      return [
        ...state.slice(0, action.index),
        {
          ...updated,
          applicants: [
            { id: action.id, name: action.name, date: action.date },
            ...updated.applicants
          ]
        },
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

export default jobs;
