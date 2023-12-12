import style from "./Display.module.css";

let Display = ({ displayCalValue }) => {
  return <input type="text" className={style["input-display"]} value={displayCalValue} readOnly />;
};

export default Display;
