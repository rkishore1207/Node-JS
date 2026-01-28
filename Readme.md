# Node JS

> Whenever you’re ready, feel free to ask:
> Event loop internals
> Streams vs buffers
> How Express handles req / res
> Converting callback-based code to async/await
> Explain this using call stack + event loop diagram
> Show how Express avoids this mistake internally
> Rewrite this using Promises / async-await style

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

![Node Js Life Cycle](https://github.com/user-attachments/assets/e48d5021-9cb6-4f86-b054-8ad65b6c9017)

- Importing a http node module and we have **createServer()** as a method in that object(http).
- It accepts **requestListener** method and it have request and response parameters.
- This createServer() method will execute on each request by just passing the requestListener name alone without calling it(by paranthesis).
- Then this createServer() method will return the `Server` object, with that we can **listen()** the input request.
- Node Js follows a **Event-Driven Architecture** - It owns a concept named `Event Loop`, which continuosly listening for the incoming request.
- Javascript and Node Js are the Single Threaded Language.

#### Streams and Buffers(Parsing of incoming request)

- Typically the request in Node Js are coming as a `Streams of Data`.
- So that, the Node Js server start to **parse them early** before all request receiving our server.
- And these _streams_ are separated into a **chunks** and before parsing, a group of chunks are forming into a **Buffer(like a bus stop)**, if that buffer's chunks are parse, then the next set of buffer will go into parsing.

![Streams and Buffer](https://github.com/user-attachments/assets/c1a023cb-c28b-4283-91c7-c36fcc85db1e)

- `Event Listener` - Whenever the request came into Node Js server, first it will `listen for the event` (data, end, error, etc...). **(request.On()).**
- So, for the createServer(), it is implicitly listening for the data event, so we don't want to explicitly do.

#### Code Execution Flow

- Even though if the response was returned, event listener will still execute.
- Usually Node Js, has it's own **Code Flow Registery**, there it will run the code line by line.
- While running, if it finds any event listener, first it will **register it there(Event Emitter Registery)** and move on to the next line of code.
- Because, the next parameter in the event listener is `CallBack function`, so it will execute after some time.

#### Internal Working of Node Js

- Node Js follows a `Single thread processing`, it will execute all request within a thread.
- But it has **Event Loop**, that will take cares the **Callback functions**.
- On the first iteration, it will execute the sync code and push all the callbacks into **Worker Pool**, on the second iteration, again it will execute those call backs, in the mean time, that one thread will focus on the _next I/O_.

![Node Js Internal Working](https://github.com/user-attachments/assets/7e0eb234-5c62-4d6d-99fa-6762abffceda)
![Event Loop](https://github.com/user-attachments/assets/eb0a6e3d-fcac-4d49-bfcd-f3d1018adacb)

#### Development Tips

- `npm init` helps to create a **package.json** file to any project with our necessary inputs.
- On the **package.json**, we can add our own scripts to execute. To run our own script -> `npm run <name>`, but for start alone -> `npm start`.
- `Nodemon` is the package helps To reflect our changes immediately in the browser by saving.
- When we install the package, if we add **--save-dev**, then this package will only include during our development, if we add **-g**, it will add on the entire machine, if we just add **--save**, then it will add on both dev and production places.
- The `uparrow ^` in the front of all packages, indicates that, if we just type npm install, then this will install all the packages with the latest version.
- But if we have the **package-lock.json** file, then it already have the current version of packages, then npm install will install the **mentioned versions** in the package-lock.json.

## Express Js

- It is a **framework** for Node js, which does all the necessary functionalities, then our job is to focus on the business logics alone.
- Alternatives for Express Js are Vanilla Node Js, Adonis Js, Koa, Sails.js, etc...
