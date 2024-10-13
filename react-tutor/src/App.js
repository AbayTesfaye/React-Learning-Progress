import logo from "./logo.svg";
import "./App.css";

const fname = "Abay";
const lname = "Tesfaye";
const number = 7;
function App() {
  return (
    <div>
      <h1>My name is: {fname + " " + lname}</h1>
      <h3>My lucky number is: {number}</h3>
    </div>
  );
}

export default App;
