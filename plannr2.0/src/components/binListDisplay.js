import React from 'react'
import { binList } from '../helper/binList'
import BinDisplay from './binDisplay'
import '../styles/bin.css'



function BinListDisplay() {
  return (
    <div className='binList'>
    {binList.map((bin, index) =>{
      return(
        <BinDisplay id={index} bin={bin}  />
      );
    })}
    </div>
  )
}

export default BinListDisplay