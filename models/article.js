const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: String,
  title: String,
  // image: {
  //     data: Buffer,
  //     contentType: String
  // },
  imageLink: String,
  content: String,
  author: String,
  //   createdAt: new Date(),
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
