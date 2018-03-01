// # Exercises: Objects
//
// ## The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// - Mole
// - Serves: 2
// - Ingredients:
// - cinnamon
// - cumin
// - cocoa
//

const butterscotch = {
  title: 'Butterscotch',
  servings: 1,
  ingredients: ['butter', 'scotch']
};

console.log( butterscotch.title );
console.log( `Serves: ${ butterscotch.servings }` );

console.log('Ingredients:');

for (let i = 0; i < butterscotch.ingredients.length; i++) {
  console.log(butterscotch.ingredients[i]);
}

// ## The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const library = [
  {title: 'THHGTTG', author: 'Douglas Adams', alreadyRead: true},
  {title: 'KJV Bible', author: 'God', alreadyRead: false},
  {title: 'Captain Underpants', author: 'Some Jerk', alreadyRead: false}
];

for (let i = 0; i < library.length; i++) {
  let book = library[i];
  let description = `${ book.title } by ${ book.author }`;

  if (book.alreadyRead) {
    console.log(`You already read ${ description }`);
  } else {
    console.log(`You still need to read ${ description }`);
  }
}

// ## The Movie Database
// It's like IMDB, but much much smaller!
//
// - Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// - Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const movie = {
  title: 'O Brother! Where Art Thou?',
  duration: 117,
  stars: ['George Clooney', 'Francis McDormand', 'Gillian Welch', 'That Really Slinty Guy']
};

const movieInfo = function (m) {
  const description = `${ m.title } lasts for ${ m.duration } minutes. Stars: ${ m.stars.join(', ') }`;
  console.log( description );
};

movieInfo( movie );
