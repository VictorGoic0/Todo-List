import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return props.list.map((input, i) => (
    <Todo task={input.task} key={i} />
  ))
}

export default TodoList;
