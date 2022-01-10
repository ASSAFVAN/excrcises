// const chalk = require("chalk");
const yargs = require("yargs");
const users = require("./users");

// Create new user command
yargs.command({
  command: "create",
  describe: "Create a new user",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.createUser(argv.name, argv.email);
  },
});

// Read new user command

yargs.command({
  command: "read",
  describe: "Read a user",
  builder: {
    id: {
      describe: "read user",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.readUser(argv.id);
  },
});

// Delete new user command

yargs.command({
  command: "del",
  describe: "Delete a user",
  builder: {
    id: {
      describe: "delete user",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.deleteUser(argv.id);
  },
});

//  Edit user command

yargs.command({
  command: "edit",
  describe: "Edit user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.editUser(argv.id, argv.name, argv.email);
  },
});

yargs.parse();
