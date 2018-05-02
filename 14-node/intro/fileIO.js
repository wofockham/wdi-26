const fs = require('fs');

// Synchronous: you have to catch the error yourself
// with Javascript's try/catch.
try {
  const data = fs.readFileSync('README.txxxt', 'utf-8');
  console.log( data );
} catch (error) {
  console.log('there was an error');
  console.log(error);
  console.log('exiting gracefully');
}

// Asynchronous: the callback will generally receive:
// error and data params
// Checking for and handling the error is your responsibility.
fs.readFile('README.txt', 'utf-8', (error, data) => {
  if (error) {
    return console.error(error);
  }

  console.log( data );
});

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
