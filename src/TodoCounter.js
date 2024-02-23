import React from 'react'
import './TodoCounter.css'


function TodoCounter(props) {

  return (
    
      <h1 className='TodoCounter'>Has Completado <span>{props.completed}</span> de <span>{props.Total} </span> </h1>
    
  )
}

export default TodoCounter;