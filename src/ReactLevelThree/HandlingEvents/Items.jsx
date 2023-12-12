let Items = ({ item, brought, handleBuyFruit }) => {
  return (
    <>
    
      <li
        key={item}
        className={brought ? "list-group-item active" : "list-group-item"}
      >
        <span>{item}</span>
        <button
        className="btn btn-sm btn-success"
        style={{ float: "inline-end" }}
        onClick={() => handleBuyFruit(item)}
      >
        Buy
      </button>
      </li>
      
    </>
  );
};

export default Items;
