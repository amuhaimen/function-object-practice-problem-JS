const me = {
  name: "Muhaimen",
  id: 10,
  isActive: true,
  skills: ["html", "css", "js", "react"],
};

// loop through an object and prints the key value pairs with their types;

for (const propertyName in me) {
  var valueName = me[propertyName];
  //   console.log("key:", propertyName, "|", typeof propertyName);
}

// console.log(keys);

function alternateCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    // If index is even, convert to uppercase; if odd, convert to lowercase
    if (i % 2 === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}

let inputString = "javascript is awesome";
let outputString = alternateCase(inputString);
console.log(outputString);
