import React from 'react'
import TaskDisplay from './taskDisplay'

function taskListDisplay( { taskList } ) {
  return (
    <div className='tasks'>
      {taskList.map((task, index) =>{
        return(
          <TaskDisplay id={index} task={task}  />
        );
      })}
    </div>
  )
}

export default taskListDisplay