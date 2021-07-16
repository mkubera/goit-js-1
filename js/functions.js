function isNotObject(obj) {
  return typeof obj !== "object";
}

function willNotBlend(obj) {
  return obj.blendable !== "It will blend";
}

export function willItBlend(someObject) {
  console.log(arguments);
  // console.log(arguments.forEach((a) => console.log(a)));
  console.log([...arguments]);
  console.log([...arguments].map((a) => a.blendable));
  // debugger: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger
  // debugger;
  return isNotObject(someObject) || willNotBlend(someObject) ? false : true;
}

console.log("willItBlend?", willItBlend({ blendable: "It will blend" }));

// ---------------------------------------------

let counter = 0;

function addToCounter(number = 1) {
  counter += number;
  // counter = counter + number;
}

function changeCounterTo150() {
  counter = 150;
}

function divideCounter(divisionNumber, currentCounter) {
  return currentCounter / divisionNumber;
}

function addToCounterPure(number = 1, currentCounter = 0) {
  return number + currentCounter;
}

function newCounter(currentCounter) {
  const whatever = true;
  console.log(whatever);
  return divideCounter(100, addToCounterPure(1000, currentCounter));
}
// console.log(whatever);

// 1 krok: wywolanie addToCounterPure(1000, currentCounter)
// 2 krok: wywolanie divideCounter(100, rezultat-z-1-kroku)
// 3 krok: wywolanie newCounter(currentCounter) (czyli 2 poprzednich krokow)
// 4 krok: wywolanie console.log, czyli logniecie do konsoli zwrotki z funkcji newCounter
console.log(newCounter(counter));

// counter = addToCounterPure(75, counter); // => 75

changeCounterTo150();
addToCounter(); // => 151
addToCounter(100);
addToCounter(50);

console.log(counter);

// input: array of integers (example: [1,2,3])
// output: integer (example: 1)
function inputOutput(input = [1, 2, 3]) {
  return input[0];
}

function sayHello(name = "Marcin") {
  if (typeof name === "string") {
    return `Hello, ${name}!`;
  } else {
    return "Provided name is not a proper name.";
  }
}

console.log(sayHello("Albert"));
console.log(sayHello());
console.log(sayHello(44));
console.log(sayHello([1, 2, 3]));

// -----------------------------------------------

// FUNCTION DEFINITION
// function keyword - function name - parameters (optional)
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

// CALLING A FUNCTION
// function name - arguments
// return 13 + 12; => 25
addTwoNumbers(13, 12);
// return 3 + 2; => 5
addTwoNumbers(3, 2);
// return 0 + 0; => 0
addTwoNumbers(0, 0);

export { addTwoNumbers };
