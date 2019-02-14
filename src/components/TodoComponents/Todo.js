import React from 'react';


const Todo = props => {
  return (
    <div onClick={() => props.toggleItem(props.id)}>
      <p>{props.task}</p>
    </div>
  )
}

export default Todo;
