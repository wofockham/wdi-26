// Factories ///////////////////////////////////////////////////////////////////

// n: name, a: age, f: furColor
const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    meow: function () {
      console.log(`meow, my name is: ${ this.name }`); // this == self
    },
    eat: function (food) {
      console.log(`Yum I love to eat ${ food }`);
    },
    bio: function () {
      console.log(`My name is ${ this.name }, I am ${ this.age } years old with ${ this.furColor } fur color`);
    }
  };
};

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white')
];

for (let i = 0; i < cuteCats.length; i++) {
  console.log(`The cat named ${ cuteCats[i].name } has ${ cuteCats[i].furColor } fur.`);
}

// Prototypal Inheritance //////////////////////////////////////////////////////
// You really don't need to understand or care about this care /////////////////

// Cat constructor
const Cat = function (n, a, f) {
  this.name = n;
  this.age = a;
  this.furColor = f;

  this.meow = function () {
    console.log(`Meow, my name is ${ this.name }`);
  };
};

const cat1 = new Cat('Cooper', 2, 'tabby');
const cat2 = new Cat('Audrey', 2, 'tabby');

Cat.prototype.eat = function (food) {
  console.log(`Yum I love to eat ${food}`);
}

cat1.eat('hotdogs');
cat2.eat('bobby pins');
