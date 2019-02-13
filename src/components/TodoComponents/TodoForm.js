import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input
      type="text"
      value={props.task}
      onChange={props.handleChanges}
      name="Task"
      placeholder="...Todo"
      />
      <button type="submit">Add Todo</button>
      <button type="clear">Clear Completed</button>
    </form>
  )
}

export default TodoForm;
