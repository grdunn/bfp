// import { useState } from "react";
import "./App.css";

function Cta() {
  // const [amount, setAmount] = useState(0);

  return (
    <>
      <div className="cta cta--primary">
        <div className="cta__inner">
          <h3 className="cta__header">
            Help Us To Continue Building On Our Progress
          </h3>
          <ul className="cta__list">
            <li className="cta__list-item">
              <button className="cta__list-button" target="_blank">
                $10
              </button>
            </li>
            <li className="cta__list-item">
              <button className="cta__list-button" target="_blank">
                $20
              </button>
            </li>
            <li className="cta__list-item">
              <button className="cta__list-button" target="_blank">
                $30
              </button>
            </li>
            <li className="cta__list-item">
              <button className="cta__list-button" target="_blank">
                $40
              </button>
            </li>
          </ul>
          <a href="#" className="cta__button">
            Donate
          </a>
        </div>
      </div>
    </>
  );
}

export default Cta;
