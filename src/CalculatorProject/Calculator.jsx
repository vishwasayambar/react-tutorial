import { useState } from "react";
import ButtonContainer from "./ButtonConatiner";
import style from "./Calculator.module.css";
import Display from "./Display";

let Calculator = () => {
  const [calVal, setCalValue] = useState("");

  const onProcessCalValues = (btnValue) => {
    if (btnValue === "C") {
      setCalValue("");
    } else if (btnValue === "=") {
      setCalValue(eval(calVal));
    } else {
      const tempVal = calVal + btnValue;
      setCalValue(tempVal);
    }
  };
  return (
    <center>
      <div className={style.calculator}>
        <h2>Simple Calculator</h2>
        <Display displayCalValue={calVal} />
        <ButtonContainer onButtonClick={onProcessCalValues} />
      </div>
    </center>
  );
};

export default Calculator;
