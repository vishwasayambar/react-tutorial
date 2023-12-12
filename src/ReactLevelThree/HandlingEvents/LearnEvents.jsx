import { useState } from "react";
import AddFruit from "./AddFruit";
import Container from "./Container";
import FruitItems from "./FruitItems";

let LearnEvents = () => {
  let [fruitItemList, setFruitItemList] = useState(["Apple", "Banana", "Cherry"]);

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFruiyItemArr = [...fruitItemList, event.target.value];
      setFruitItemList(newFruiyItemArr);
      event.target.value = '';
    }
    console.log("Input Value Change ", event.target.value);
  };

  return (
    <Container>
      <h2>Fruit Items</h2>
      <AddFruit handleOnKeyDown={handleOnKeyDown} ></AddFruit>
      <FruitItems fruitItem={fruitItemList}></FruitItems>
    </Container>
  );
};

export default LearnEvents;
