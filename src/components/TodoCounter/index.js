import React from 'react';
import './TodoCounter.css';
function TodoCounter({ completedTodos,totalTodos }){

  return (
    <h1 className="TodoCounter" >      
      {totalTodos === completedTodos ? (
        <>¡Felicidades! Has completado todas las tareas!</>
      ) : (
        <>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</>
      )}
    </h1>
  );
}

export {TodoCounter};


