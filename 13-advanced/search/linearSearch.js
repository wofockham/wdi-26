const numbers = [1, 4, 5, 6, 8, 9, 10];

// Returns the index of needle in haystack OR null.
const linearSearch = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) { // alt. use .forEach
    if (haystack[i] === needle) {
      return i;
    }
  }

  return null; // needle not found
}

console.log( 'found', linearSearch(numbers, 9), 'expect: 5' );
console.log( 'not found', linearSearch(numbers, 1001), 'expect: null' );
