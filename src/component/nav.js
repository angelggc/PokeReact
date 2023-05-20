import React, { useContext, useState} from "react";
import { DataContext } from '../context/pokemonContext';

export default function Nav(){

    
    const  [pokeState , setPokemon]  = useContext(DataContext)

    console.log("Api cargada")

    return <div className="row sticky-top">
        <nav className="navbar  bg-dark navbar-dark ">
            <span className="navbar-brand mb-0 h1 mx-4">PokeReact</span>
            <nav className="navbar bg-dark navbar-dark">
                <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Buscar Pokemon" aria-label="Search" id="pokeSerch"></input>
            </nav>
        </nav>
    </div> 

}