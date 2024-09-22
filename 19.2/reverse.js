// reverse string:
// 1st way

const sentence = "I am learning Web dev";

let reverse = " ";

for (const letter of sentence) {
  //   console.log(letter);
  reverse = letter + reverse;
}

console.log(reverse);
// result: ved beW gninrael ma I

// 2nd way:

let rev = " ";

for (var i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  rev = letter + rev;
}
console.log(rev);

// result: ved beW gninrael ma I

// 3rd way:
// shortcut

const reversed = sentence.split("").reverse().join("");
console.log(reversed);
// result: ved beW gninrael ma I
