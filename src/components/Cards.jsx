import "./Cards.css";

function Cards() {
  let heading = "Heading One";
  let description = "Lorem ipsum dolor sit amet.";
  let randomNumber = Math.random() * 100;

  return (
    <div className="card">
      <div>
        <h1 className="heading">{heading}</h1>
            <h2 style={{'color':'blue', 'text-align':'center'}} className="random-number">{Math.floor(randomNumber)}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default Cards;
