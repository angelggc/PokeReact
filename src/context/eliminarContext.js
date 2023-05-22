import React, {createContext, useState} from 'react';

export const EliminarContext = createContext()

export const DeleteContext = ({ children }) => {

    // -------LA FUNCION DE BORRAR NO ESTA COMPLETA-------

    // Estaba por crear un array que guarde los id de los pokemons marcados por el input checkbox para luego eliminarlos
    const [deleteState, setDelete] = useState ([])
    
    return (
       <EliminarContext.Provider value ={[deleteState, setDelete]}>
        {children}
       </EliminarContext.Provider>
    )
  
}