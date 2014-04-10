var Person = function(name){
  this.name = name;

  // // Figure A: Poor performance!
  // this.getName = function() {
  //   return this.name;
  // };
};

// If class methods are defined on the 'this' object within a constructor function,
// *every instance* of that class will receive a *copy* of that method; all of those
// copies are redundant, and are just a waste of memory. (See Figure A above.)
//
// A better alternative is to define class methods directly on the prototype object.
// In this way, all instances of the class will share a reference to the method.
// Only one copy of the method is stored in memory.
Person.prototype.getName = function(){
  return this.name;
};

var WebDeveloper = function(name, skill){
  // Call superclass constructor.
  Person.apply(this, arguments);

  this.skill = skill;
};

// Object.create() creates a new object whose prototype is set to
// its first argument. This pattern ensures that any methods defined
// on WebDeveloper.prototype will not directly destory methods defined
// on the Person prototype.
//
// Object.create() also does not run the Person constructor function,
// which would be an unnecessary waste of resources when creating
// the WebDeveloper.prototype object, since instances of WebDeveloper
// need to call the Person constructor anyway.
WebDeveloper.prototype = Object.create(Person.prototype);

// Instances of a class inherit the constructor property from their prototype.
// A function, when defined, receives a default prototype whose constructor
// property is set to the function itself, e.g.:
//
// WebDeveloper.prototype = { constructor: WebDeveloper };
//
// Since the WebDeveloper prototype was created using Object.create() -- instead
// of a constructor function, e.g., new Person() -- its constructor prototype
// will point to the Object function, e.g.:
//
// WebDeveloper.prototype = { constructor: Object };
//
// Therefore, we have to manually correct the constructor property so that instances
// of WebDeveloper can have a reference to their actual constructor.
WebDeveloper.prototype.constructor = WebDeveloper;

WebDeveloper.prototype.getSkill = function() {
  return this.skill;
};

var adam = new Person('Adam');

var john = new WebDeveloper('John', 'JavaScript');
var paul = new WebDeveloper('Paul', 'PHP');

console.log(adam.getName()); // outputs: 'Adam'
//console.log(adam.getSkill()); // throws an error: function getSkill is not defined within Person class

console.log(john.getName()); // outputs: 'John'
console.log(john.getSkill()); // outputs: 'JavaScript'

console.log(paul.getName()); // outputs: 'Paul'
console.log(paul.getSkill()); // outputs: 'PHP'
