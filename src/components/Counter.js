import { Button } from './Button';
import React from 'react'
import { useState, useEffect } from 'react';

const Counter = () => {

    let [numClick, setClicks] = useState(0); 

    const increase= () => {
      setClicks(numClick ++);
    } 
  
    
    const ResetClick = () => {
      setClicks(0);
    }
  return (
    <div className='contenedor'>

    <Button numClick={numClick} />
    <Button 
      texto='Click'
      ButtonClick={true}
      increase={increase} />
    <Button 
      texto='reseat'
      ButtonClick={false}
      ResetClick={ResetClick}/>

      
 </div>
  )
}

export default Counter