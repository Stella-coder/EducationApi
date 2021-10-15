require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
const url = process.env.MONGODB_URL;
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("connected successfully to database");
  })
  .catch(() => {
    console.log("Error while connecting");
  });

app.get("/", (req, res) => {
  res.json("Welcome to my Education API");
});

app.listen(port, () => {
  console.log(`server is listening to port: ${port}`);
});
