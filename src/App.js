import React, { useContext } from "react";
import PokeList from './component/pokeList';
import Nav from "./component/nav";
import { DataContext } from './context/pokemonContext';
import { SearchContext } from './context/searchContext'

function App() {

  const  [pokeState]  = useContext(DataContext)
  const [searchState] = useContext(SearchContext)

  function cargando(){
    return <div className="m-0 vh-100 row justify-content-center align-items-center">
      <div className="text-center">
        <div className="spinner-border" role="status">
        </div>
      </div>
    </div>
  }


  // Si pokeState(contiene la informacion de los pokemones) existe, muestra el Nav y la lista de pokemones, de lo contrario muesta la pantalla de carga

  return (
    <div className="App container ">
      
      { pokeState !== undefined ? <Nav /> : console.log("Esperando Api")}
      
      <div className="row">
        
        { 
          pokeState !== undefined ? (
            searchState === "" ? pokeState.map((e, index)=>{
              return <PokeList nombre = {e.name} peso = {e.weight} imagen = {e.sprites.front_default} keyid = {e.id} abilities = {e.abilities}/>
            } ) : pokeState.map((e)=>{
              if(e.name.includes(searchState) || e.abilities[0].ability.name.includes(searchState) || (e.abilities[1]? e.abilities[1].ability.name.includes(searchState): false) || (e.abilities[2]? e.abilities[2].ability.name.includes(searchState): false)){
                return <PokeList nombre = {e.name} peso = {e.weight} imagen = {e.sprites.front_default} keyid = {e.id} abilities = {e.abilities}/>
              } 
            } )
          ) : cargando()
        }

      </div>
    </div>
  );
}

export default App;
