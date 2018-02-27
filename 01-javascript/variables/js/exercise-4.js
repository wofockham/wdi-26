// The Geometrizer
// Calculate properties of a circle, using the definitions here.
//
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

const radius = 17;
const circumference = Math.PI * 2 * radius;
console.log(`The circumference is ${ circumference }`);

const area = Math.PI * radius * radius; // PI r^2
console.log(`The area is ${ area }`);
