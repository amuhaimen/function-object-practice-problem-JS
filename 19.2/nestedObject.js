// nested object:

const myProfile = {
  name: "S.M Muhaimen",
  skills: ["html", "css", "javaScript", "react"],
  myPhone: {
    name: "Redmi",
    ram: "gb",
    color: {
      silicon: "silver",
      blackDiamond: "Black",
      rom: {
        large: "8gb",
        medium: "6gb",
        small: "4gb",
      },
    },
  },
};

console.log(myProfile.skills[1]);
//result: css;

console.log(myProfile.myPhone.color.blackDiamond);

// result:Black;
