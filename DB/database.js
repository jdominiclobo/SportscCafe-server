const mongoose = require("mongoose");
const { URI } = require("../config");

const connectDB = () => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log("db connection error", err);
    });
};

module.exports = connectDB;
