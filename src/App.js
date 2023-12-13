// import logo from "./logo.svg";
import "./App.css";
import Calculator from "./CalculatorProjectVersionOne/Calculator";
import {
  CondentionalRendering,
  FragmentsMain,
  LearMapMethod,
  LogicalOperator,
  TernaryOperator,
} from "./Fragments/FragmetsMain";
import Fruits from "./Fragments/LearningProps/Fruits";
import LearnEvents from "./ReactLevelThree/HandlingEvents/LearnEvents";
import Main from "./ReactLevelThree/LearnPassingChildren/Main";
import Todoproject from "./TodoProject/Todoproject";
import  ToDoProjectRevisionOne from "./TodoProjectRevisionOne/Todoproject";
import  ToDoProjectRevisionTwo from "./TodoProjectRevisionTwo/Todoproject";

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

        {/*// Calculator Basic Project
      <Calculator/>*/}

        {/*Learning Passing pros as Children 
      <Main></Main> */}

        {/*Learning Event Handling 
      <LearnEvents></LearnEvents>*/}

       {/*// Calculator Basic Project Version One Time 6:22
      <Calculator/>*/}

         {/*// To Do project Revision Two*/}
      <ToDoProjectRevisionTwo />
    </>
  );
}

export default App;
