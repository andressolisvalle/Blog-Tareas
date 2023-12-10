import React from 'react';
import './TodoCounter.css';
function TodoCounter({ completedTodos,totalTodos,loading }){

  return (
    <h1 
    className={`TodoCouter ${!!loading && "TodoCounter--loading"}`} >      
      {totalTodos === completedTodos ? (
        <>¡Felicidades! Has completado todas las tareas!</>
      ) : (
        <>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</>
      )}
    </h1>
  );
}

export {TodoCounter};


