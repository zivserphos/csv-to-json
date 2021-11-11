const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const morganHandler = require("./handlers/morganHandler");
const mongoose = require("mongoose");
const env = require("dotenv").config();

const url = process.env.URL;
mongoose.connect(url);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express();

app.use(express.json());
app.use(
  morganHandler,
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

module.exports = app;
