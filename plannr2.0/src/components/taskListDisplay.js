import React, { useState } from 'react'
import TaskDisplay from './taskDisplay'

function TaskListDisplay( { taskList } ) {
  const[counter, setCounter] = useState(taskList.length)

  const handleDelete = () => {
    setCounter(counter -1);
  }
  return (
    <div className='tasks'>
      {taskList.map((task, index) =>{
        return(
          <TaskDisplay id={index} task={task} onDelete={handleDelete}  />
        );
      })}
    </div>
  )
}

export default TaskListDisplay