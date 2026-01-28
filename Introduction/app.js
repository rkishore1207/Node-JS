const http = require("http");
//const handleRequests = require("./routes");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the Middleware");
  next(); // This allows the request to go into the next middleware
});

app.use((req, res, next) => {
  console.log("In Another Middleware");
});

// const server = http.createServer(handleRequests);
const server = http.createServer(app);

server.listen(3000);
