import React, { useState } from 'react'
import TaskDisplay from './taskDisplay'

function TaskListDisplay({binIndex, tasks, setTasks}) {
 
  
  //task bin id as parameter
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

    return (
      <div className='tasks'>
        {tasks.filter(task => task.bin === binIndex).map(task => (
          <TaskDisplay
            task={task}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </div>
    )
}

export default TaskListDisplay