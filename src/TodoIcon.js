import React from 'react';
import { ReactComponent as CheckSVG  } from './check.svg';
import { ReactComponent as  DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes={
  "check":(color) => <CheckSVG className='Icon-svg' fill={color}/>,
  "delete":(color)=> <DeleteSVG className='Icon-svg' fill={color}/>
}

function TodoIcon(props) {
  return (<span className={`Icon Icon-container Icon-container-${props.type}`} onClick={props.onClick}>
     {iconTypes[props.type](props.color)}
    </span>
  )
};
export default TodoIcon;
