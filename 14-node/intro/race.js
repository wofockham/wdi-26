const wait = require('./wait');

const racer1 = wait(1000).then( () => console.log( 'racer1 finished') );
const racer2 = wait(Math.random() * 10000).then( () => console.log( 'racer2 finished') );
const racer3 = wait(3000).then( () => console.log( 'racer3 finished') );
const racer4 = wait(1500).then( () => console.log( 'racer4 finished') );

Promise.all( [racer1, racer2, racer3, racer4] ).then( () => console.log('the race is over') );
