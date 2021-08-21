import "./styles.css";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");

  return (
    <div className="App">
      <div className="section">
        <div className="contain">
          <h1>Profit Loss Calculator</h1>
          <div className="inputs">
            <label>
              Initial Price:
              <input type="number" name="Initial Price" />
            </label>
            <label>
              Current Price:
              <input type="number" name="Current Price" />
            </label>
            <label>
              Quantity:
              <input type="number" name="Quantity" />
            </label>
            <button className="btn">Calculate</button>
          </div>
          <h4>{msg}</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}
