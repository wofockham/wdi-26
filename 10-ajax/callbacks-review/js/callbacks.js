// A callback is a function passed into another function
// and not called by us (necessarily)

// Document ready is a callback ////////////////////////////////////////////////
console.log('A before DOM ready');
$(document).ready(function () {
  console.log('B once the DOM is ready');
});
console.log('C defined outside the DOM ready');

// Timers use a callback ///////////////////////////////////////////////////////
console.log('1');
setTimeout(function () {
  console.log('2');
}, 2000);
console.log('3');

// Event handlers use callbacks ////////////////////////////////////////////////
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo');
});
console.log('Chico');

// Callbacks outside of events (similar to blocks in Ruby)
// Custom functions to use callbacks

const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// for (let i = 0; i < colours.length; i++) {
//   console.log( colours[i] );
// }

const each = function (array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback( array[i] );
  }
}

// each(colours, function (colour) {
//   console.log(colour.toUpperCase());
// });

// ES5
colours.forEach(function (colour) {
  console.log( colour.toUpperCase() );
});

each(colours, console.log);

// Canadian Function Runner
const canadianDo = function (cb) {
  console.log('Sorry to do this, I am trying to be helpful');
  cb();
  console.log('Sorry about that, have a nice day, eh');
}

// Callback hell
each(colours, function (c) {
  canadianDo(function () {
    console.log( c );
  });
});
