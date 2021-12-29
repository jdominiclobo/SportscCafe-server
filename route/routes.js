const express = require("express");
const router = express.Router();

const articleController = require("../controllers/articleController");

router.get("/articles", articleController.list);
router.get("/articles/:id", articleController.show);
router.post("/articles", articleController.create);
router.put("/articles/:id", articleController.update);
router.delete("/articles/:id", articleController.delete);

module.exports = router;
