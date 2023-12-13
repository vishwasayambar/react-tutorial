import ToDoItems from "./ToDoItems";

let ToDoItemList = ({ toDoItems, deleteItem }) => {
  return (
    <div className="card row mt-3">
      {toDoItems.map((item) => {
        return (
          <div className="card-body my-3 fs-4 d-flex align-item-center">
            <ToDoItems key={item.name} toDoItem={item} />
            <button className="fs-4 rounded-3 shadow btn btn-danger btn-sm col-2" onClick={() => deleteItem(item)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoItemList;
