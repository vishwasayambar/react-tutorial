import Heading from "../ClockProject/Heading";
import Addtodo from "./Addtodo";

function Todoproject() {
  return (
    <center>
      <div className="card w-75 mt-5">
        <div className="card-body">
          <Heading />
          <Addtodo />
        </div>
      </div>
    </center>
  );
}

export default Todoproject;
