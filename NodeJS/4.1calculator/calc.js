const yargs = require("yargs");

// console.log(yargs.argv);

//Add

yargs.command({
  command: "add",
  describe: "adding 2 numbers",
  builder: {
    firstNum: {
      demandOption: true,
      type: "number",
    },
    secondNum: {
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.firstNum + argv.secondNum);
  },
});

//Sub

yargs.command({
  command: "sub",
  describe: "sub 2 numbers",
  builder: {
    firstNum: {
      demandOption: true,
      type: "number",
    },
    secondNum: {
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.firstNum - argv.secondNum);
  },
});

//Mult

yargs.command({
  command: "mult",
  describe: "mult 2 numbers",
  builder: {
    firstNum: {
      demandOption: true,
      type: "number",
    },
    secondNum: {
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.firstNum * argv.secondNum);
  },
});

//Pow

yargs.command({
  command: "pow",
  describe: "pow 2 numbers",
  builder: {
    firstNum: {
      demandOption: true,
      type: "number",
    },
    secondNum: {
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(Math.pow(argv.firstNum, argv.secondNum));
  },
});

yargs.parse();
