var Person = function(name){
  // JavaScript silently does this when calling a function
  // with 'new', e.g., new Person().
  // var this = {};

  this.name = name;

  this.getName = function(){
    return this.name;
  };

  // JavaScript silently does this when calling a function
  // with 'new', e.g., new Person().
  // this.__proto__ = Person.prototype;
  // return this;
};

var WebDeveloper = function(name, skill){
  // JavaScript silently does this when calling a function
  // with 'new', e.g., new WebDeveloper().
  // var this = {};

  // Call superclass constructor, substituting the WebDeveloper 'this'.
  Person.apply(this, arguments);

  this.skill = skill;

  this.getSkill = function() {
    return this.skill;
  };

  // JavaScript silently does this when calling a function
  // with 'new', e.g., new WebDeveloper().
  // this.__proto__ = WebDeveloper.prototype;
  // return this;
};
WebDeveloper.prototype = new Person(); // WebDeveloper pseudo-class extends Person pseudo-class.

var adam = new Person('Adam');

var john = new WebDeveloper('John', 'JavaScript');
var paul = new WebDeveloper('Paul', 'PHP');

console.log(adam.getName()); // outputs: 'Adam'
//console.log(adam.getSkill()); // throws an error: function getSkill is not defined within Person class

console.log(john.getName()); // outputs: 'John'
console.log(john.getSkill()); // outputs: 'JavaScript'

console.log(paul.getName()); // outputs: 'Paul'
console.log(paul.getSkill()); // outputs: 'PHP'
