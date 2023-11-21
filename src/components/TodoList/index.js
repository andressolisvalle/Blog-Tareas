import React, { Children } from 'react';
import './TodoList.css';
import { TodoContex } from '../../TodoContex';
import { TodosLoadig } from '../TodosLoadig';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { EmpyTodos } from '../EmpyTodos/EmpyTodos';
function TodoList({children}) {
  return (
    <ul className='TodoList'>
      {children}
    </ul>
  );
}

export { TodoList };