// Numbers must be sorted before you can binarySearch
// And don't forget: .sort() is broken for numbers.
const numbers = [5, 7, 11, 15, 19, 27, 34, 39, 44, 45, 51, 58, 59];

const binarySearch = (haystack, needle) => {
  let start = 0;
  let end = haystack.length - 1;

  while (start <= end) {
    let mid = Math.round( start + (end - start) / 2 ); // This line is interesting

    if (haystack[mid] > needle) {
      end = mid - 1;
    } else if (haystack[mid] < needle) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return null;
}

for (let i = 0; i < numbers.length; i++) {
  let candidate = numbers[i];
  console.log( binarySearch( numbers, candidate ) );
}

console.log( binarySearch(numbers, 10001) );
