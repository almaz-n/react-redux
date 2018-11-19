import React from 'react';

const TodoList = (props) => {
    const {todos, toggleTodo} = props;

    return (
        <div>
            <h1>Todo List</h1>                      
            <ol className="todo-list"> 
            {
                todos.map((todo) => {                 
                    const checkedClass = todo.checked ? 'done' : '';
                    const className = `todo-list__item ${checkedClass}`; 

                    return (
                        <li key = {todo.id}
                            className = {className}
                            onClick = { () =>  { toggleTodo(todo.id) } } 
                        >
                            {todo.name} 
                        </li>
                    )
                }) 
            }
            </ol>
        </div>
    )
}

export default TodoList;