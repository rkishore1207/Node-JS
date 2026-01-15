const fs = require("fs");

//File System (this behaviour is available in raw Javascript)
//fs.writeFileSync("hello.txt", "Hello from Node JS");

const array = ["Cricket", "Football"];
const person = {
  name: "Kishore",
  age: 23,
  role: "Developer",
};

const arrayCopyBySlice = array.slice();
console.log(arrayCopyBySlice);

// Spread Operator helps to pull out the values from the array or object and put it to the place where we intend to do.
const arrayCopyBySperadOperator = [...array];
console.log(arrayCopyBySperadOperator);

const personCopy = { ...person };
console.log(personCopy);

// Rest Operator is used to pass multiple parameters(no limit) as array and we can utilize this as a array in that method
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3));

// Asynchronous

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is Done!");
  fetchData()
    .then((response) => {
      console.log(response);
      return fetchData();
    })
    .then((response2) => console.log(response2));
}, 2000);
console.log("Synchronous");
