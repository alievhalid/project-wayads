import React, { useState } from "react";
// import styles from "./price-list.module.scss"
const PriceList = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Выберите план:</h2>
      <div>
        <label>
          <input
            type="radio"
            value="basic"
            checked={selectedOption === "basic"}
            onChange={handleOptionChange}
          />
          Базовый план - $10 в месяц
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="premium"
            checked={selectedOption === "premium"}
            onChange={handleOptionChange}
          />
          Премиум план - $20 в месяц
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="ultimate"
            checked={selectedOption === "ultimate"}
            onChange={handleOptionChange}
          />
          Полный пакет - $30 в месяц
        </label>
      </div>
      <div>
        Выбранный план: {selectedOption}
      </div>
    </div>
  );
};

export default PriceList;