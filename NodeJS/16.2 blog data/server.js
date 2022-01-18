const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const url = "mongodb://localhost:27017";
const app = express();

const cid = new ObjectID();

MongoClient.connect(url, function (error, client) {
  if (error) {
    return console.log("unable to connect to database");
  }
  console.log("connected correctly");

  const db = client.db("blog");

  db.collection("users").insertOne({
    name: "assaf",
    email: "vanunuassaf@gmail.com",
  });
  db.collection("users").insertOne({
    name: "john",
    email: "johnsmoith@gmail.com",
  });

  db.collection("posts").insertOne({
    title: "nodejs install",
    text: "how to install nodejs?",
    tags: ["node", "nodejs", "backend"],
    owner: ObjectID("61e6a4295480612c69650d65"),
    comments: [
      {
        commentId: cid,
        text: "it is simple...",
        owner: ObjectID("61e6a9bd8cd20aaeef2d998a"),
      },
    ],
  });

  db.collection("posts").insertOne({
    title: "react",
    text: "how to install react?",
    tags: ["react", "frontend"],
    owner: ObjectID("61e6a4295480612c69650d65"),
    comments: [
      {
        commentId: cid,
        text: "react install is...",
        owner: ObjectID("61e6a9bd8cd20aaeef2d998a"),
      },
    ],
  });
});
