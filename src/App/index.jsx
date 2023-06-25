import React, { useState } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: true },
  { text: 'LALALALALA', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');
  
  // busca los todo dependiendo del text
  const searchedTodos = todos.filter((todo)=>{
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completedTodos = todos.filter(todo => !!todo.completed == true).length;
  const totalTodo = todos.length;

  const completeTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.text == text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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