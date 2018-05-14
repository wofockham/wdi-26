// Write a function to reverse a string.

const lazyReverse = function (s) {
  // This is cheating?
  return s.split('').reverse().join('');
}

console.log('SoMeStRiNg', lazyReverse('SoMeStRiNg'));

// Iterative reverse
// const reverse = function (s) {
//   let output = '';
//   for (let i = s.length - 1; i >= 0; i--) {
//     output += s[i]; // Add character to the end of output
//   }
//   return output;
// }

const reverse = function (s) {
  let output = '';
  s.split('').forEach((c) => {
    output = c + output; // Add character to the beginning of output.
  });
  return output;
}

console.log('SoMeStRiNg', reverse('SoMeStRiNg'));

// Recursive reverse
const recursiveReverse = function (s) {
  if (s === '') {
    return ''; // Base case
  } else {
    return s[ s.length - 1] + recursiveReverse( s.slice(0, s.length - 1 ) );
  }
}

console.log('SoMeStRiNg', recursiveReverse('SoMeStRiNg'));
