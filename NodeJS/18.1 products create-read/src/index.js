const express = require("express");
require("./db/mongoose");
const Product = require("./models/product");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/products", (req, res) => {
  const product = new Product(req.body);

  product
    .save()
    .then(() => {
      res.status(201).send(product);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/products", (req, res) => {
  Product.find({})
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/products/active", (req, res) => {
  Product.find({ isActive: true })
    .then((products) => {
      if (!products) {
        return res.status(404).send();
      }
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/products/range", (req, res) => {
  const minValue = req.query.min;
  const maxValue = req.query.max;
  Product.find({ "details.price": { $gte: minValue, $lte: maxValue } })
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/products/:id", (req, res) => {
  const _id = req.params.id;
  Product.findById(_id)
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
