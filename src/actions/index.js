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
  title,
  category,
  budget,
  description,
  company,
  posterID,
  applicants,
  id
) => ({
  type: "Add_Job",
  id,
  title,
  category,
  budget,
  description,
  company,
  posterID,
  applicants
});

export const JobsGet = jobs => ({
  type: "Get_Multiple_Jobs",
  jobs: jobs
});

export const JobsAdd = jobs => ({
  type: "Add_Multiple_Jobs",
  jobs: jobs
});

export const Demo = user => ({
  type: "Demo",
  user
});
