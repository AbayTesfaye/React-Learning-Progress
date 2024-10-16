var numbers = [3, 56, 8, 24, 7];

// more about map function
// map is iterate over all array and do something
// const newNumber = numbers.map((num) => num * 2);

// console.log(newNumber);

// filter- is used to produce new array the meet the condition
// const newNumber = numbers.filter((num) => num > 10);

// console.log(newNumber);

// reduce - produce single out put

// const newNumber = numbers.reduce((acc, cur) => {
//   console.log("accumuator" + acc);
//   console.log("current value" + cur);

//   return acc + cur;
// });

// console.log(newNumber);

// find - is return the value that matches the condition first
// const newNumber = numbers.find((num) => num > 4);

// console.log(newNumber);

// findIndex - return the index of the value that matches first condition

// const newNumber = numbers.findIndex((num) => num > 4);

// console.log(newNumber);
const informations = [
  {
    imgURL: "kef.png",
    name: "KEF BROTHER",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, reprehenderit provident. Saepe quas odit consequuntur ab minus sed quos itaque esse quae quia. Et exercitationem quis assumenda autem non laborum?",
  },
  {
    imgURL: "love.png",
    name: "LOVE MOTHER",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, reprehenderit provident. Saepe quas odit consequuntur ab minus sed quos itaque esse quae quia. Et exercitationem quis assumenda autem non laborum?",
  },

  {
    imgURL: "mood.png",
    name: "NICE MOOD",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, reprehenderit provident. Saepe quas odit consequuntur ab minus sed quos itaque esse quae quia. Et exercitationem quis assumenda autem non laborum?",
  },
];

export default informations;
