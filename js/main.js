"use strict";

const myVariable = "Hello, world";
const myName = "Mikolaj";
let counter = 0;

counter = counter + 1;
counter = counter + 1;
counter = counter + 1;
counter++;

console.log(counter);
console.log(myVariable + "!");

// komentarz(e) / comment(s)

// string, number, boolean, null, undefined, NaN
let firstName = "Marcin";
let lastName = "Palczynski";
console.log(firstName + " " + lastName);
console.log(`${firstName} :: ${lastName} !!!`);

let children = 2;
let icecream = 4.5;

console.log(String(icecream - children));

let isAdmin = false;
let isLoggedIn = true;

let gender = null; // deklaracja zmiennej
gender = "male"; // nadpisanie zmiennej

let hasDog = undefined;
let hasCat; // => undefined

let notANumber = NaN;

// object literal, array (tablica)

let person = {
  fullName: "Mikolaj Kubera",
  age: 38,
  knowsHowToCode: "partially",
  hasDogs: true,
  dogs: [{ name: "Emilka", age: 13 }],
  gender: null,
};

console.log(person);
console.log(person.hasDogs);
console.log(person.dogs);
console.log(person.dogs[0]);
console.log(person.dogs[0].name);
console.log(`${person.dogs[0].name} is ${person.dogs[0].age} years old.`);

// indeksy:    0  1  2  3  4
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[3]);

function firstFn() {
  console.log("My first function!");
  console.log("My first function!");
  console.log("My first function!");
}

firstFn();
firstFn();
firstFn();

export { myName };
