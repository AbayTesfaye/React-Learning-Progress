import { useState } from "react";
import "./App.css";
function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(e) {
    const newValue = e.target.value;
    const valueName = e.target.name;
    if (valueName === "fName") {
      setFullName({ fName: newValue });
    } else if (valueName === "lName") {
      setFullName({ lName: newValue });
    }

    setFullName((preValue) => {
      if (valueName === "fName") {
        return { fName: newValue, lName: preValue.lName };
      } else if (valueName === "lName") {
        return { fName: preValue.fName, lName: newValue };
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
