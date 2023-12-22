import React from 'react'
import '../styles/bin.css'
import TaskListDisplay from './taskListDisplay'


function BinDisplay({ bin, index}) {
  
  return (
    <div className='bin'>
      <div className='title'>
        <h1>
          {bin.name}
        </h1>
      </div>
      <div className='tasks'>
        <TaskListDisplay taskList={bin.getAllTasks()} />
      </div>

    </div>
  )
}

export default BinDisplay