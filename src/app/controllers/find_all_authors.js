const express = require("express");
const models = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  const authors = await models.author.findAll();
  return res.send(authors);
});

module.exports = (app) => app.use("/author", router);
