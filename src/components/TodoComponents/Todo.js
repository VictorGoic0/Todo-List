import React from 'react';


const Todo = props => {
  return (
    <div>
      <p onClick={() => props.toggleItem(props.id)}>{props.task}</p>
    </div>
  )
}

export default Todo;
