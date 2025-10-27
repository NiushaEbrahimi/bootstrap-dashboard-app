export const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const addUser = (newUser) => {
  const users = getUsers();
  users.push(newUser);
  console.log(newUser);
  console.log(localStorage.getItem('users'));
  saveUsers(users);
};
