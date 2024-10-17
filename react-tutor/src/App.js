import { useState } from "react";
import "./App.css";
function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <form>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <input
        name="fName"
        onChange={handleChange}
        placeholder="First Name"
        value={contact.fName}
      />
      <input
        name="lName"
        onChange={handleChange}
        placeholder="Last Name"
        value={contact.lName}
      />
      <input
        name="email"
        type="email"
        onChange={handleChange}
        value={contact.email}
        placeholder="Email"
      />
      <button>Submit</button>
    </form>
  );
}

export default App;
