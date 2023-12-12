import ButtonContainer from "./ButtonConatiner";
import style from "./Calculator.module.css";
import Display from "./Display";

let Calculator = () => {
  return (
    <center>
      <div className={style.calculator}>
      <h2>Simple Calculator</h2>
        <Display />
        <ButtonContainer />
      </div>
    </center>
  );
};

export default Calculator;
