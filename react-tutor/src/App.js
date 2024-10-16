import animals, { useAnimal } from "./information";
function App() {
  const [cat, dog] = animals;
  // console.log(cat);

  const [animal, makeSound] = useAnimal(cat);
  console.log(animal);
  makeSound();
  return <div></div>;
}

export default App;
