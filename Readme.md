# Node JS

### What is Node Js

- It is a `JavaScript's Runtime`

* The Regular Javascript runs only on a Browser, the browser has it's own **engine(V8)** that would compiles the javascript code into a **Machine Code**.
* With the Javascript, we can modify the **DOM** and **interact with the user**, we cannot run it on a server(or cannot able to compile it on a computer).
* So, Node JS came into play, we can compile and execute this on `computer`(as well as server), to run a backend services.

![Node JS Intro](https://github.com/user-attachments/assets/4507d5ee-5d16-405c-8554-9676fc29ef81)

### Roles and Usage of Node JS

![Usage of Node Js](https://github.com/user-attachments/assets/d3e49f3b-4d12-4c8f-8c9f-9632bba21c46)

- Node Js is a `Javascript Runtime`
- We are not only using nodejs on the server, we can use nodejs on the client too.
- Utility Scripts, Build tool, etc.. (whenever we are using React or Angular, we were using some in-built function, those are written by Node JS).

#### Course Outline

![Course Outline](https://github.com/user-attachments/assets/4a8fa8fd-eba6-4624-b9f9-4eff811a7b5d)

#### REPL Vs Using Files

- **Read Evaluate Printing and Looping** -> we can execute the Node JS code on command line named as REPL.
- But the data were not saved anywhere, so we preferring the **File execution**.

* Just type **`node`** and hit enter, then it will open the Javascript editor mode(REPL).

### JavaScript Concepts

- **Spread Operators** - This operator helps to pull out the value from array or object and put it over the specified place (array or object), mainly used for copy.
- **Rest Operators** - This operator helps to pass multiple arguments as a array (without limiting) and we can utilize it as a array of parameters.
- **Destructuring** - We can pull out the specific property from the object into a constant variable and pull a element from an array by specifying its position.

#### Import a Core Node Js Modules

```Javascript
const http = require('http');
```

- This **http** is a Node js module, which is available **globally**. We can use this module wherever we want by just importing it.
- But this `require()` function will import our local files also by `/ or ./`, if we didn't mention it, then it will search at the NodeJs module and get back the specified module.

#### Creating a First local server

- Importing a http node module and we have **createServer()** as a method in that object(http).
- It accepts **requestListener** method and it have request and response parameters.
- This createServer() method will execute on each request by just passing the requestListener name alone without calling it(by paranthesis).
- Then this createServer() method will return the `Server` object, with that we can **listen()** the input request.
