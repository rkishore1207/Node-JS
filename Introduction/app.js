const http = require("http");
//const handleRequests = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/add-product", (req, res, next) => {
//   console.log("In the Middleware");
//   next(); // This allows the request to go into the next middleware
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).send("<h1>Page Not Found</h1>");
  res.status(404).sendFile(path.join(__dirname, "views", "pageNotFound.html"));
});

// const server = http.createServer(handleRequests);
// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); // express js itself listening to the port
