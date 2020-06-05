const express = require("express");
const models = require("../models");

const router = express.Router();

router.delete("/:id", async (req, res) => {
  await models.book.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).send();
});

module.exports = (app) => app.use("/book", router);
