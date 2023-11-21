import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import SaveButton from './components/SaveButton';
import DynamicComponent from './components/DynamicComponent';
import Cards from './components/Cards';
// import {SaveButton} from './components/SaveButton';

function App() {
  return (
    <div>
    <img src={logo} alt="React logo"/>
      <h1>Hello World</h1>
      <Hello/>
      <DynamicComponent></DynamicComponent>
      <SaveButton></SaveButton>
      <Cards></Cards>
    </div>
  );
}

export default App;
