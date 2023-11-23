import React from "react";
import Operation from "../components/Operation";
import Output from "../components/Output";
import Number from "../components/Number";
import Even from "../components/Even";
import "./Calculator.css";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [currentOpOne, setCurrentOpOne] = useState("0");
  const [currentOpTwo, setCurrentOpTwo] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [finish, setFinish] = useState(false);

  // click en un numero
  const handleNumberClick = (number) => {
    if (!currentOperation && currentOpTwo === "") {
      setCurrentOpOne((prevOpOne) => {
        if (prevOpOne === "0" || prevOpOne === "." || finish) {
          setFinish(false);
          return number;
        } else if (number === "." && prevOpOne.includes(".")) {
          return prevOpOne;
        } else {
          return prevOpOne + number;
        }
      });
    } else if (currentOperation) {
      setCurrentOpTwo((prevOpTwo) => {
        if (prevOpTwo === "0" || prevOpTwo === ".") {
          return number;
        } else if (number === "." && prevOpTwo.includes(".")) {
          return prevOpTwo;
        } else {
          return prevOpTwo + number;
        }
      });
    }
  };

  //click en accion
  const handleActionClick = (action) => {
    setCurrentOperation(action);
  };

  // click en AC
  const handleAcClick = () => {
    setCurrentOpOne("0");
    setCurrentOpTwo("");
    setCurrentOperation("");
    setFinish(false);
  };

  // click positive negative
  const handlePositiveNegative = () => {
    if (currentOpTwo === "" && currentOperation === "") {
      setCurrentOpOne(
        currentOpOne.startsWith("-")
          ? currentOpOne.slice(1)
          : "-" + currentOpOne
      );
    } else if (currentOpOne !== "" && currentOperation !== "") {
      setCurrentOpTwo(
        currentOpTwo.startsWith("-")
          ? currentOpTwo.slice(1)
          : "-" + currentOpTwo
      );
    }
  };

  // porcentaje

  const calculatePercentage = () => {
    if (currentOpTwo === "" && currentOperation === "") {
      let a = parseFloat(currentOpOne);
      a = a / 100;
      setCurrentOpOne(a.toString());
    } else if (currentOpOne !== "" && currentOperation !== "") {
      let b = parseFloat(currentOpTwo);
      b = b / 100;
      setCurrentOpTwo(b.toString());
    }
  };

  // eleminar uno
  const deleteOne = () => {
    if (currentOpTwo === "" && currentOperation === "") {
      setCurrentOpOne(currentOpOne.slice(0, -1));
      if (currentOpOne.length === 1) {
        setCurrentOpOne("0");
      }
    } else if (currentOpOne !== "" && currentOperation !== "") {
      setCurrentOpTwo(currentOpTwo.slice(0, -1));
    }
  };

  // funciones de matematica
  function sum(a, b) {
    return a + b;
  }
  function substract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }

  // la funcion calcular
  const calculate = () => {
    let newResult = "";

    if (currentOpOne === "" || currentOpTwo === "" || currentOperation === "") {
      newResult = "Pon todos los operadores";
    }
    if (currentOpTwo === "0" && currentOperation === "/") {
      newResult = "No se puede dividir por 0";
    } else {
      const num1 = parseFloat(currentOpOne);
      const num2 = parseFloat(currentOpTwo);
      switch (currentOperation) {
        case "+":
          newResult = sum(num1, num2);
          break;
        case "-":
          newResult = substract(num1, num2);
          break;
        case "x":
          newResult = multiply(num1, num2);
          break;
        case "/":
          newResult = divide(num1, num2);
          break;
      }
    }

    //no se me resetea
    setCurrentOpOne(newResult.toString());
    setCurrentOpTwo("");
    setCurrentOperation("");
    setFinish(true);
  };

  // visual
  return (
    <div className="calculator-container">
      <Output
        outputNumberOne={currentOpOne}
        outputAction={currentOperation}
        outputNumberTwo={currentOpTwo}
      />
      <div className="buttons-container">
        <div className="buttons">
          <Number number={"7"} onClick={handleNumberClick} />
          <Number number={"8"} onClick={handleNumberClick} />
          <Number number={"9"} onClick={handleNumberClick} />
          <Number number={"4"} onClick={handleNumberClick} />
          <Number number={"5"} onClick={handleNumberClick} />
          <Number number={"6"} onClick={handleNumberClick} />
          <Number number={"1"} onClick={handleNumberClick} />
          <Number number={"2"} onClick={handleNumberClick} />
          <Number number={"3"} onClick={handleNumberClick} />
          <Number number={"0"} onClick={handleNumberClick} />
          <Number number={"."} onClick={handleNumberClick} />
          <Number number={"AC"} onClick={handleAcClick} />
          <Number number={"+/-"} onClick={handlePositiveNegative} />
          <Number number={"%"} onClick={calculatePercentage} />
          <Number number={"del"} onClick={deleteOne} />
        </div>
        <div className="actions-container">
          <div className="actions">
            <Operation action={"/"} onClick={handleActionClick} />
            <Operation action={"x"} onClick={handleActionClick} />
            <Operation action={"-"} onClick={handleActionClick} />
            <Operation action={"+"} onClick={handleActionClick} />
          </div>
          <Even onClick={calculate} even="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
