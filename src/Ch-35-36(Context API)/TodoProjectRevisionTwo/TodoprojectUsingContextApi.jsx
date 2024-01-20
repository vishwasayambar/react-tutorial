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

  //Below is Use of useCallBack hook is mostly use to avoid multiple repaints after parent change 
  //it actually only update when dependency array value get change is also work same like useEffect but it actually return the 
  //same but this used to keep consistent function reference for child component
  //it also improve performance by avoiding the unnecessary repiaints i preent previous result in memory
  //mostly used in Infinite Loop in useEffect or any other places.
  // const deleteToDoItem = useCallback((todoItem) => {
  //   let dummyArr = toDoList.filter((item) => item.name !== todoItem.name);
  //   setToDoList(dummyArr);
  // },
  // [setToDoList, toDoList]);

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
