const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First Middleware");
  next();
});

app.use((req, res, next) => {
  console.log("2nd Middleware");
  next();
});

app.get("/users", (req, res, next) => {
  console.log("Users Page", req.url);
  res.send("<p>Hello! from User's page</p>");
});

app.use("/", (req, res, next) => {
  console.log("Root Page", req.url);
  res.send("<p>Hello!</p>");
});

app.listen(3001);
