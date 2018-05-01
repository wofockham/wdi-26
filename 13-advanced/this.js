// this, bind, (call, apply)

const groucho = {
  name: 'Groucho Julius Marx',
  greeting() {
    return `Good evening, my name is ${ this.name }`;
  }
};

const unboundGreeter = groucho.greeting;
unboundGreeter.call( groucho );

const greeter = groucho.greeting.bind( groucho );
greeter();

// apply
const numbers = [1, 4, 6, 8, 9, 1001];

//es5
Math.max.apply( null, numbers ); // => 1001

//es6
Math.max( ...numbers );
