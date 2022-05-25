import React, { createContext, useState } from 'react'


const MenuContext = createContext()

export const MenuProvider = ({children}) => {
    const [isMenuCheked, setIsMenuChecked]= useState(false)

  return (
    <MenuContext.Provider value={{isMenuCheked, setIsMenuChecked}}>
        {children}
    </MenuContext.Provider>
    
  )
}

export default MenuContext