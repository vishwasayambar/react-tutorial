import Addtodo from "./Addtodo";
import Heading from "./Heading";
import ToDoItemList from "./ToDoItemList";

function Todoproject() {
  let toDoList = [
    {
      name:"Buy Milk",
      dueDate:"29/11/2023"
    },
    {
      name:"Complete React turorial",
      dueDate:"30/11/2023"
    },
    {
      name:"Post Insta Post",
      dueDate:"01/12/2023"
    }
  ]
  return (
    <center>
      <div className="card w-75 mt-5">
        <div className="card-body">
          <Heading />
          <Addtodo />
          <ToDoItemList toDoItems={toDoList}/>
        </div>
      </div>
    </center>
  );
}

export default Todoproject;
