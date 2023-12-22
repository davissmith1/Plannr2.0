import './styles/App.css';
import BinListDisplay from './components/binListDisplay.js'
import AddIcon from '@mui/icons-material/Add'; 
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TaskForm from './forms/taskForm.js'

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddIconClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };


  return (
    <div className='App'>
        <div className='addIcon'>
          <AddIcon onClick={handleAddIconClick} />
        </div>
        
        
        <BinListDisplay />
    
        
        {isFormOpen && (
        <div className="popupForm">
          <div className='close'>
            <CloseIcon onClick={handleCloseForm} />
          </div>
          
          <TaskForm onSubmit={handleCloseForm}/>
          
        </div>
        )}
        
    </div>
  );
}

export default App;
