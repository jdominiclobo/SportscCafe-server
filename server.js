const express = require("express");
const app = express();
const connectDB = require("./DB/database");
const router = require("./route/routes");

// Defining port
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/", router);

// Connect DB
connectDB();

// Listening to the port
app.listen(PORT, () => {
  console.log(`Server is active on ${PORT}`);
});
