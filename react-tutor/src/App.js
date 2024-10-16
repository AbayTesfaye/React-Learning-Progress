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

var isLoggedIn = false;

function renderConditionaly() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return (
      <form action="">
        <input placeholder="Username" />
        <input type="password" placeholder="Password" />
      </form>
    );
  }
}

function App() {
  return <div className="app">{renderConditionaly()}</div>;
}

export default App;
