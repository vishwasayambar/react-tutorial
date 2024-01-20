import { useMemo, useState } from "react";
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

  // LEARN useMemo() Hook;
  // Exmaple arr is in child component and tekan using props then the array is contais thousabds of value and i have to sort it in 
  // child compoent and just wan to return value of sorted array then here problem is that whenever the parent get chnage the child also get chnage even though arr has not chnaged
  // so it running complex calculatio again and again unnecessary to avoid this we use useMemo() hook it alsoo same as useCallback() but 
  // useCallback() return a function or this returns only value there it used when we have eal with big calculation 
  // and return only value it do same cache the result and ony chnage if dependency array get changed
  // const arr = [2,4,6,7,8,9,0];
  // const constsortedArray = arr.sort();
  // const constsortedArray = useMemo(() => arr.sort(), [arr]);
  

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
