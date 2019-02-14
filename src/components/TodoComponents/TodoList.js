import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return props.list.map(input => (
    <Todo task={input.task} key={input.id} id={input.id} toggleItem={props.toggleItem}/>
  ))
}

export default TodoList;
