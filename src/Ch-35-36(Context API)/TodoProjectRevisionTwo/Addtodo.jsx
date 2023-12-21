import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoItemContext } from "../../store/todo-item-store";

function Addtodo() {
  
  const {addNewItemInList} = useContext(TodoItemContext); // you can use Context api like this 

  const [itemName, setItemName] = useState("");
  const [itemDate, setItemDate] = useState("");

  const handleInputs = (e, type) => {
    if (type === "name") {
      setItemName(e.target.value);
    } else {
      setItemDate(e.target.value);
    }
  };

  const handleOnAddBtnClick = () => {
    addNewItemInList(itemName, itemDate);
    setItemName("");
    setItemDate("");
  };

  return (
    <div className="row d-flex" style={{ fontSize: "10px" }}>
      <div className="col-6">
        <input
          className="w-100 fs-4 p-2 rounded-3 shadow"
          type="text"
          value={itemName}
          onChange={(e) => handleInputs(e, "name")}
        />
      </div>
      <div className="col-4">
        <input
          className="w-100 fs-4 p-2 rounded-3 shadow"
          type="date"
          value={itemDate}
          onChange={(e) => handleInputs(e, "date")}
        />
      </div>
      <div className="col-2">
        <button
          className="btn btn-success btn-sm fs-4 py-2 px-5 rounded-3 shadow"
          onClick={handleOnAddBtnClick}
        >
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
}

export default Addtodo;
