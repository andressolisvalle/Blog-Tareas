import React, { Children } from 'react';
import './TodoList.css';
import { TodoContex } from '../../App/useTodos';
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