function addSomeNumbers(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum;
}

var total = addSomeNumbers(10, 20, 39);
// console.log(total);

// result: 69;

function bringShingara(money) {
  var shingaraPrice = 10;
  var quantity = money / shingaraPrice;
  return quantity;
}

var myMoney = 300;
var result = bringShingara(myMoney);
// console.log(result);

// result:30;

function anything(a) {
  var b = 30;
  return;
}

// console.log(anything(10));

// result :undefined

function abc(d) {
  var e = 67;
}

// console.log(abc(3));

// result: undefined

function minus(a, b) {
  var subs = a - b;
  return subs;
  return 20;
  console.log("return kor taratari");
}

var folafol = minus(20, 10);
console.log(folafol);

// result:10
