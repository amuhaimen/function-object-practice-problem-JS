//=================== some practice problem =========================

/*  
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output: ['orange', 'yellow', 'green', 'blue', 'red']
 */

const colors = ["red", "blue", "green", "yellow", "orange"];

let reverseColor = [];

for (let i = 0; i < colors.length; i++) {
  const eachColor = colors[i];
  reverseColor.unshift(eachColor);
}

// console.log(reverseColor);
// result: [ 'orange', 'yellow', 'green', 'blue', 'red' ];

// 2nd way

let revColor = [];
for (const color of colors) {
  revColor.unshift(color);
}
// console.log(revColor);
// result: [ 'orange', 'yellow', 'green', 'blue', 'red' ]

/*
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
*/
const numbers = [12, 98, 5, 41, 23, 78, 46];

let evenArray = [];

for (var i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num % 2 == 0) {
    evenArray.push(num);
  }
}
// console.log(evenArray);
// result: [ 12, 98, 78, 46 ]

/*
 Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.
Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output: 'TomTimTinTik'
 */

var anyName = ["Tom", "Tim", "Tin", "Tik"];

let result = "";
for (const name of anyName) {
  result += name;
}
// console.log(result);
// result: TomTimTinTik

/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'
Output: 'person working hard a am I'
 */

const statement = "I am a hard working person";

let statementSplit = statement.split(" ");

// console.log(statementSplit);

let reversedStatement = [];

for (const state of statementSplit) {
  reversedStatement.unshift(state);
}

let joinReversedStatement = reversedStatement.join(" ");
console.log(joinReversedStatement);

// result: person working hard a am I
