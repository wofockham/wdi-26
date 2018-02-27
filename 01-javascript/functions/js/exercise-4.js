// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
//
// Create a function called calcArea:
//
// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".

const calcCircumference = function (radius) {
  const circumference = Math.PI * 2 * radius;
  console.log(`The circumference is ${ circumference }`);
  return circumference;
};


const calcArea = function (radius) {
  const area = Math.PI * radius * radius; // PI r^2
  console.log(`The area is ${ area }`);
  return area;
}

calcCircumference(17);
calcArea(17);
calcCircumference(1);
calcArea(1);
