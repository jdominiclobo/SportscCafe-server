const Article = require("../models/article");

module.exports.list = (req, res) => {
  Article.find({ articleId: req.article._id }).then((articles) => {
    res.json(articles);
  });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Article.findOne({ articleId: req.article._id, _id: id })
    .then((article) => {
      if (article) {
        res.json(article);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const article = new Article({
    name: body.name,
    title: body.title,
    imageLink: body.imageLink,
    content: body.content,
    author: body.author,
  });
  article.articleId = req.article._id;
  article
    .save()
    .then((article) => {
      res.json(article);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Article.findOneAndUpdate({ articleId: req.article._id, _id: id }, body)
    .then((article) => {
      if (article) {
        res.json(article);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.delete = (req, res) => {
  const id = req.params.id;
  Article.finOneAndDelete({ articleId: req.article._id, _id: id })
    .then((article) => {
      if (article) {
        res.json(article);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};
