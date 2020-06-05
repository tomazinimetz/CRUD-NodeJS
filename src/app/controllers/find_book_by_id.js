const express = require("express");
const models = require("../models");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const book = await models.book.findAll({
    where: {
      id: req.params.id,
    },
  });
  return res.send(book);
});

module.exports = (app) => app.use("/book", router);
