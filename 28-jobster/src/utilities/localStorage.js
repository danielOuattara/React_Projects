const addUserToLocalStorage = (userObject) => {
  return localStorage.setItem("user", JSON.stringify(userObject));
};

const removeUserFromLocalStorage = () => {
  return localStorage.removeItem("user");
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  return user;
};

//------------------------ TOKEN
const addTokenToLocalStorage = (tokenArg) => {
  return localStorage.setItem("jobster_token", JSON.stringify(tokenArg));
};

const removeTokenFromLocalStorage = () => {
  return localStorage.removeItem("jobster_token");
};

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("jobster_token")
    ? JSON.parse(localStorage.getItem("jobster_token"))
    : null;
  return token;
};

export {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
};
