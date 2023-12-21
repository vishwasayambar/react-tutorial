import { useState } from "react";
import Addtodo from "./Addtodo";
import Heading from "./Heading";
import ToDoItemList from "./ToDoItemList";
import Welcome from "./Welcome";
import { TodoItemContext } from "../../store/todo-item-store";

function TodoprojectUsingContextApi() {
  const [toDoList, setToDoList] = useState([]);
  const addNewItemInList = (itemName, itemDate) => {
    let temArr = [
      ...toDoList,
      {
        name: itemName,
        dueDate: itemDate,
      },
    ];

    setToDoList(temArr);
  };

  const deleteToDoItem = (todoItem) => {
    let dummyArr = toDoList.filter((item) => item.name !== todoItem.name);
    setToDoList(dummyArr);
  };

  return (
    <TodoItemContext.Provider value={{
      toDoList,
      addNewItemInList,
      deleteToDoItem
    }}>
      <center>
        <div className="w-50 mt-5">
          <Heading/>
          <Addtodo/>
          <Welcome/>
          <ToDoItemList/>
        </div>
      </center>
    </TodoItemContext.Provider>
  );
}

export default TodoprojectUsingContextApi;
