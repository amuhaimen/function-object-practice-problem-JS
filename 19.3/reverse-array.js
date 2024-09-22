// array reverse.

const numbers = [30, 34, 56, 78, 98, 776];

const reverse = numbers.reverse();
console.log(reverse);
// result: [ 776, 98, 78, 56, 34, 30 ]
console.log(numbers);
// result:[ 776, 98, 78, 56, 34, 30 ]

// 2nd way to reverse an array

const revNumber = [];
for (const number of numbers) {
  revNumber.unshift(number);
}

console.log(revNumber);

// result: [ 776, 98, 78, 56, 34, 30 ]

// this is not reverse array.

const rev_num = [];

for (const number of numbers) {
  rev_num.push(number);
}

console.log(rev_num);

// result: [ 30, 34, 56, 78, 98, 776 ]

// 3rd way to reverse

let reverseNum = [];
for (var i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  reverseNum.unshift(number);
}
console.log(reverseNum);

// result: [ 776, 98, 78, 56, 34, 30 ];

let rev_rev_rev = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  rev_rev_rev.push(num);
}

console.log(rev_rev_rev);
// result: [ 776, 98, 78, 56, 34, 30 ]
