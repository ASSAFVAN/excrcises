const axios = require("axios");
const request = require("request");

axios.get("https://api.chucknorris.io/jokes/random").then((data) => {
  console.log(data.data.value);
});

request(
  { url: "https://api.chucknorris.io/jokes/random", json: true },
  (error, response) => {
    console.log(response.body.value);
  }
);
