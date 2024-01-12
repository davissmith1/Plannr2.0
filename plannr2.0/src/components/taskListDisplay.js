import React, { useState } from 'react'
import TaskDisplay from './taskDisplay'

function TaskListDisplay({binIndex, tasks, setTasks}) {
 
  
  //task bin id as parameter
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //change bin
  //takes new bin id as parameter
  const changeBin = (taskId, newBinId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, bin: newBinId } : task));
  };

  // // Get tasks for a certain bin
  // // const binTasks = tasks.filter(task => task.assignedBin === binIndex);
    return (
      <div className='tasks'>
        {tasks.filter(task => task.bin === binIndex).map(task => (
          <TaskDisplay
            task={task}
            onDelete={() => deleteTask(task.id)}
            onBinChange={(newBin) => changeBin(task.id, newBin)}
          />
        ))}
      </div>
    )
}

export default TaskListDisplay