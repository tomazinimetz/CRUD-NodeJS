const models = require("../models");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  const author = await models.author.create(req.body);
  return res.send(author);
});

module.exports = (app) => app.use("/author", router);
