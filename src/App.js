import "./styles.css";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");
  const [init, setInit] = useState(0);
  const [curr, setCurr] = useState(0);
  const [qty, setQty] = useState(0);

  const onchangeHandler = (e, value) => {
    var data1 = e.target.value;
    var data = parseInt(data1);
    if (value === "initial") {
      setInit(data);
    } else if (value === "current") {
      setCurr(data);
    } else {
      setQty(data);
    }
  };

  const onclickHandler = (e) => {
    e.preventDefault();
    if (init > curr) {
      var loss = (init - curr) * qty;
      var percent = (loss / (init * qty)) * 100;
      var result = `You Are in a loss of ${loss} and that is -${percent}%.Your Initial investment was ${
        init * qty
      }`;
      setMsg(result);
    }
    if (init < curr) {
      var profit = (curr - init) * qty;
      var percent = (profit / (init * qty)) * 100;
      var result = `You Are in a profit of ${profit} and that is +${percent}%.Your Initial investment was ${
        init * qty
      }`;
      setMsg(result);
    } else {
      setMsg("No Pain No Gain!");
    }
  };

  return (
    <div className="App">
      <div className="section">
        <div className="contain">
          <h1>Profit Loss Calculator</h1>
          <div className="inputs">
            <label>
              Initial Price:
              <input
                type="number"
                name="Initial Price"
                onChange={(e) => onchangeHandler(e, "initial")}
              />
            </label>
            <label>
              Current Price:
              <input
                type="number"
                name="Current Price"
                onChange={(e) => onchangeHandler(e, "current")}
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                name="Quantity"
                onChange={(e) => onchangeHandler(e, "quantity")}
              />
            </label>
            <button className="btn" onClick={onclickHandler}>
              Calculate
            </button>
          </div>
          <h4>{msg}</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}
