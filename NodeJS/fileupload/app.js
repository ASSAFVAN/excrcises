const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
require("./src/db/mongoose");
const PORT = process.env.PORT || 5000;

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  limits: {
    fileSize: 1000000, // in 1000000 Bytes -> 1mb
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      // First one of setting File Type to upload
      return cb(new Error("Please upload an image"));
    }

    cb(undefined, true);
  },
});

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);

  res.status(200).send("single file upload successfully");
});

app.post("/multiple", upload.array("images", 3), (req, res) => {
  console.log(req.files);

  res.status(200).send("multiple files upload successfully");
});

app.listen(PORT, () => {
  console.log(`Server is up on port: ${PORT}`);
});
