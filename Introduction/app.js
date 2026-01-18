const http = require("http");
const handleRequests = require("./routes");

const server = http.createServer(handleRequests);

server.listen(3000);
