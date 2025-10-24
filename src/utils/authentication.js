export const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const addUser = (newUser) => {
  const users = getUsers();
  // TODO: check for existing user
  // const exists = users.some(user => user.email === newUser.email);
  // if (exists) {
  //   throw new Error('this email is already registered.');
  // }
  
  users.push(newUser);
  console.log(newUser);
  console.log(localStorage.getItem('users'));
  saveUsers(users);
};
