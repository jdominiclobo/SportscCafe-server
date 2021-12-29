const Article = require("../models/article");

module.exports.list = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(400).json(err);
  }
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

  //   article.articleId = req.article._id;
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
  Article.findOneAndUpdate({ id }, body)
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
  Article.findOneAndDelete({ id })
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
