import React from 'react'

function InputRange() {
  return (
    
      <div className='input-content'>
         <p className='timer'>0:00</p>
         <input type='range' className='range' min='1' max='100' />
         <p className='duration'>0:00</p>
      </div>
     
    
  )
}

export default InputRange
