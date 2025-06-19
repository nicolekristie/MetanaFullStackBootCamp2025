import React from 'react';
import App from '../App';


function Todo( {todo }) {
    console.log(`Todo value: ${todo.id}`);
    const { id, title, completed } = todo;
    const h1 = <h1>{title}</h1>
    const text = completed ? <strike>{h1}</strike> : h1;
    console.log(`the id is: todo-${id}`)
    return <div data-testid={`todo-${id}`}></div>


}



export default Todo;