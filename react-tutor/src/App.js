import "./App.css";
import "./calculator";
import profile from "./calculator";

function Card(props) {
  return (
    <div className="Card">
      <h1>{props.name}</h1>
      <img src={props.img} alt="image" />
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
}
function App(props) {
  return (
    <div className="container">
      <h1 className="heading">My Contact</h1>
      <Card
        name={profile[0].name}
        img="logo192.png"
        email={profile[0].email}
        phone={profile[0].phone}
      />
      <Card
        name={profile[1].name}
        img="logo192.png"
        email={profile[1].email}
        phone={profile[1].phone}
      />
    </div>
  );
}

export default App;
