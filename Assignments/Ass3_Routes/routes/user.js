const express = require("express");
const rootDirectory = require("../utils/path");
const path = require("path");

const router = express.Router();

router.post("/add-user", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/add-user", (req, res, next) => {
  res.status(200).sendFile(path.join(rootDirectory, "views", "user.html"));
});

module.exports = router;
