import style from "./AddFruit.module.css";

let AddFruit = ({ handleOnKeyDown }) => {
  return (
    <>
      <input
        className={style.inputBox}
        onKeyDown={(e)=>handleOnKeyDown(e)}
        type="text"
        placeholder="Enter Fruit Name"
      />
    </>
  );
};

export default AddFruit;
