import React from 'react'
import '../styles/task.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function TaskDisplay( { id, task }) {
    const [isTaskOpen, setIsTaskOpen] = useState(false);

    const handleTaskClick = () => {
      setIsTaskOpen(!isTaskOpen);
    };
  
  
    return (
    <div className='task' onClick={handleTaskClick}>
        <div className='task-title'>
            <h1>
            {task.taskName}
            </h1>
        </div>
        <div className='buttons'>
            <div className='closeIcon'>
                <CloseIcon fontSize='small' />
            </div>
            <div className='arrowIcon'>
                <ArrowForwardIcon fontSize='small'/>
            </div>
        </div>
        {isTaskOpen && (
            <div className='task-description'>
                { task.getDescription()}
            </div>
        )}
        <div className='task-date'>
            <p>
                { task.getCreationDate() }
            </p>
        </div>
    </div>
  )
}

export default TaskDisplay