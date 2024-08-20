import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div className="container-btn-step">
        <button onClick={(c) => setStep(step - 1)}>-</button>
        <p>Step:{step}</p>
        <button onClick={(c) => setStep(step + 1)}>+</button>
      </div>
      <div className="container-btn">
        <button onClick={(c) => setCount(count - step)}>-</button>
        <p>Count:{count}</p>
        <button onClick={(c) => setCount(count + step)}>+</button>
      </div>
      <p className="display">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${count} days ago was `}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
