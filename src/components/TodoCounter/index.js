import React from 'react';
import './TodoCounter.css';
import { TodoContex } from '../../TodoContex';
function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContex);

  return (
    <h1 className="TodoCounter" >      
      {totalTodos === completedTodos ? (
        <>¡Felicidades! Has completado todas las tareas.</>
      ) : (
        <>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</>
      )}
    </h1>
  );
}

export {TodoCounter};


