const input = process.argv.slice(2);

const sum = input.reduce(function (i, memo) {
  return parseFloat( i ) + parseFloat( memo );
});

console.log( sum );
