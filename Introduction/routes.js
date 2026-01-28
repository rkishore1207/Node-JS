const fs = require("fs");

const handleRequests = (request, response) => {
  if (request.url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>Post Form</title></head>");
    response.write("<body>");
    response.write(
      "<div><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></div>"
    );
    response.write("</body>");
    response.write("</html>");
    return response.end();
  }
  if (request.url === "/message" && request.method === "POST") {
    //temporary redirection
    const data = [];
    request.on("data", (chunk) => {
      console.log(chunk);
      data.push(chunk);
    });
    request.on("end", () => {
      const parsedData = Buffer.concat(data).toString();
      console.log(parsedData);
      const message = parsedData.split("=")[1];
      fs.writeFile("Document.txt", message, (error) => {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
      });
    });
  }
  return;
};

module.exports = handleRequests;
