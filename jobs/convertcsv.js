const csv = require("csvtojson");
const path = require("path");
const mongoose = require("mongoose");
const Agent = require("../mongo/mongodb");
const env = require("dotenv").config({ path: "../.env" });

const url = process.env.URL;
console.log(url);
mongoose.connect(url);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const csvFilePath = path.resolve("../resources/accountants.csv");
csv()
  .fromFile(csvFilePath)
  .then((accountants) => {
    const accountantCollection = accountants
      .map((accountant) => {
        const licenseId = Object.values(accountant)[0].trim();
        const name = Object.values(accountant)[1].trim();
        const city = Object.values(accountant)[2].trim();

        return {
          licenseId: licenseId,
          name: name,
          city: city,
        };
      })
      .filter((accountant) => {
        return accountant.city && accountant.name && accountant.licenseId;
      });

    Agent.insertMany(accountantCollection)
      .then(function () {
        console.log("Data inserted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
  });
