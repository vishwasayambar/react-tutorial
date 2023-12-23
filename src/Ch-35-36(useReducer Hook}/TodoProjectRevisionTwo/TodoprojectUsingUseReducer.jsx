import Addtodo from "./Addtodo";
import Heading from "./Heading";
import ToDoItemList from "./ToDoItemList";
import Welcome from "./Welcome";
import ToDoItemListStoreComponent from "../../store/todo-item-reducer-store";

function TodoprojectUsingUseReducer() {
  return (
    <ToDoItemListStoreComponent>
      <center>
        <div className="w-50 mt-5">
          <Heading />
          <Addtodo />
          <Welcome />
          <ToDoItemList />
        </div>
      </center>
    </ToDoItemListStoreComponent>
  );
}

export default TodoprojectUsingUseReducer;
