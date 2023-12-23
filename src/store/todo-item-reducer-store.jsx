import { createContext, useReducer } from "react";

export const todoItemReducerStore = createContext({
  toDoList: [],
  addNewItemInList: () => {},
  deleteToDoItem: () => {},
});

const ToDoItemListStoreComponent = ({ children }) => {
  const todoItemReducer = (currentState, action) => {
    if (action.type === "ADD_NEW_ITEM") {
      return [...currentState, action.payload];
    } else if (action.type === "DELETE_ITEM") {
      return currentState.filter((item) => item !== action.payload.todoItem);
    }
  };

  const [toDoList, dispatchToDoList] = useReducer(todoItemReducer, []);

  const addNewItemInList = (name, dueDate) => {
    const addTodoItemAction = {
      type: "ADD_NEW_ITEM",
      payload: {
        name,
        dueDate,
      },
    };
    dispatchToDoList(addTodoItemAction);
  };

  const deleteToDoItem = (todoItem) => {
    const addTodoItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItem,
      },
    };
    dispatchToDoList(addTodoItemAction);
  };

  return (
    <todoItemReducerStore.Provider
      value={{
        toDoList,
        addNewItemInList,
        deleteToDoItem,
      }}
    >
      {children}
    </todoItemReducerStore.Provider>
  );
};

export default ToDoItemListStoreComponent;
