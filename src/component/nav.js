import React, { useContext } from "react";
import { SearchContext } from "../context/searchContext";

export default function Nav(){

    const [searchState, setSearch] = useContext(SearchContext)

    console.log("Api cargada")

    return <div className="row sticky-top">
        <nav className="navbar  bg-dark navbar-dark ">
            <span className="navbar-brand mb-0 h1 mx-4">PokeReact</span>
            <nav className="navbar bg-dark navbar-dark">
            <button type="button" class="btn btn-secondary btn-lg" disabled>Eliminar</button>
                <form className="mx-2 px-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar Pokemon" aria-label="Search" value={searchState} onChange={ e => setSearch(e.target.value)} ></input>
                </form>
            </nav>
        </nav>
    </div> 

}