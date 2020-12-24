import React from 'react'

export default function Todo({todo, toggleTodo}) {

    function handleTodoClick() {
        toggleTodo(todo.id);
    }

    return (
        <div>
            <input type="checkbox" defaultChecked={todo.complete} 
            onChange={handleTodoClick} />
            {todo.name}
        </div>
    )
}
