const express = require("express");
const app = express();

// Defining port
const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
  console.log(`Server is active on ${PORT}`);
});
