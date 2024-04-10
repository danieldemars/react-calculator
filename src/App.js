import { useState } from 'react';
import "./calculator.css";

function CalcButton({ text, onButtonClick }) {
  return <button className="calc-button" onClick={onButtonClick}>{text}</button>;
}

function Output({ displayValue }) {
  return <p className="output">{displayValue}</p>;
}

function ButtonDisplay( {handleClick} ) {
  return (
    <>
      <div className="calc-row">
        <CalcButton text={"Clear"} onButtonClick={() => handleClick("clear")} />
        <CalcButton text={"+/-"} onButtonClick={() => handleClick("+/-")} />
        <CalcButton text={"%"} onButtonClick={() => handleClick("%")} />
        <CalcButton text={"÷"} onButtonClick={() => handleClick("divide")} />
      </div>
      <div className="calc-row">
        <CalcButton text={"7"} onButtonClick={() => handleClick(7)} />
        <CalcButton text={"8"} onButtonClick={() => handleClick(8)} />
        <CalcButton text={"9"} onButtonClick={() => handleClick(9)} />
        <CalcButton text={"X"} onButtonClick={() => handleClick("X")} />
      </div>
      <div className="calc-row">
        <CalcButton text={"4"} onButtonClick={() => handleClick(4)} />
        <CalcButton text={"5"} onButtonClick={() => handleClick(5)} />
        <CalcButton text={"6"} onButtonClick={() => handleClick(6)} />
        <CalcButton text={"-"} onButtonClick={() => handleClick("-")} />
      </div>
      <div className="calc-row">
        <CalcButton text={"1"} onButtonClick={() => handleClick(1)} />
        <CalcButton text={"2"} onButtonClick={() => handleClick(2)} />
        <CalcButton text={"3"} onButtonClick={() => handleClick(3)} />
        <CalcButton text={"+"} onButtonClick={() => handleClick("+")} />
      </div>
      <div className="calc-row">
        <CalcButton text={"0"} onButtonClick={() => handleClick(0)} />
        <CalcButton text={"."} onButtonClick={() => handleClick(".")} />
        <CalcButton text={"="} onButtonClick={() => handleClick("=")} />
      </div>
    </>
  );
}

export default function Calculator() {
  const [output, setOutput] = useState(""); 
  const [stack, setStack] = useState([]);

  function handleClick(value){
    if (value === 1) {
      setStack(prevStack => [...prevStack, 1]); 
      setOutput(1);
      return;
    } else if (value === 2) {
      setStack(prevStack => [...prevStack, 2]);
      setOutput(2);
      return;
    } else if (value === 3) {
      setStack((prevStack) => [...prevStack, 3]);
      setOutput(3);
      return;
    } else if (value === 4) {
      setStack((prevStack) => [...prevStack, 4]);
      setOutput(4);
      return;
    } else if (value === 5) {
      setStack((prevStack) => [...prevStack, 5]);
      setOutput(5);
      return;
    } else if (value === 6) {
      setStack((prevStack) => [...prevStack, 6]);
      setOutput(6);
      return;
    } else if (value === 7) {
      setStack((prevStack) => [...prevStack, 7]);
      setOutput(7);
      return;
    } else if (value === 8) {
      setStack((prevStack) => [...prevStack, 8]);
      setOutput(8);
      return;
    } else if (value === 9) {
      setStack((prevStack) => [...prevStack, 9]);
      setOutput(9);
      return;
    } else if (value === 0) {
      setStack((prevStack) => [...prevStack, 0]);;
      setOutput(0);
      return;
    } else {
      console.log(stack);
    }
  }
  
  return (
    <>
      <Output displayValue={output}/>
      <ButtonDisplay handleClick={handleClick}/>
    </>
  );
}
