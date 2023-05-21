import React, {createContext, useState} from 'react';

export const SearchContext = createContext()

export const BusquedaContext = ({ children }) => {

    const [searchState, setSearch] = useState ("")
    
    return (
       <SearchContext.Provider value ={[searchState, setSearch]}>
        {children}
       </SearchContext.Provider>
    )
  
}