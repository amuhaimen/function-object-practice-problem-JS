// object looping in normal way

// console.log(values);

// result:
// mashroom
// rice
// onion
// garlic
// chilli

// var values = Object.values(shoppingCart);

// for (i = 0; i < values.length; i++) {
//   var value = values[i];
//   console.log(value);
// }

//result:
// 2kg
// 10kg
// 5kg
// 2kg
// 1kg

// var keys = Object.keys(shoppingCart);
// var values = Object.values(shoppingCart);

// for (i = 0; i < keys.length; i++) {
//   var propertyName = keys[i];
//   var valueName = values[i];
//     console.log(propertyName, valueName);
// }

// result:
// mashroom 2kg
// rice 10kg
// onion 5kg
// garlic 2kg
// chilli 1kg

var shoppingCart = {
  mashroom: "2kg",
  rice: "10kg",
  onion: "5kg",
  garlic: "2kg",
  chilli: "1kg",
};

// var propertyNamess = Object.keys(shoppingCart);

//  object looping by for in loop

var myPhone = {
  name: "Redmi",
  color: "black",
  ram: "6gb",
  rom: "3gb",
  storage: "1Tb",
};

for (var propertyName in myPhone) {
  var valueName = myPhone[propertyName];
  console.log(propertyName, ":", valueName);
}

// result:
// name : Redmi
// color : black
// ram : 6gb
// rom : 3gb
// storage : 1Tb
