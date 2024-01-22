const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

//Here we have created a initial value means if no any value is in state then this is

const reducer = (currentState = INITIAL_VALUE, action) => {
  let newState = currentState;
    if(action.type === 'INCRIMENT'){
        newState = {counter: currentState.counter + 1};
    }
    if(action.type === 'DECRIMENT'){
        newState = {counter: currentState.counter - 1};
    }
    if(action.type === 'ADDITION'){
        newState = {counter: currentState.counter + action.payload.counter};
    }
    if(action.type === 'SUBTRACTION'){
        newState = {counter: currentState.counter - action.payload.counter};
    }

    return newState;
};

const store = redux.createStore(reducer); //created store it take reducer as paramenter to manage states

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber); // this function is subsrcibing the scuscriber/user to send chnages and states which that required

const additionAction = { type: "ADDITION" , payload : {counter: 8}};
const substractionAction = { type: "SUBTRACTION",  payload : {counter: 4}};

store.dispatch({ type: "INCRIMENT" });
store.dispatch({ type: "INCRIMENT" });
store.dispatch(additionAction);
store.dispatch(substractionAction);
