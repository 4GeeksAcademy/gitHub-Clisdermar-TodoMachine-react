import React from 'react'
import './TodoSearch.css'


function TodoSearch(props) {

  return (
    <input placeholder='Picar platano' className='TodoSearch' value={props.searchValue} 
    onChange={(event)=> {
      props.setSearchValue(event.target.value)
   
    }} />
  )
}

export default TodoSearch