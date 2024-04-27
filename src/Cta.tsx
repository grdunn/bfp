import { useState } from "react";

function Cta() {
  // Set the default amount to $20.
  const [amount, setAmount] = useState("20");
  const url = `https://secure.actblue.com/donate/web-bfp-march2-2024?refcode=web_test&amount=`;

  // Function to handle storing the radio input value
  // into the react state. This will allow us to create the dynamic link
  // when the user clicks the donate button.
  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <div className="cta cta--primary">
        <div className="cta__inner">
          <h3 className="cta__header">
            Help Us To Continue Building On Our Progress
          </h3>
          <ul className="cta__list">
            <li className="cta__list-item">
              <input
                onChange={handleRadio}
                value="10"
                type="radio"
                name="radio"
                id="radio-10"
                checked={amount === "10"}
              />
              <label htmlFor="radio-10" className="cta__list-button">
                $10
              </label>
            </li>
            <li className="cta__list-item">
              <input
                onChange={handleRadio}
                value="20"
                type="radio"
                name="radio"
                id="radio-20"
                checked={amount === "20"}
              />
              <label htmlFor="radio-20" className="cta__list-button">
                $20
              </label>
            </li>
            <li className="cta__list-item">
              <input
                onChange={handleRadio}
                value="30"
                type="radio"
                name="radio"
                id="radio-30"
                checked={amount === "30"}
              />
              <label htmlFor="radio-30" className="cta__list-button">
                $30
              </label>
            </li>
            <li className="cta__list-item">
              <input
                onChange={handleRadio}
                value="40"
                type="radio"
                name="radio"
                id="radio-40"
                checked={amount === "40"}
              />
              <label htmlFor="radio-40" className="cta__list-button">
                $40
              </label>
            </li>
          </ul>
          <a target="_blank" href={url + amount} className="cta__button">
            Donate
          </a>
        </div>
      </div>
    </>
  );
}

export default Cta;
