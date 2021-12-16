const { ObjectID } = require("mongodb");

const racesIds = [
  "619fe061a1403ba0f837c8c5",
  "619fe07ca1403ba0f837c8c6",
  "619fe092a1403ba0f837c8c7",
];

const facesIds = [
  "61951b13f00db8633725d602",
  "61951b35f00db8633725d603",
  "61951b88f00db8633725d605",
];

const historyIds = [
  "618bc2fed18bdd1707f0fef5",
  "618bc449d18bdd1707f0fef6",
  "618bc4a9d18bdd1707f0fef7",
];

const skillIds = [
  "618bb4fee6a3e4570b365ae9",
  "618bb553e6a3e4570b365aea",
  "618bb580e6a3e4570b365aeb",
];

const classIds = [
  "619019b4eac49cb66d5b30e0",
  "61901a40eac49cb66d5b30e1",
  "61901a51eac49cb66d5b30e2",
];

const clothesIds = [
  "61950cfbf00db8633725d5ff",
  "61950ea6f00db8633725d600",
  "61950ec2f00db8633725d601",
];

const rand = (arr) => ObjectID(arr[Math.ceil(Math.random() * arr.length - 1)]);

const createCharacterObject = () => ({
  name: `Hero №_${Math.random()}`,
  race: rand(racesIds),
  class: rand(classIds),
  face: rand(facesIds),
  history: rand(historyIds),
  skill: skillIds.map((i) => ObjectID(i)),
  clothes: rand(clothesIds),
});

const createCharactersArray = (quantity) =>
  new Array(quantity).fill(null).map(() => createCharacterObject());

module.exports = {
  createCharactersArray,
};
