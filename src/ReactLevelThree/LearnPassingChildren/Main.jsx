import Container from "./Container";

let Main = () => {
  return (
    <>
      <Container>
        <h2>Fruit List</h2>
        <ul className="list-group">
          <li className="list-group-item">Banana</li>
          <li className="list-group-item">Apple</li>
          <li className="list-group-item">Cherry </li>
          <li className="list-group-item">Watermelom</li>
        </ul>
      </Container>
      <Container>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        iste porro et quaerat deserunt excepturi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi nisi architecto fugit fuga iusto
        sapiente natus, illum, dolore numquam possimus tempora quas voluptatem
        magni aperiam iure cum ad nihil. Possimus temporibus repellat
        consectetur laudantium ipsa optio rerum eos. Ab placeat rem quae iure
        harum doloremque.
      </Container>
    </>
  );
};

export default Main;

//Passing Children as props is something like you can create a component and in that component if you have one Div
// in that div we can direct pass data something like above and you can accept that props in that container as "children"
// can use that variable in that div direct.
