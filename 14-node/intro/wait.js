// setTimeout(cb, 4000);
// wait( 4000 ).then( cb ).then( cb1 );

// const wait = function ( ms ) {
//   return new Promise( function (resolve) {
//     setTimeout( resolve, ms );
//   });
// };

// const wait = ( ms ) => {
//   return new Promise( (resolve) => {
//     setTimeout( resolve, ms );
//   });
// };

const wait = ( ms ) => new Promise( (resolve) => setTimeout( resolve, ms ) );

module.exports = wait;
