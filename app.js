const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const morganHandler = require("./handlers/morganHandler");
const env = require("dotenv").config();
const Agent = require("./mongo/mongodb");
const app = express();

app.use(express.json());
app.use(
  morganHandler,
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

module.exports = app;
