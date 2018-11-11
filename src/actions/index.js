export const SignIn = (id, name, company = null, applied = {}) => ({
  type: "LogIn_USER",
  id,
  name,
  company,
  applied
});

export const SignOut = () => ({
  type: "LogOut_USER"
});

export const UserApply = id => ({
  type: "UpdateApplied_USER",
  id: id
});

export const JobApply = (id, name, index, date) => ({
  type: "ApplyTo_Job",
  index,
  id,
  name,
  date
});

export const JobAdd = (
  id,
  title,
  category,
  budget,
  description,
  company,
  posterID,
  applicants = []
) => ({
  case: "Add_Job",
  id,
  title,
  category,
  budget,
  description,
  company,
  posterID,
  applicants
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
