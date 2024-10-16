const animals = [
  {
    name: "Cat",
    sound: "Meow",
    feeding: { food: 2, water: 3 },
    live: ["Tree", "home", "river"],
  },
  { name: "Dog", sound: "Woof" },
];

function useAnimal(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}

export default animals;
export { useAnimal };
