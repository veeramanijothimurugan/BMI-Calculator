import { useState } from "react";
import "./App.css";

import bmiICon from "./assets/bmi.png";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmiStatus] = useState("");
  const [error, seterror] = useState("");

  function calculateBMI() {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightInMeter = height / 100;
      const bmiValue = weight / (heightInMeter * heightInMeter);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Over weight");
      } else {
        setBmiStatus("Obese");
      }
      seterror("");
    } else {
      setBmi(null);
      setBmiStatus("");
      seterror("*Please enter the valid numeric values for height and weight.");
    }
  }

  function clear() {
    setBmi(null);
    setHeight("");
    setWeight("");
    setBmiStatus("");
  }

  return (
    <>
      <div className="container">
        <div className="image">
          <img src={bmiICon} alt="BMI ICON" />
        </div>
        <div className="input-field">
          <h3>BMI CALCULATOR</h3>
          {error && <p className="error">{error}</p>}
          <label htmlFor="">Height(cm):</label>
          <input
            type="number"
            onChange={(e) => setHeight(e.target.value)}
            className="height"
            value={height}
          />
          <label htmlFor="">Weight(kg):</label>
          <input
            type="number"
            onChange={(e) => setWeight(e.target.value)}
            className="weight"
            value={weight}
          />
          <div className="btn">
            <button className="calc" onClick={calculateBMI}>
              Caluclate BMI
            </button>
            <button className="clear" onClick={clear}>
              Clear
            </button>
          </div>
          {bmi !== null && (
            <div className="calculated-value">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmistatus}</p>
            </div>
          )}
        </div>
      </div>
      <footer className="copyright">
        <p>
          Designed by{" "}
          <span>
            <a href="https://github.com/veeramanijothimurugan">Veeramani</a>
          </span>
        </p>
      </footer>
    </>
  );
}

export default App;
