import { createContext } from "react";

export const TodoItemContext = createContext({
        toDoList: [],
       addNewItemInList: () => {},
       deleteToDoItem : () => {},
});
