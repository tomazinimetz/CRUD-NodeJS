const models = require("../models");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  const book = await models.book.create(req.body);
  return res.send(book);
});

module.exports = (app) => app.use("/book", router);
