const express = require("express");
const models = require("../models");

const router = express.Router();

router.get("/:author_id/books", async function (req, res, next) {
  const books = await models.book.findAll({
    where: {
      author_id: req.params['author_id'],
    },
  });
  return res.send(books);
});

module.exports = (app) => app.use("/", router);
