// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// - Call that function three times, passing in different values each time.
// - Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = function (age, amountPerDay) {
  const maximumAge = 62;

  const yearsRemaining = maximumAge - age;
  const daysRemaining = yearsRemaining * 365.25; // Including leap years.

  const requiredHotdogs = Math.ceil( amountPerDay * daysRemaining );

  console.log(`You will need ${ requiredHotdogs } to last you until the ripe old age of ${ maximumAge }`);
};

calculateSupply(11, 20);
calculateSupply(50, 3.12353535);
calculateSupply(70, 19);
