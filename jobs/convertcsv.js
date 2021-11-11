const csv = require("csvtojson");
const path = require("path");
const mongoose = require("mongoose");
const Agent = require("../mongo/mongodb");

const csvFilePath = path.resolve("../resources/accountants.csv");
console.log(__dirname);
console.log(csvFilePath);
csv()
  .fromFile(csvFilePath)
  .then((accountants) => {
    console.log(accountants);
    // const accountantCollection = accountants
    //   .map((accountant) => {
    //     const licenseId = Object.values(accountant)[0].trim();
    //     const firstName = Object.values(accountant)[2].trim();
    //     const lastName = Object.values(accountant)[3].trim();
    //     const city = Object.values(accountant)[4].trim();

    //     return {
    //       license_id: licenseId,
    //       first_name: firstName,
    //       last_name: lastName,
    //       city: city,
    //     };
    //   })
    //   .filter((accountant) => {
    //     return (
    //       accountant.city &&
    //       accountant.first_name &&
    //       accountant.last_name &&
    //       accountant.license_id
    //     );
    //   });

    // Accountant.insertMany(accountantCollection)
    //   .then(function () {
    //     console.log("Data inserted"); // Success
    //   })
    //   .catch(function (error) {
    //     console.log(error); // Failure
    //   });
  });
