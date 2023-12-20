import { click } from "@testing-library/user-event/dist/click";
import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function Addtodo({ addItemInToDo }) {
  // const [itemName, setItemName] = useState("");
  // const [itemDate, setItemDate] = useState("");
  const itemName = useRef();
  const itemDate = useRef();

  // const handleInputs = (e, type) => {
  //   if (type === "name") {
  //     setItemName(e.target.value);
  //   } else {
  //     setItemDate(e.target.value);
  //   }
  // };


  // Using useState it will uodate state and repaint the component where stateis chnage like previous 
  //  we are updating values onChnage so it will repaint all the component everytime
  //   useRef is used to avoid this repaint and ut will store value and update only when Add button click this will remove to much code as WEBGL_lose_context 

  const handleOnAddBtnClick = () => {
    addItemInToDo(itemName.current.value, itemDate.current.value);
    itemName.current.value = "";
    itemDate.current.value = "";
  };

  return (
    <div className="row d-flex" style={{ fontSize: "10px" }}>
      <div className="col-6">
        <input
          className="w-100 fs-4 p-2 rounded-3 shadow"
          type="text"
          ref={itemName}
        />
      </div>
      <div className="col-4">
        <input
          className="w-100 fs-4 p-2 rounded-3 shadow"
          type="date"
          ref={itemDate}
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
