import React, {createContext, useState, useEffect} from 'react';


export const DataContext = createContext()

export const PokemonContext = ({ children }) => {


  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

  const [pokeState, setPokemon] = useState()

  // El uso de las api es algo que no termine de entender, pero con este trabajo pude repasar algo
  // Hago una peticion a la api de pokemon pero como me entrega solo el nombre y un url mas abajo hago otra peticion

  const fetchApi = async () =>{
    const response =  await fetch(url)
    const responseJSON = await response.json()

    // Un for itera la respuesta de la primera peticion pusheando la data de todos los pokemones a un array

    const listapokecompleta = [] 

    for (let index = 0; index < responseJSON.count; index++) { 
      await fetch(responseJSON.results[index].url)
      .then(response => response.json())
      .then(data => listapokecompleta.push(data))
      .catch(error => console.error(error))


    }

    // Guardo la lista completa a pokeState

    setPokemon(listapokecompleta)
  }

  useEffect( ()=>{
    fetchApi()
  }, [])
  
  // Se retorna pokeState como un contexto

  return (
     <DataContext.Provider value ={[pokeState , setPokemon]}>
      {children}
     </DataContext.Provider>
  )

}

