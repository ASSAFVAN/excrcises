const express = require("express");
const app = express();
const PORT = 3000;

const arr = [1, 2, 3, 4, 5, 6];

app.use(express.json());

//get
app.get("/numbers", (req, res) => {
  // res.send("success using get method");
  res.send(arr);
});

//post
app.post("/numbers", (req, res) => {
  // res.send("success using post method");
  const newNumber = req.body.number;
  console.log(newNumber);
  const exists = arr.find((number) => {
    return number === newNumber;
  });
  if (exists) {
    res.status(400).send("cannot add number, alredy exists");
  } else {
    arr.push(newNumber);
    res.status(201).send(arr);
  }
});

//delete
app.delete("/numbers/:number", (req, res) => {
  // res.send("success using delete method");
  const numberToDelete = Number(req.params.number);
  console.log(numberToDelete);
  const newArr = arr.filter((number) => {
    return numberToDelete !== number;
  });
  console.log(newArr);

  if (arr.length > newArr.length) {
    res.send(newArr);
  } else {
    res.status(400).send("cannot find number");
  }
});

//put
app.put("/numbers/:number", (req, res) => {
  // res.send("success using put method");
  const numberToDelete = Number(req.params.number);
  const numberToReplace = req.body.number;
  const newArr = arr.filter((number) => {
    return numberToDelete !== number;
  });
  if (arr.length > newArr.length) {
    newArr.push(numberToReplace);
    res.send(newArr);
  } else {
    res.status(400).send("cannot find number");
  }
});

app.listen(PORT, (req, res) => {
  console.log(`listenning on port ${PORT} `);
});
