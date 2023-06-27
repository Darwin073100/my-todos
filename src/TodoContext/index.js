import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    // Usando nuestro propio hook
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState("");

  // Busca los todos dependiendo del text
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completedTodos = todos.filter(
    (todo) => !!todo.completed == true
  ).length;
  const totalTodos = todos.length;

  // Completa todos
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // Elimina todos
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    // Remueve elementos de un array
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            deleteTodo, 
            completeTodo, 
            completedTodos, 
            searchValue,
            setSearchValue, 
            totalTodos, 
            searchedTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };