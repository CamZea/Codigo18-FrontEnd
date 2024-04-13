// creacion de componente

import React, { useState } from 'react'

function App() {
  
  const [backgroundColor, setBackgroundColor] =useState('')
  const handleChange = (event) =>{
    setBackgroundColor(event.target.value)


  }
  
  return (
    <div className='app'>
      <span>Selecciona un color:</span>
      <input type="text" 
      placeholder='enter the color'
      onChange={handleChange}
      value={backgroundColor} />


    </div>
  )
}

export default App