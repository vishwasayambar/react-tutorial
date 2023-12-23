import { useContext } from "react";
import { todoItemReducerStore } from "../../store/todo-item-reducer-store";

let Welcome = () => {

  const {toDoList} = useContext(todoItemReducerStore); // you can use Context api like this 

  return toDoList.length <= 0 ? (
    <h3 className="mt-5">You have completed all your task! Enjoy you'r Day</h3>
  ) : null;
};

export default Welcome;
