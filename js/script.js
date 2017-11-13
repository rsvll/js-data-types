//====================NUMBERS =======================
// this declares my Variable
var myVar;
// this sets the value of the myVar Variable to the number .7
myVar = .7;

//==================strings =======================
// names are strings and are used to with single or double quotes
var myName = 'Richard';
// a double quoted string cannot contain double quotes within unless are escaped using a \, same applied to single quoted strings.
var mySentence = "what's up";
//Strings cannot break lines by default
var myLongString = "This actually isn't too long.";

//=================BOOLEANS ========================
// Booleans are either true or false
var myBoolean = false;

var numA = 14;
var numB = 27;
// addition in js is done with the + symbol
var sumOfAandB = numA + numB;
//This reassings the value of the numA variable to 32, this does not effect the line above but will effect the line below
numA = 32;

//subtraction is done with a - symbol
var numAMinusNumB = numA - numB;

//multiplication is done through an *
var numC = 3 * 3;

//Division is done with /
var numD = 4 / 2;

//Exponenrs are done with **
var myExponents = 2 ** 4;

//modulus is done with a % returning the remainder after division, 5 % 2 = 1
var myModulus = 5 % 2;

//this is concatenation, adding strings together spaces must be put in manually
var myFullName = myName + " " + "Sevilla";

//===========OBJECTS =========
// This creates the me variable and assigns to be an object
var me = {
  // objects are made of named key value pairs;
  name: "Richard Sevilla",
  age: 23,
  isAwesome: true,
  head: {
    eyes: 2,
    hairColor: 'brown',
    brain: true
  }
};
// properties on the me object would generally be accessed using .notation
// me .name would return Richard Sevilla me .hea.eyes would return 2

console.log(me.age);

// This sets the age property on the me object to the value of 24
me.age = 24;

console.log(me.age);

//================ARRAYS ==========

//arrays are key value pairs where the key is a number, arrays are created  [], each element within an array is seperated by a ,
var myArr = [55, "Tiger", true, me];

// Arrays in Javascript start with a 0 index, to access elements within an array use [] withing index number, myArr[0] would be 55, myArr[1] would be tiger

console.log(myArr[0]);

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday"];

// Objects can hold arrays as the value for properties
// This adds a hobbies property to the me object and sets it to be an array
me.hobbies = ['Code', 'Music', 'Food', 'Games'];

console.log(me.hobbies[0]);

//=========undefined========
var something;
//Something is undefined, the variable has been declared but a value has not been set.
console.log(something);

var somethingElse;
//If JS encounters a variable that doesnt exist it will throw an error and stop executing nay further script by default
console.log(somethingElse);

//=========null=============
//null is nothing
var nothing = null;

//========= FUNCTIONS ======

// This is a function declaration that create a function called sayHello
function sayHello() {
  console.log('Welcome to Javascript City!');
}
// funtion declaration do not end in a ;

// This calls or invokes the sayHello Funtion.
sayHello();

//this works because funtions declerations are hoised to the top of the document when read by the browser
sayHelloTo("meeeee")

//Variable created within a funtion are only available within the function, this is called funtion scope.
function sayHelloTo(name) {
  var message = "Welcome to Javascript City " + name + "!";
  console.log(message);
}

sayHelloTo("Richard");
sayHelloTo(myFullName);

// This is a function expression that creates a function called sumNums
var sumNums = function(firstNum, secondNum){
  var sum = firstNum + secondNum;
//This will return the value of the sum variable to where the function is called, once a return statement is triggered no further code within the function is executed.
  return sum;
};

sumNums(2,2);

console.log( sumNums(2,2) );

var mySum = sumNums(923, 13454);
