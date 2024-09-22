// join:
const myWords = "borendro lal mohon sing thakur";
console.log(myWords);

//result: borendro lal mohon sing thakur

const splitWords = myWords.split(" ");
console.log(splitWords);

// result: [ 'borendro', 'lal', 'mohon', 'sing', 'thakur' ]

// console.log(myWords);

const joinWords = splitWords.join(" ");
console.log(joinWords);
// result: borendro lal mohon sing thakur

console.log(splitWords.join("-"));
// result: borendro-lal-mohon-sing-thakur
console.log(splitWords.join("+"));
// result: borendro+lal+mohon+sing+thakur
