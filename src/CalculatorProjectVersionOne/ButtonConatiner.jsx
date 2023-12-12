import style from "./ButtonContainer.module.css";

let buttons = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

let ButtonContainer = () => {
  return (
    <div className={style.buttons}>
        {buttons.map((button) => {
            return  <button key={button} className={style.btn}>{button}</button>
        })}
    </div>
  );
};

export default ButtonContainer;