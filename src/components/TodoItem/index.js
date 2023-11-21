import React from 'react';
import './TodoItem.css';
import { FaCheckCircle  } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
function TodoItem(props){
  
  return (
    <li className="TodoItem">
      <FaCheckCircle 
        className={`Icon Icon-check 
        ${props.completed && "Icon-check--active"}`} 
        onClick={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <IoClose
        className="Icon Icon-delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export {TodoItem};