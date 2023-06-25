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
  console.log('Los usuarios buscan todo de : ' + searchValue);
  
  const completedTodos = todos.filter(todo => !!todo.completed == true).length;
  const totalTodo = todos.length;
  
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodo} />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export {App};