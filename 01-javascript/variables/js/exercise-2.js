// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

const currentYear = 2018;
const birthYear = 1984;

const age1 = currentYear - birthYear;
const age2 = age1 - 1;

console.log(`They are either ${ age1 } or ${ age2 }`);
