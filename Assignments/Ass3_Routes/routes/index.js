const express = require("express");
const rootDirectory = require("../utils/path");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).sendFile(path.join(rootDirectory, "views", "index.html"));
});

module.exports = router;
