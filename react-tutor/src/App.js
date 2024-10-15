import Card from "./components/Card";
import informations from "./information";

function createCard(information) {
  return (
    <Card
      img={information.imgURL}
      name={information.name}
      discription={information.discription}
    />
  );
}

function App(props) {
  return (
    <div className="app">
      <h1>EMOJI STORE</h1>
      {informations.map(createCard)}
    </div>
  );
}

export default App;
