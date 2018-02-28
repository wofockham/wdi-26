// # Exercises: for loops
//
// ## The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++) {
  if ( i % 2 === 0 ) {
    console.log(`${ i } is even`);
  } else {
    console.log(`${ i } is odd`);
  }
}

//
// ## Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let m = 0; m <= 10; m++) { // m++ the postincrement operator
  for (let n = 0; n <= 10; n++) {
    console.log( `${ m } * ${ n } = ${ m * n }` );
  }
}



//
// ## The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const assignGrade = function (score) {
  if (score < 50) {
    return 'F';
  } else if (score <= 60) {
    return 'D';
  } else if (score <= 70) {
    return 'C';
  } else if (score <= 80) {
    return 'B';
  } else {
    return 'A'
  }
};

for (let score = 60; score <= 100; score++) {
  console.log(`For ${ score }, you got a ${ assignGrade(score) }.`);
}

// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
// For each choice, log to the screen a string like: "My #1 choice is blue."

const seasons = [ 'winter', 'autumn', 'spring' ];

for (let i = 0; i < seasons.length; i++) {
  console.log( `My #${ i+1 } choice is ${seasons[i]}` );
}
