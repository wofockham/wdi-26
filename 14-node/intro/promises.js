// You can convert any callback function to a Promise
// returning function like so:
const readFile = function (filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf-8', function (error, data) {
      if (error) {
        return reject(error);
      }

      resolve(data);
    });
  });
};

// Homework
// 1. Create a function called wait(n) which returns a promise that will run your .then
// after n milliseconds.

// setTimeout(..., 800);
// could now be wait(800).then(...);

// 2. Write a promise based wrapper around XMLHttpRequest
// retrieve(someURL).then(...);
