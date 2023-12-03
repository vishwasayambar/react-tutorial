// import logo from "./logo.svg";
import "./App.css";
import Calculator from "./CalculatorProject/Calculator";
import {
  CondentionalRendering,
  FragmentsMain,
  LearMapMethod,
  LogicalOperator,
  TernaryOperator,
} from "./Fragments/FragmetsMain";
import Fruits from "./Fragments/LearningProps/Fruits";
import Todoproject from "./TodoProject/Todoproject";
import  ToDoProjectRevisionOne from "./TodoProjectRevisionOne/Todoproject";

// import Hello from "./components/Hello";
// import SaveButton from "./components/SaveButton";
// import DynamicComponent from "./components/DynamicComponent";
// import Cards from "./components/Cards";
// import Todoproject from "./TodoProject/Todoproject";
// import ClockProject from "./ClockProject/ClockProject";
// import {SaveButton} from './components/SaveButton';

function App() {
  return (
    <>
      {/*
      <img src={logo} alt="React logo" />
      <h1>Hello World</h1>
      <Hello />
      <DynamicComponent></DynamicComponent>
      <SaveButton></SaveButton>
      <Cards></Cards>
    */}

      {/*// To Do project one*/}
      {/*
      <Todoproject />*/}

      {/* Clock project */}
      {/*<ClockProject></ClockProject>*/}

      {/* Fragments in react 
      <FragmentsMain></FragmentsMain>
      <LearMapMethod></LearMapMethod>
      <CondentionalRendering></CondentionalRendering>
      <TernaryOperator></TernaryOperator>
      <LogicalOperator></LogicalOperator>*/}

      {/* Learn How Props Work in React
      <Fruits></Fruits>*/}
      

       {/*// To Do project Revision One
      <ToDoProjectRevisionOne />*/}
      <Calculator/>
    </>
  );
}

export default App;
