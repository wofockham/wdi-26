// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//

const numChildren = 14;
const partnerName = 'Beth';
const geoLocation = "Hawaii";
const jobTitle = 'advice columnist';

const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numChildren } kids.`; // Interpolation
console.log( fortune );
