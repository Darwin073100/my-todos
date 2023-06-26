import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: true },
//   { text: 'LALALALALA', completed: false },
// ];
//   localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  // Usando nuestro propio hook
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
  const totalTodo = todos.length;

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
    <AppUI 
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
      completedTodos={completedTodos}
      setSearchValue={setSearchValue}
      totalTodo={totalTodo}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
    />
  );
}

export { App };
