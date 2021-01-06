import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './style.css';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'learn react',
    //     done: false
    // }];

}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAdd = (newTodo) => {
        
        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    const handleDelete = (todoId) => {
        
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);

    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className="col-5">
                    <TodoForm 
                        handleAdd={ handleAdd }
                    />
                </div>
            </div>

        </div>
    )
}
