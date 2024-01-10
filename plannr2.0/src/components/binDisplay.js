import React, {useState} from 'react'
import '../styles/bin.css'
import TaskListDisplay from './taskListDisplay'


function BinDisplay({ binName, index, tasks, setTasks}) {
  let defaultTasks = {
    id: 0,
    taskName: 'Default Task',
    description: 'This is a default task',
    bin: 0,
    createdAt: new Date(),
  }

  //const [tasks, setTasks] = useState([defaultTasks]);
  // //delete task
  
  return (
    <div className='bin'>
      <div className='title'>
        <h1>
          {binName}
        </h1>
      </div>
      <div className='tasks'>
        {/* <TaskListDisplay taskList={bin.getAllTasks()} taskChange={taskChange} /> */}
        <TaskListDisplay binIndex={index} tasks={tasks} setTasks={setTasks}/>
      </div>

    </div>
  )
}

export default BinDisplay