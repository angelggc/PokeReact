import React, {createContext, useState} from 'react';

export const EliminarContext = createContext()

export const DeleteContext = ({ children }) => {

    const [deleteState, setDelete] = useState (false)
    
    return (
       <EliminarContext.Provider value ={[deleteState, setDelete]}>
        {children}
       </EliminarContext.Provider>
    )
  
}