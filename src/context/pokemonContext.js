import React, {createContext, useState, useEffect} from 'react';


export const DataContext = createContext()

export const PokemonContext = ({ children }) => {


  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

  const [pokeState, setPokemon] = useState()

  const fetchApi = async () =>{
    const response =  await fetch(url)
    const responseJSON = await response.json()

    const listapokecompleta = [] 

    for (let index = 0; index < responseJSON.count; index++) { 
      await fetch(responseJSON.results[index].url)
      .then(response => response.json())
      .then(data => listapokecompleta.push(data))
      .catch(error => console.error(error))


    }

    setPokemon(listapokecompleta)
  }

  useEffect( ()=>{
    fetchApi()
  }, [])
  
  return (
     <DataContext.Provider value ={[pokeState , setPokemon]}>
      {children}
     </DataContext.Provider>
  )

}

