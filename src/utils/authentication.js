export const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

export const saveCurrentUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const clearCurrentUser = () => {
  localStorage.removeItem('currentUser');
};

export const addUser = (newUser) => {
  const users = getUsers();
  users.push(newUser);
  saveUsers(users);
  saveCurrentUser(newUser);
  return newUser;
};

export const validateUser = (username, password) => {
  return getUsers().find((user) => user.username === username && user.password === password);
};
