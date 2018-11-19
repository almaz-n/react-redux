import React from 'react'

const TodoInput = (props) => {
    const { addTodo } = props;

    return (
        <input
            type="text"
            placeholder="Добавить новую задачу"
            className="form-control form-input"
            onKeyDown={	
                (ev) => {
                    if(ev.keyCode === 13) {
                        addTodo(ev.target.value);
                    }
                }
            }
        />
    )
}

export default TodoInput;