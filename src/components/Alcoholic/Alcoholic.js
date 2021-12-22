import React, { useState, useEffect } from "react";
import "./Alcoholic.css";

const Alcoholic = ({ onAlcoholChange }) => {
  let [isAlcohol, setIsAlcohol] = useState(false);

  async function handleClick(val) {
    await setIsAlcohol(val === "alcoholic" ? true : false);
  }

  useEffect((setIsAlcohol) => {
    onAlcoholChange(isAlcohol);
  });

  return (
    <>
      <div>
        <button
          className={isAlcohol ? "butn" : "outline "}
          onClick={() => handleClick("alcoholic")}
        >
          Alcoholic
        </button>
        <button
          className={isAlcohol ? "outline " : "butn"}
          onClick={() => handleClick("non-alcoholic")}
        >
          Non Alcoholic
        </button>
      </div>
    </>
  );
};

export default Alcoholic;
