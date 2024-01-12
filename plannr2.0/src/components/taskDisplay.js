import React from 'react'
import '../styles/task.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';



function TaskDisplay( { key, task, onDelete, onBinChange}) {
    const [isTaskOpen, setIsTaskOpen] = useState(false);

    const handleTaskClick = () => {
      setIsTaskOpen(!isTaskOpen);
    };

    const handleBinChange = () =>{
        if (task.bin === 2){}

        else{
            onBinChange(task.bin + 1);
        }
        console.log("bin changed");
    }

    const handleDelete = () => {
        //event.stopPropagation(); // Prevent triggering handleTaskClick
        onDelete(task.id);
    };
  
    return (
    <div className='task' onClick={ handleTaskClick }>
        <div className='task-title'>
            <h1>
            {task.taskName}
            </h1>
        </div>
        <div className='buttons'>
            <div className='closeIcon'>
                <CloseIcon fontSize='small' onClick={ handleDelete } />
            </div>
            <div className='arrowIcon'>
                <ArrowForwardIcon fontSize='small' onClick={ handleBinChange }/>
            </div>
        </div>
        {isTaskOpen && (
            <div className='task-description'>
                { task.description}
            </div>
        )}
        <div className='task-date'>
            <p>
                { task.createdAt.toLocaleTimeString() }
            </p>
        </div>
    </div>
  )
}

export default TaskDisplay