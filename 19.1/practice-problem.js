//1.
//Write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing what will be the output? Now call the foo() to see the output

function foo() {
  console.log("foo");
  bar();
}

function bar() {
  console.log("bar");
}

// var result1 = foo();
// console.log(result1);

// 2.
// Write a function called make_avg which will take an three integers and return the average of those values

function make_avg(x, y, z) {
  var total = x + y + z;
  //   console.log(total);

  var avg = total / 3;

  return avg;
}

// var result2 = make_avg(30, 56, 43);
// console.log(result2);

// 3.
// Challenging: Write a function called make_avg which will take an array of integers and the size of that array and return the average of those values.

function make_avg_arr(arr, size) {
  var sum = 0;
  for (var i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum / size;
}

var numbers = [20, 30, 40, 15, 20, 55];
var size_ = numbers.length;
var avg = make_avg_arr(numbers, size_);
// console.log(avg);

// 4.
// Write a function called odd-even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways.
// * Has return + Has Parameter
// * No return + Has parameter

function odd_even(a) {
  var number = a % 2;
  if (number == 0) {
    return a, "is  an even number";
  } else {
    return a, "is an odd number";
  }
}

// console.log(odd_even(15));

// 5.
// You are in a hurry to go to your school on time.But when you are crossing the road, the traffic signal is red coloured, in this situation, if you try to cross the road, you may be in danger. If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code , where there is a variable called signal. It's value can be green, yellow, or red and we will get different activities as output.

var signal = "green";

// if (signal == "green") {
//   console.log("you can go now");
// } else if (signal == "red") {
//   console.log("don't cross the road");
// } else if (signal == "yellow") {
//   console.log("stop now");
// } else {
//   console.log("don't go anymore.");
// }

switch (signal) {
  case "green":
    console.log("you can go now");
    break;
  case "yellow":
    console.log("stop now");
    break;
  case "red":
    console.log("don't cross the road");
    break;
  default:
    console.log("don't go anymore");
}
