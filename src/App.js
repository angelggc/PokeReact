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



  return (
    <div className="App container ">
      
      { pokeState != undefined ? <Nav /> : console.log("Esperando Api")}
      
      <div className="row">
        
        { 
          pokeState != undefined ? (
            searchState == "" ? pokeState.map((e, index)=>{
              return <PokeList nombre = {e.name} peso = {e.weight} imagen = {e.sprites.front_default} keyid = {e.id} abilities = {e.abilities}/>
            } ) : pokeState.map((e, index)=>{
              if(e.name.includes(searchState)){
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
