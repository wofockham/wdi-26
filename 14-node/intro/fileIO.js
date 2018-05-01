const fs = require('fs');

// Async: the callback will almost always receive params:
// error, data
fs.readFile('README.txt', 'utf-8', (error, data) => {
  if (error) {
    return console.error(error);
  }

  console.log( data );
});

console.log('program finished');

// Synchronous
try {
  const data = fs.readFileSync('README.txxxt', 'utf-8');
  console.log( data );
} catch (error) {
  console.log('there was an error');
  console.log(error);
  console.log('exiting gracefully');
}
