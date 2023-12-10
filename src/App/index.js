import React from 'react';
import { useTodos } from './useTodos';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoadig } from '../components/TodosLoadig';
import { TodosError } from '../components/TodosError';
import { EmpyTodos } from '../components/EmpyTodos/EmpyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';

function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
} = useTodos();

  return (
    <>
        <TodoHeader loading={loading}>
            <TodoCounter 
            completedTodos ={completedTodos}
            totalTodos = {totalTodos}
            />
            <TodoSearch 
            searchValue= {searchValue}
            setSearchValue = {setSearchValue}
            />
        </TodoHeader>
        
        <TodoList 
            error = {error}
            loading = {loading}
            searchedTodos = {searchedTodos}
            totalTodos = {totalTodos}
            seachText = {searchValue}
            onError = {() => <TodosError/>}
            onLoading = {() => <TodosLoadig/>}
            onEmpyTodos = {() => <EmpyTodos/>}
            onEmpySearchResult = {
                (seachText) => <p>No hay resultados para {seachText}</p>
            }
            // render = {todo => (
            //     <TodoItem
            //         key={todo.text}
            //         text={todo.text}
            //         completed={todo.completed}
            //         onComplete={() => completeTodo(todo.text)}
            //         onDelete={() => deleteTodo(todo.text)}
            //     />
            // )}
        >
            {todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            )}
        </TodoList>
        

        <CreateTodoButton
            setOpenModal={setOpenModal}
        />

        {openModal && (
            <Modal>
                <TodoForm 
                 addTodo = {addTodo}
                 setOpenModal = {setOpenModal}
                />
            </Modal>
        )}
        
    </>
);
}



export default App;
