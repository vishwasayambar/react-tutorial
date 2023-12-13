import { useState } from "react";
import Addtodo from "./Addtodo";
import Heading from "./Heading";
import ToDoItemList from "./ToDoItemList";
import Welcome from "./Welcome";

function Todoproject() {
  const [toDoList, setToDoList] = useState([]);
  const addItemInList = (itemName, itemDate) => {
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
    // let index = toDoList.findIndex(item => item.name === todoItem.name);
    // let dummyArr = [...toDoList]
    // dummyArr.splice(index, 1);

    // You can use both logic to delete above or below
    let dummyArr = toDoList.filter(item => item.name !== todoItem.name);

    setToDoList(dummyArr);
  };

  return (
    <center>
      <div className="w-50 mt-5">
        
          <Heading />
          <Addtodo addItemInToDo={addItemInList} />
          { toDoList.length <= 0 && <Welcome/>}
          <ToDoItemList toDoItems={toDoList} deleteItem={deleteToDoItem} />
      
      </div>
    </center>
  );
}

export default Todoproject;
