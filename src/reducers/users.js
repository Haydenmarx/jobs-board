const testEmployer = {
  id: 0,
  name: "Hayden",
  company: "Microsoft",
  applied: {}
};
const testApplicant = {
  id: 1,
  name: "Not Hayden",
  company: null,
  applied: { 0: true, 5: true, 8: true }
};

const users = (state = testEmployer, action) => {
  switch (action.type) {
    case "LogIn_USER":
      return {
        id: action.id,
        name: action.name,
        company: action.company,
        applied: action.applied
      };
    case "LogOut_USER":
      return {};
    case "UpdateApplied_USER":
      let newApp = {};
      newApp[action.id] = true;
      return {
        ...state,
        applied: { ...state.applied, ...newApp }
      };
    default:
      return state;
  }
};

export default users;
