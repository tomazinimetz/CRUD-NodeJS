const express = require("express");
const models = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await models.book.findAll();
  return res.send(books);
});

module.exports = (app) => app.use("/book", router);
