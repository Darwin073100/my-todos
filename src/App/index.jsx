import React, { useState } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: true },
//   { text: 'LALALALALA', completed: false },
// ];
//   localStorage.setItem('TODOS_V1', defaultTodos);
  // localStorage.removeItem('TODOS_V1');

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODO_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');
  
  // Busca los todos dependiendo del text
  const searchedTodos = todos.filter((todo)=>{
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completedTodos = todos.filter(todo => !!todo.completed == true).length;
  const totalTodo = todos.length;

  // Guarda los datos en localStorage
  const saveTodos = (newTodos)=>{
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  // Completa todos
  const completeTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // Elimina todos
  const deleteTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.text == text);
    // remueve elementos de un array
    newTodos.splice(todoIndex, 1);
    newTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodo} />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={()=> completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export {App};