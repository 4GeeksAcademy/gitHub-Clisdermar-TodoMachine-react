import React from 'react'
import './TodoList.css'

function TodoList(props) {
  return (
    <ul className='TodoList'>
        {props.children}
    </ul>
   
  )
}

export default TodoList