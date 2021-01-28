import React from 'react'
import {AsotContext} from './context'



function DisplaySong() {

  const {anthems, currentAnthem} = React.useContext(AsotContext)




  return (
    <div>
      <img className='anthem-cover' src={currentAnthem.cover} alt='' />
      <h1 className='text-center asot-title'>{currentAnthem.name}</h1>
      <h2 className='text-center asot-artist'>{currentAnthem.artist}</h2>
    </div>
  )
}

export default DisplaySong
