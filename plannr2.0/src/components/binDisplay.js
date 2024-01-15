import React, {useState} from 'react'
import '../styles/bin.css'
import TaskListDisplay from './taskListDisplay'


function BinDisplay({ binName, index, tasks, setTasks}) {
  const handleTaskDrop = (taskId) => {
    setTasks(tasks.map(task => task.id === parseInt(taskId) ? { ...task, bin: index } : task));
  };
  return (
    <div 
      className='bin'
      onDragOver={event => {
        // Prevent the default to allow drop
        event.preventDefault();
      }}
      onDrop={event => {
        // Get the task ID from the drag data and handle the drop
        const taskId = event.dataTransfer.getData('text/plain');
        handleTaskDrop(taskId);
      }}
    >
      <div className='title'>
        <h1>
          {binName}
        </h1>
      </div>
      <div className='tasks'>
        <TaskListDisplay binIndex={index} tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  )
}

export default BinDisplay