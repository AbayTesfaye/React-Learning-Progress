import { useState } from "react";
import "./App.css";
function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <form>
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <input
        name="fName"
        onChange={handleChange}
        placeholder="First Name"
        value={fullName.fName}
      />
      <input
        name="lName"
        onChange={handleChange}
        placeholder="Last Name"
        value={fullName.lName}
      />
      <button>Submit</button>
    </form>
  );
}

export default App;
