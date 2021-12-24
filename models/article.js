const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: String,
  title: String,
  // image: {
  //     data: Buffer,
  //     contentType: String
  // },
  imageLink: String,
  content: String,
  author: String,
  createdAt: Date.now,
});
