const express = require("express");
const models = require("../models");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const authors = await models.author.findAll({
    where: {
      id: req.params.id,
    },
  });
  return res.send(authors);
});

module.exports = (app) => app.use("/author", router);
