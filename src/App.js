import { useState } from 'react';
import { useEffect } from 'react';
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
        <CalcButton text={"÷"} onButtonClick={() => handleClick("/")} />
      </div>
      <div className="calc-row">
        <CalcButton text={"7"} onButtonClick={() => handleClick(7)} />
        <CalcButton text={"8"} onButtonClick={() => handleClick(8)} />
        <CalcButton text={"9"} onButtonClick={() => handleClick(9)} />
        <CalcButton text={"X"} onButtonClick={() => handleClick("*")} />
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
  const [currentOperation, setCurrentOperation] = useState([]);
  const [equalsPressed, setEqualsPressed] = useState(false);

  // updates the output when the stack changes
  useEffect(() => {
    setOutput(getOutputNumber());
  }, [stack]); 

  // operation gets performed when equals is pressed or if user enters more than one operator 
  useEffect(() => {
    if (equalsPressed && currentOperation.length === 3){
      performOperation();
      setEqualsPressed(false);
      console.log("Operation performed");
    }
  }, [equalsPressed, currentOperation]); 
  

  // handles the click event of the buttons
  function handleClick(value){
    if (value === 1) {
      setStack((prevStack) => [...prevStack, 1]); 
      return;
    } else if (value === 2) {
      setStack((prevStack) => [...prevStack, 2]);
      return;
    } else if (value === 3) {
      setStack((prevStack) => [...prevStack, 3]);
      return;
    } else if (value === 4) {
      setStack((prevStack) => [...prevStack, 4]);
      return;
    } else if (value === 5) {
      setStack((prevStack) => [...prevStack, 5]);
      return;
    } else if (value === 6) {
      setStack((prevStack) => [...prevStack, 6]);
      return;
    } else if (value === 7) {
      setStack((prevStack) => [...prevStack, 7]);
      return;
    } else if (value === 8) {
      setStack((prevStack) => [...prevStack, 8]);
      return;
    } else if (value === 9) {
      setStack((prevStack) => [...prevStack, 9]);
      return;
    } else if (value === 0) {
      setStack((prevStack) => [...prevStack, 0]);
      return;
    } else if (value === "clear"){
      setStack([]);
      setCurrentOperation([]);
      setOutput(0);
      return;
    } else if (value === "="){
      setCurrentOperation(prevOperation => [...prevOperation, getOutputNumber()]);
      setEqualsPressed(true);
      console.log("Equals Pressed");
      return;
    } else if (value === "+"){
      addOperator("+");
      return;
    } 
  }

  // returns the number from the stack
  function getOutputNumber(){
    if (stack.length === 0) {
      return 0;
    } else {
      let number = parseInt(stack.join(''));
      return number; 
    }
  }

  // adds operator to currentOperation and clears the stack whenever the user clicks an operator
  function addOperator(operator){
    let operators = ["+", "-", "*", "/"]; 

    // checks if an operator is already in the currentOperation, if so then complete the operation
    if (operators.some(operator => currentOperation.includes(operator))){ 
      // TODO: complete operation
    } else {
      setCurrentOperation([...currentOperation, getOutputNumber(), operator]);
      setStack([]);
    }
  }

  function performOperation(){
    // uses object lookup to decide which operation to perform based on the operator
    let operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    // completes the operation
    console.log("Current Operation prior to operation: ", currentOperation);
    let operator = currentOperation[1];
    let result = operators[operator](currentOperation[0], currentOperation[2]);
    console.log(currentOperation[0], operator, currentOperation[2], "=", result); 

    // updates currentOperation
    setCurrentOperation([result]);

    // updates the output for the calculator
    setOutput(result);
  }
  
  return (
    <>
      <Output displayValue={output}/>
      <ButtonDisplay handleClick={handleClick}/>
      <p>Stack: {stack}</p>
      <p>Current Operation: {currentOperation}</p>
    </>
  );
}
