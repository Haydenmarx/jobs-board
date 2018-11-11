const testJobs = [
  {
    id: 0,
    title: "Hacker",
    category: "Computer",
    budget: 50000,
    description: "Gain Access to Computers",
    company: "Fake Company",
    posterID: 3,
    applicants: [{ id: 0, name: "hayden", date: "XXXXX" }]
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
      { id: 4, name: "hayden3", date: "XXXXX" },
      { id: 1, name: "hayden2", date: "XXXXX" },
      { id: 2, name: "hayden3", date: "XXXXX" }
    ]
  }
];

const jobs = (state = testJobs, action) => {
  switch (action.type) {
    case "Add_Job":
      return [action.payload, ...state];
    case "ApplyTo_Job":
      const updated = state.slice(action.index)[0];
      console.log(action);
      // return state;
      // { ...updated, applicants: [action.payload, ...updated.applicants] },
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
