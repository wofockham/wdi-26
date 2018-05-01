const d = document;
d.gebid = d.getElementById;
d.qs = d.querySelector;
d.qsa = d.querySelectorAll;

const setup = function () {
  // Variables persist through a closure.
  const button = d.gebid('click-me');
  let message = 'Merry Christmas';

  button.addEventListener('click', function () {
    d.gebid('content').innerHTML = message; // Can still access message via the closure
  });

  console.log('goodbye, exiting function');
};

setup();
// console.log( message ); // variable is not accessible.

// let currentID = 0;
// const bikeID = function () {
//   return currentID++;
// }

const idMaker = function () {
  let currentID = 0; // This data will persist in the closure.

  return function () {
    return currentID++;
  }
};

const bikeID = idMaker();
const carID = idMaker();

const bikes = [bikeID(), bikeID(), bikeID()];

// HTML Helper Functions
// const h1 = function (text) {
//   return `<h1>${text}</h1>`;
// };
//
// const h2 = function (text) {
//   return `<h2>${text}</h2>`;
// }
//
// const p = function (text) {
//   return `<p>${text}</p>`;
// }

const tag = function (tagName) {
  // const specificTag = tagName; // explictly saving the tag in the closure
  return function (text) {
    return `<${tagName}>${text}</${tagName}>`;
  }
}

const h1 = tag('h1');
const h2 = tag('h2');
const p = tag('p');

h1('hotdogs'); // <h1>hotdogs</h1>
