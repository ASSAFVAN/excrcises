const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`listenning on port ${PORT} `);
});

//get
app.get("/numbers", (req, res) => {
  res.send("success using send method");
});

//post
app.post("/numbers", (req, res) => {
  res.send("success using post method");
});

//delete
app.delete("/numbers", (req, res) => {
  res.send("success using delete method");
});

//put
app.put("/numbers", (req, res) => {
  res.send("success using put method");
});
