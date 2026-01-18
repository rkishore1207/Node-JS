const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>First Assignment</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Welcome to my first Assignment !</h1>");
    res.write("<form action='/create-user' method='POST' >");
    res.write("<input type='text' name='userName' />");
    res.write("<button type='submit' >Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>First Assignment's Users</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(data).toString();
      const userName = parsedData.split("=")[1];
      console.log(userName);

      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head>");
      res.write("<title>Created User</title>");
      res.write("</head>");
      res.write("<body>");
      res.write("<ul>");
      res.write(`<li>${userName}</li>`);
      res.write("</ul>");
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  }
});

server.listen(3001);
