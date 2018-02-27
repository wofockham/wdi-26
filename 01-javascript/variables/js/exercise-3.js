// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const age = 58;
const maximumAge = 62;

const yearsRemaining = maximumAge - age;
const daysRemaining = yearsRemaining * 365.25;

const amountPerDay = 9; // Hotdogs

const requiredHotdogs = amountPerDay * daysRemaining;

console.log(`You will need ${ requiredHotdogs } to last you until the ripe old age of ${ maximumAge }`);
