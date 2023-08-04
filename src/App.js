import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <div className="close" onClick={() => setisOpen(!isOpen)}>
        X
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : " "}>1</div>
            <div className={step >= 2 ? "active" : " "}>2</div>
            <div className={step >= 3 ? "active" : " "}>3</div>
          </div>

          <p className="message">
            {" "}
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              bgcolor="#7950f2"
              textcolor="white"
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button bgcolor="#7950f2" textcolor="white" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textcolor, bgcolor, children, onClick }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
