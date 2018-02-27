// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// - Call that function 3 times with 3 different values for the arguments.

const tellFortune = function (numChildren, partnerName, geoLocation, jobTitle) {
  const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numChildren } kids.`; // Interpolation
  console.log(fortune); // Optional
  return fortune; // Optional
};

tellFortune(14, 'Beth', 'Hawaii', 'advice columnist');
tellFortune(3, 'Craigsy', 'West Pennant Hills', 'landscape gardening');
tellFortune(3, 'Jeff', 'Broken Hill', 'currently unemployed');
