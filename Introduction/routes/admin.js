const express = require("express");
const path = require("path");
const rootDirectory = require("../utils/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //   res.send(
  //     "<form action='/admin/add-product' method='POST'><input type='text' name='title'/><button>Add Product</button></form>",
  //   );

  res.sendFile(path.join(rootDirectory, "views", "add-product.html"));
});

// strict to the incoming POST request
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
