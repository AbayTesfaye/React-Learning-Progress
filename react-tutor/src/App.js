import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [headingText, setHeadingText] = useState("");
  function handleOnChange(e) {
    setUsername(e.target.value);
  }

  function handleOnClick(event) {
    setHeadingText(username);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleOnClick}>
      <h1> Hello {headingText}</h1>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Username"
        value={username}
      />
      <button>Submit</button>
    </form>
  );
}

export default App;
