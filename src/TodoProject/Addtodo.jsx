function Addtodo() {
  return (
    <div className="row d-flex">
      <div className="col-6">
        <input type="text" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button className="btn btn-success btn-sm">Add</button>
      </div>
    </div>
  );
}

export default Addtodo;