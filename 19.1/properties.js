// 3 ways to get object property value
// =================================================
// 1.object notation

var home = {
  table: "3",
  bed: "2",
  refrigetor: "40",
  chair: "6",
  showCase: "1",
};

var propertyValue1 = home.refrigetor;
console.log(propertyValue1);

// result:40

// 2.
// like array index

var propertyName2 = home["table"];
console.log(home);

//result: 03.

// 3.
// get property by variable;

var hasProperty = "bed";

var propertyName3 = home[hasProperty];
console.log(propertyName3);

// get all keys

var keys = Object.keys(home);
console.log(keys);

// result:[ 'table', 'bed', 'refrigetor', 'chair', 'showCase' ]

// get all values

var values = Object.values(home);
console.log(values);

// result: [ '3', '2', '40', '6', '1' ]

// 3 ways to set object property

var student = { name: "Kalim Uddin", id: 29, class: 9, division: "Science" };

// 1st way
student.name = "Rahim Uddin";
console.log(student);

// result: { name: 'Rahim Uddin', id: 29, class: 9, division: 'Science' }

//  2nd way

student["id"] = 5;
console.log(student);

// result: { name: 'Rahim Uddin', id: 5, class: 9, division: 'Science' }

// 3rd way

var newDivision = "arts";
student["division"] = newDivision;
console.log(student);

//result: { name: 'Rahim Uddin', id: 5, class: 9, division: 'arts' }
