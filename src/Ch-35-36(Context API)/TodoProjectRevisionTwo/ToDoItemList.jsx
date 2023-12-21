import { useContext } from "react";
import ToDoItems from "./ToDoItems";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../../store/todo-item-store";

let ToDoItemList = () => {
  
  const {toDoList, deleteToDoItem} = useContext(TodoItemContext); // you can use Context api like this 

  return (
    <div className="card row mt-3">
      {toDoList.map((item) => {
        return (
          <div  key={item.name} className="card-body my-3 fs-4 d-flex align-item-center">
            <ToDoItems toDoItem={item} />
            <button className="fs-4 rounded-3 shadow btn btn-danger btn-sm col-2" onClick={() => deleteToDoItem(item)}><MdDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoItemList;
