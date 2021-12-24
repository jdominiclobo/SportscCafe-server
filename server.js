const express = require("express");
const connectDB = require("./DB/database");
const app = express();

// Defining port
const PORT = process.env.PORT || 8080;

connectDB();

// Listening to the port
app.listen(PORT, () => {
  console.log(`Server is active on ${PORT}`);
});
