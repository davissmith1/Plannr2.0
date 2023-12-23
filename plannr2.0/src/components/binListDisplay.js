import React, { useState } from 'react'
import { binList } from '../helper/binList'
import BinDisplay from './binDisplay'
import '../styles/bin.css'



function BinListDisplay() {
  const[move, setMove] = useState(true);

  const handleTaskChange = () => {
    setMove(!move);
  }
  console.log(binList)
  return (
    <div className='binList'>
    {binList.map((bin, index) =>{
      return(
        <BinDisplay id={index} bin={bin} taskChange={handleTaskChange} />
      );
    })}
    </div>
  )
}


export default BinListDisplay