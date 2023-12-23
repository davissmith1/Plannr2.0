import React from 'react'
import '../styles/bin.css'
import TaskListDisplay from './taskListDisplay'


function BinDisplay({ bin, index, taskChange}) {
  
  return (
    <div className='bin'>
      <div className='title'>
        <h1>
          {bin.name}
        </h1>
      </div>
      <div className='tasks'>
        <TaskListDisplay taskList={bin.getAllTasks()} taskChange={taskChange} />
      </div>

    </div>
  )
}

export default BinDisplay