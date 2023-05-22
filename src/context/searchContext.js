import React, {createContext, useState} from 'react';

export const SearchContext = createContext()

export const BusquedaContext = ({ children }) => {

    // Dentro del searchState guardo un string con el nombre del pokemon a buscar
    const [searchState, setSearch] = useState ("")

    // Retorno searchState como un contexto
    
    return (
       <SearchContext.Provider value ={[searchState, setSearch]}>
        {children}
       </SearchContext.Provider>
    )
  
}