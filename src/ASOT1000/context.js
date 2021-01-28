import React, { createContext, useState } from 'react'
 
import {asotTheme} from './data'
 
export const AsotContext = createContext() // izvoz za komponente
 
const AsotProvider = ({children}) => {

  const [anthems, setAnthems]=useState(asotTheme)
  const [currentAnthem, setCurrentAnthem]=useState(anthems[0])
  const [isPlaying, setIsPlaying]=useState(false)
  

    console.log(anthems)

  return (
    <AsotContext.Provider
      value={{anthems, currentAnthem}}
    >
      {children}
    </AsotContext.Provider>
  )
}
 
export {AsotProvider} // izvoz za index.js