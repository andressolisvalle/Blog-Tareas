import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoadig } from '../components/TodosLoadig';
import { TodosError } from '../components/TodosError';
import { EmpyTodos } from '../components/EmpyTodos/EmpyTodos';
import { TodoContex } from '../TodoContex';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContex);
    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoadig />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmpyTodos />}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />

                ))}
            </TodoList>

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            
        </>
    );
}

export { AppUI };