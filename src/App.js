import React, { useState } from 'react';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';

const defaultTodo = [
  { text: "Picar cebolla", completed: true },
  { text: "Hacer curso de react", completed: false },
  { text: "Picar plátano", completed: false },
  { text: "Lavar zapatos", completed: false },
  { text: "Recoger la ropa", completed: true }
];

function App() {
  const [todos, setTodos] = useState(defaultTodo);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  
  const completeTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo=> todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }
 
  const deleteTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo=> todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchTodos.map((todo) => {
          return <TodoItem key={todo.text} text={todo.text} 
          completed={todo.completed} onComplete={()=>completeTodo(todo.text) }
          onDelete={()=>deleteTodo()}/>;
        })}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;