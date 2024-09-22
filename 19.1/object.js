var myComputer = { name: "Mac Mini", proccessor: "M1", gpu: "8 core gpu" };

console.log(myComputer);

// result: {name:"Mac mini",proccesor:"M1",gpu:"8 core gpu"}

console.log(myComputer.gpu);

// result: 8 core gpu.

myComputer.proccessor = "M2";
console.log(myComputer);

// result:{ name: 'Mac Mini', proccessor: 'M2', gpu: '8 core gpu' }
