const http = require("http");
//const handleRequests = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/add-product", (req, res, next) => {
//   console.log("In the Middleware");
//   next(); // This allows the request to go into the next middleware
// });

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/><button>Add Product</button></form>",
  );
});

// strict to the incoming POST request
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.setHeader("Content-type", "text/html"); // optional one
  res.send("<h1>Hello from Express Js!</h1>");
});

// const server = http.createServer(handleRequests);
// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); // express js itself listening to the port
