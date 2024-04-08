import React from "react";
import "./calculator.css";

function CalcButton({ text, onButtonClick }) {
  return <button>{text}</button>;
}

function Output() {
  return <p className="output">Hello</p>;
}

function ButtonDisplay() {
  return (
    <>
      <div className="calc-row">
        <CalcButton text={"Clear"} />
        <CalcButton text={"+/-"} />
        <CalcButton text={"%"} />
        <CalcButton text={"÷"} />
      </div>
      <div className="calc-row">
        <CalcButton text={"7"} />
        <CalcButton text={"8"} />
        <CalcButton text={"9"} />
        <CalcButton text={"X"} />
      </div>
      <div className="calc-row">
        <CalcButton text={"4"} />
        <CalcButton text={"5"} />
        <CalcButton text={"6"} />
        <CalcButton text={"-"} />
      </div>
      <div className="calc-row">
        <CalcButton text={"1"} />
        <CalcButton text={"2"} />
        <CalcButton text={"3"} />
        <CalcButton text={"+"} />
      </div>
      <div className="calc-row">
        <CalcButton text={"0"} />
        <CalcButton text={"."} />
        <CalcButton text={"="} />
      </div>
    </>
  );
}

export default function Calculator() {
  return (
    <>
      <Output />
      <ButtonDisplay />
    </>
  );
}
