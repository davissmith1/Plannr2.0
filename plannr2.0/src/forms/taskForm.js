import React from 'react'
import '../styles/taskForm.css'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Task from '../models/task';



function TaskForm( { closeForm }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    new Task(title, description);
    closeForm();
  }
  
  const handleClose = (event) => {
    event.preventDefault();
    closeForm();
  }

    return (
    <div className='taskForm'>
        <form>
            <div className='input'>
                <label>
                    <input 
                    className='title' 
                    type="text" 
                    placeholder='Title' 
                    value = {title}
                    onChange={ handleTitleChange }
                    />
                </label>
                <label>
                    <textarea 
                    className='description' 
                    type='text'
                    placeholder='Description'
                    value={description}
                    onChange={ handleDescriptionChange }
                    />
                </label>
            </div>
            <div className='close'>
              <Button onClick={ handleClose }>Cancel</Button>
            </div>
            <div className='submit'>
                <Button onClick={ handleSubmit }>Submit</Button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm