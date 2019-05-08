/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. -Window/ global Object binding
    - Here `this` refers to the window object, an object which has a global scope in a given context

* 2. Implicit Binding
    - When `this` is used inside an object, the binding is said to be implicit

* 3. New Binding
     - here `this` refers to the instance of the object returned by a constructor function

* 4. - Explicit Binding
     `this` here refers to a binding that occurs when `apply` and `call` methods are used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
  var name = 'Chinedu';
  function example() {
    return this.name
  }
  console.log(example());
// Principle 2

// code example for Implicit Binding
const catObj = {
  name: 'Cat',
  sound: 'Meow',
  speak: function() {
    return `I am a ${this.name}, I can ${this.sound} for you`
  }
}
console.log(catObj.speak())


// Principle 3

// code example for New Binding

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
  this.speak = function() {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(this.name[0])) {
      return `I am an ${this.name}, I can ${this.sound} for you;`
    } else {
      return `I am a ${this.name}, I can ${this.sound} for you;`
    }
  }
}

const cow = new Animal('Cow', 'Moo');
console.log(cow.speak())

const elephant = new Animal('Elephant', 'trumpet');
console.log(elephant.speak())

// Principle 4

// code example for Explicit Binding

// binding cow to elephant causes cow to behave like elephant and vice-versa
console.log(cow.speak.call(elephant));
console.log(elephant.speak.apply(cow));