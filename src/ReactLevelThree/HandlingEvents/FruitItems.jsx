import { useState } from "react";
import Items from "./Items";

let FruitItems = ({ fruitItem }) => {
  let [isbuy, setIsbuy] = useState([]);

  const handleBuyFruit = (item) => {
    let newArr = [];
    if (isbuy.includes(item) === true) {
      newArr = isbuy.filter((fruit) => fruit !== item);
    } else {
      newArr = [...isbuy, item];
    }

    setIsbuy(newArr);
  };

  return (
    <ul className="list-group">
      {fruitItem.map((item) => {
        return (
          <Items
            key={item}
            item={item}
            brought={isbuy.includes(item)}
            handleBuyFruit={() => handleBuyFruit(item)}
          ></Items>
        );
      })}
    </ul>
  );
};

export default FruitItems;
