import React from 'react'
import '../styles/task.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {useDraggable} from '@dnd-kit/core';


function TaskDisplay( { key, task, onDelete, onBinChange}) {
    const [isTaskOpen, setIsTaskOpen] = useState(false);

    const handleTaskClick = () => {
      if(task.description != '' || task.description != null){
        console.log(task.description);
        setIsTaskOpen(!isTaskOpen);
      }
    };

    const handleDelete = () => {
        //event.stopPropagation(); // Prevent triggering handleTaskClick
        onDelete(task.id);
    };

    const formattedDate = 
        (task.createdAt.getHours().toString() + ':' +
        task.createdAt.getMinutes().toString().padStart(2, '0'));
  
    return (
    <div 
        className='task' 
        onClick={ handleTaskClick }
        draggable={true}
        onDragStart={event => {
            event.dataTransfer.setData('text/plain', task.id);
            event.dataTransfer.effectAllowed = 'move';
        }}
    >
        <div className='task-title'>
            <h1>
            {task.taskName}
            </h1>
        </div>
        <div className='buttons'>
            <div className='closeIcon'>
                <CloseIcon fontSize='small' onClick={ handleDelete } />
            </div>
        </div>
        {isTaskOpen && (
            <div className='task-description'>
                { task.description}
            </div>
        )}
        <div className='task-date'>
            <p>
                { formattedDate }
            </p>
        </div>
    </div>
  )
}

export default TaskDisplay