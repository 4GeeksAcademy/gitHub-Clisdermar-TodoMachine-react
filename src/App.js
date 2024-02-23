import React from 'react';
import {  useState } from "react";
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';


const deafaultTodo = [
  {text:"Picar cebolla", completed:true},
  {text:"Hacer curso de react", completed:false},
  {text:"Picar platano", completed:false},
  {text:"Lavar zapatos", completed:false},
  {text:"Recoger la ropa", completed:true}

];

function App() {
  const[todos,setTodos] = useState(deafaultTodo);
  const[searchValue, setSearchValue]= useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // const searchTodos = todos.filter( (todo) =>{

  //   return todos.text.include(searchValue)
  // }
  
  //     )

  console.log('Los usuarios buscan todos de '+ searchValue);

  return ( 
    <>
          <TodoCounter completed={completedTodos} Total={totalTodos} />
          <TodoSearch  
          searchValue={searchValue}
          setSearchValue={setSearchValue} />
         <TodoList >
          {searchTodos.map((todo)=>{
            return <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          })}
          </TodoList>

          <CreateTodoButton />

    </>
    
    
    );
   
    
  }

 

export default App
