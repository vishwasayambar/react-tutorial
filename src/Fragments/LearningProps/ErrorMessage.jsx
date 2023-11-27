let ErrorMessage = ({fruitsItems}) => {

  let errorMessage = "FruitList is Empty :- View from ErrroMessage Component";

  return (
    <>
      {fruitsItems.length === 0 ? <h3 className="warning">{errorMessage}</h3> : null}
    </>
  );
};

export default ErrorMessage;