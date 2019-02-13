import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return props.list.map(input => {
    return (
      <Todo task={input} />
    )
  })
}

export default TodoList;
