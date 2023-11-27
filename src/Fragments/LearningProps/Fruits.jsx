import ErrorMessage from "./ErrorMessage";
import Items from "./Items";

let Fruits = () => {
  let fruitsItem = ["Apple", "Banana", "Cherry", "Pineapple", "Whatermellon"];

  return (
    <>
      <h1>Learning Props in React :- Fruit List</h1>
      <ErrorMessage fruitsItems={fruitsItem}></ErrorMessage>
     <Items fruitsItems={fruitsItem}></Items>;
     
    </>
  );
};

export default Fruits;
