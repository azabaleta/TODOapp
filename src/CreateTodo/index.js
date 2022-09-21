import React from 'react';
import "./CreateTodo.css";

function CreateTodo({ onAdd }){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [newTodoTitle, setNewTodoTitle] = React.useState('');

    const onTitleChange = (event => {
        setNewTodoTitle(event.target.value);
      });

      const onValueChange = (event => {
        setNewTodoValue(event.target.value);
      });

    const submitHandle = (e => {
         e.preventDefault();
        onAdd(newTodoTitle, newTodoValue);
        setNewTodoValue('')
        setNewTodoTitle('')
    });

    return( 
    <form className="CreateTodoSect" onSubmit={submitHandle}>
        <label className="label" htmlFor="title">Task title</label>
        <input type="text" className="input input-title" id="title" name="title" placeholder="Study for an hour" value={newTodoTitle} onChange={onTitleChange}/>

        <label className="label" htmlFor="description">Task description</label>
        <textarea type="text" className="input input-description" id="description" name="description" placeholder="Study DB fundamentals" value={newTodoValue} onChange={onValueChange}/>

        <button type="submit" className="CreateBtn">Create task</button>
    </form>
    );   
}

export { CreateTodo };