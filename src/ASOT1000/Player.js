import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa';
import { FcNext, FcPrevious } from 'react-icons/fc';

function Player() {
  return (
    <div className='player-center'>
      <FcPrevious className='player-icon' />
      <FaPlay className='player-icon'/>
      <FcNext  className='player-icon'/>

    </div>
  )
}

export default Player
