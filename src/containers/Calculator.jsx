import React from "react";
import Operation from "../components/Operation";
import Output from "../components/Output";
import Number from "../components/Number";
import "./Calculator.css";
import { useState } from "react";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [currentAction, setCurrentAction] = useState();

  let op1 = "";
  let op2 = "";
  let operation = "";

  const handleClick = (number, action, even) => {
    if (number) {
      if (op2 === "" && operation === "") {
        if (currentNumber === "0" || currentNumber === ".") {
          setCurrentNumber(number);
          op1 = currentNumber;
        } else {
          setCurrentNumber(currentNumber + number);
          op1 = currentNumber;
        }
      }
    } else if (action) {
      setCurrentAction(action);
    } /* else {
        calculate( op1, op2, operation);
    } */
    console.log(`your op1 ${op1}`);
  };

  return (
    <div className="calculator-container">
      <Output outputNumber={currentNumber} outputAction={currentAction} />
      <div className="buttons-container">
        <div className="buttons">
          <Number number={"7"} onClick={handleClick} />
          <Number number={"8"} onClick={handleClick} />
          <Number number={"9"} onClick={handleClick} />
          <Number number={"4"} onClick={handleClick} />
          <Number number={"5"} onClick={handleClick} />
          <Number number={"6"} onClick={handleClick} />
          <Number number={"1"} onClick={handleClick} />
          <Number number={"2"} onClick={handleClick} />
          <Number number={"3"} onClick={handleClick} />
          <Number number={"0"} onClick={handleClick} />
          <Number number={"."} onClick={handleClick} />
          <Number number={"AC"} onClick={handleClick} />
          <Number number={"+/-"} onClick={handleClick} />
          <Number number={"%"} onClick={handleClick} />
          <Number number={"del"} onClick={handleClick} />
        </div>
        <div className="actions-container">
          <div className="actions">
            <Operation action={"/"} onClick={handleClick} />
            <Operation action={"x"} onClick={handleClick} />
            <Operation action={"-"} onClick={handleClick} />
            <Operation action={"+"} onClick={handleClick} />
          </div>
          <div className="even">=</div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
