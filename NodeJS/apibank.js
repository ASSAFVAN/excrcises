const express = require("express");
const uniqid = require("uniqid");
const users = require("./users.json");
const app = express();

//telling express to deal with json
app.use(express.json());

app.get("/users", (req, res) => {
  //   Show details of all users
  //  Can fetch all details of all the users
  // return all the users to the client
});

app.get("/users/:id", (req, res) => {
  // Show details of user
  // Can fetch all details of a particular user
  // return the user to the client
});

app.put("/users/:id", (req, res) => {
  // four actions all operated by update.
  // In the body we need to get the amount of money with the type of action.
  // Depositing
  // Can deposit cash to a user. (by the users passport id and amount of cash)
  // return to the client the updated user
  // Update credit
  // Can update a users credit (only positive numbers)
  // return to the client the updated user
  // Withdraw money
  // Can withdraw money from the user (can withdraw money until the cash and credit run out)
  // return to the client the updated user
  //  Transferring
  // Can transfer money from one user to another with credit(can transfer money until the cash and credit run out)
  // return two users to the client
  //id is the user who transfers the money from and the other id is from the body in the postman
});

app.post("/users", (req, res) => {
  //create a user
  //Add users
  // Can add users to the bank. Each user has the following: passport id, cash(default 0), credit(default 0).
  //return to the client the new user.
});

// json structure:
// array of objects

// {"password id": uniqid(),
// "cash": 0,
// "credit": 0}

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`listenning on port ${PORT} `);
});
