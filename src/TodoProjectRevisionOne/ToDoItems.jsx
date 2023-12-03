let ToDoItems = ({ toDoItem }) => {
  return (
    <>
      <div className="col-6">
        {toDoItem.name}
      </div>
      <div className="col-4">
        {toDoItem.dueDate}
      </div>
    </>
  );
};

export default ToDoItems;
