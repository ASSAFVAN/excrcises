const fs = require("fs");
const uniqid = require("uniqid");
// const chalk = require("chalk");

const createUser = (name, email) => {
  const users = loadUsers();
  users.push({
    id: uniqid(),
    name,
    email,
  });
  saveUsers(users);
  console.log("New user added!");
};

const readUser = (id) => {
  const users = loadUsers();
  const matchedUser = users.find((user) => {
    return id === user.id;
  });
  if (matchedUser) {
    console.log(`here are the details for user id ${id}:`);
    console.log(`Name: ${matchedUser.name}`);
    console.log(`Email: ${matchedUser.email}`);
  } else {
    console.log("no user found");
  }
};

const deleteUser = (id) => {
  const users = loadUsers();
  const usersToKeep = users.filter((user) => {
    return id !== user.id;
  });
  if (users.length > usersToKeep.length) {
    console.log(`user ${id} deleted`);
    saveUsers(usersToKeep);
  } else {
    console.log("no user found");
  }
};

const editUser = (id, name, email) => {
  const users = loadUsers();
  const filteredUsers = users.filter((user) => {
    return id !== user.id;
  });
  if (user.length > filteredUsers.length) {
    filteredUsers.push({
      id,
      name,
      email,
    });
    saveUsers(filteredUsers);
  } else {
    console.log("user not found");
  }
};

const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  createUser: createUser,
  readUser: readUser,
  deleteUser: deleteUser,
  editUser: editUser,
};
