import React, { useContext } from 'react'
import '../styles/taskForm.css'
import { useState } from 'react'
import Button from '@mui/material/Button';


function TaskForm( { closeForm, createTask }) {
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
    createTask(title, description);
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
                    maxLength={40}
                    required
                    />
                </label>
                <div className='charCount'>
                  <p>{title.length}/40</p>
                </div>
                <label>
                    <textarea 
                    className='description' 
                    type='text'
                    placeholder='Description'
                    value={description}
                    onChange={ handleDescriptionChange }
                    maxLength={350}
                    />
                </label>
                <div className='charCount'>
                  <p>{description.length}/350</p>
                </div>
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