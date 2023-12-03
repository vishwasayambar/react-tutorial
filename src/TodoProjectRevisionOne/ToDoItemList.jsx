import ToDoItems from "./ToDoItems";

let ToDoItemList = ({ toDoItems }) => {
  return (
    <>
      <div className="row">
        {toDoItems.map((item) => {
          return (
             <ToDoItems key={item.name} toDoItem={item}/>
          );
        })}
        <div className="col-2">
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    </>
  );
};

export default ToDoItemList;
