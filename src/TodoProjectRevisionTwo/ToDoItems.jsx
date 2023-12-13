let ToDoItems = ({ toDoItem }) => {
  return (
    <>
      <span className="col-6">
        {toDoItem.name}
      </span>
      <span className="col-4">
        {toDoItem.dueDate}
      </span>
    </>
  );
};

export default ToDoItems;
