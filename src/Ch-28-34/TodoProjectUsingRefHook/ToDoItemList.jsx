import ToDoItems from "./ToDoItems";
import { MdDelete } from "react-icons/md";

let ToDoItemList = ({ toDoItems, deleteItem }) => {
  return (
    <div className="card row mt-3">
      {toDoItems.map((item) => {
        return (
          <div  key={item.name} className="card-body my-3 fs-4 d-flex align-item-center">
            <ToDoItems toDoItem={item} />
            <button className="fs-4 rounded-3 shadow btn btn-danger btn-sm col-2" onClick={() => deleteItem(item)}><MdDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoItemList;
