// loop :
/**
 * 1. for loop,
 * 2. while loop,
 * 3. do-while loop,
 * 4. for in loop (object looping)
 * 5.for of loop
 *
 *
 */

// 1. for of loop.

let numbers = [23, 45, 67, 89, 90, 30, 450, 1123, 3334];

for (const number of numbers) {
  console.log(number);
}

let friends = ["Rahim", "Karim", "Abid", "Nabid"];

for (const friend of friends) {
  console.log(friend);
}

// result:
/**
 Rahim
Karim
Abid
Nabid
 */

// 2. for loop.

for (var i = 0; i < friends.length; i++) {
  let friend = friends[i];
  console.log(friend);
}

/** result:
 Rahim
Karim
Abid
Nabid
 */

let a = 0;
while (i < friends.length) {
  const friend = friends[i];
  i++;
  console.log(friend);
}

/**
 * result:
  Rahim
Karim
Abid
Nabid
 */

// let numbers = [23, 45, 67, 89, 90, 30, 450, 1123, 3334];

let m = 0;
while (m < numbers.length) {
  let number = numbers[m];
  m++;
  console.log(number);
}

/**
 result:
 23
45
67
89
90
30
450
1123
3334
 */
