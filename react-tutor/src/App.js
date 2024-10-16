import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div>
      <Form isRegister={isRegister} setIsRegister={setIsRegister} />
    </div>
  );
}

export default App;
