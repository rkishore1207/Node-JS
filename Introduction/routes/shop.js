const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  //   res.setHeader("Content-type", "text/html"); // optional one
  //   res.send("<h1>Hello from Express Js!</h1>");
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
