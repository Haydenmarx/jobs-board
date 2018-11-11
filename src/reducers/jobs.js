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
    id: 3,
    title: "Hacker2",
    category: "Computer",
    budget: 70000,
    description: "Gain Access to Computers and Phones",
    company: "Fake Company3",
    posterID: 1,
    applicants: [
      { id: 4, name: "hayden3", date: Date() },
      { id: 1, name: "hayden2", date: Date() },
      { id: 2, name: "hayden3", date: Date() }
    ]
  }
];

const jobs = (state = testJobs, action) => {
  switch (action.type) {
    case "Add_Job":
      const newJob = {};
      newJob.id = state.length + 1;
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
