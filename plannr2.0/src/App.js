import { useState } from 'react';

import './styles/App.css';

import AddIcon from '@mui/icons-material/Add'; 
import TaskForm from './forms/taskForm.js'
import BinDisplay from './components/binDisplay.js';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  //TODO: Remove this default task for dev purposes only
  let defaultTasks = {
        id: 0,
        taskName: 'This is a task with a long name',
        description: null,
        bin: 0,
        createdAt: new Date(),
      }
  
  const [tasks, setTasks] = useState([defaultTasks]);
  
  const handleAddIconClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    console.log(tasks)
  };

  const createTask = (taskName, description) => {
    console.log('Create called in App')
    const newTask ={
      id: tasks.length,
      taskName: taskName,
      description: description,
      bin: 0,
      createdAt: new Date(),
    }
    
    setTasks([...tasks, newTask]);
  };

  const date = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className='App'>
      <div className='date'>
          <h1>
            {daysOfWeek[date.getDay()]}, {date.toLocaleDateString()}
          </h1>
      </div>
        <div className='addIcon'>
          <AddIcon onClick={ handleAddIconClick } />
        </div>
        <div className='bins'>
          <BinDisplay binName='To Do' index={0} tasks={tasks} setTasks={setTasks} />
          <BinDisplay binName='In Progress' index={1} tasks={tasks} setTasks={setTasks}/>
          <BinDisplay binName='Done' index={2} tasks={tasks} setTasks={setTasks}/>
        </div>
    
        {isFormOpen && (
          <div className="popupForm"> 
            <TaskForm closeForm = { handleCloseForm } createTask = { createTask } />
          </div>
        )}

    </div>
  );
}

export default App;
