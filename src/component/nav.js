import React, { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import { EliminarContext } from "../context/eliminarContext";

export default function Nav(){

    const [searchState, setSearch] = useContext(SearchContext)
    
    const [deleteState, setDelete] = useContext(EliminarContext)

    console.log("Api cargada")

    return <div className="row sticky-top">
        <nav className="navbar  bg-dark navbar-dark ">
            <span className="navbar-brand mb-0 h1 mx-4">PokeReact</span>
            <nav className="navbar bg-dark navbar-dark">
            <button type="button" className="btn btn-secondary btn-lg" ><i className="bi bi-trash"></i></button>
                <form className=" mx-2 px-0">
                    <input className="form-control mr-sm-1" type="search" placeholder="Buscar" aria-label="Search" value={searchState} onChange={ e => setSearch(e.target.value)} ></input>
                </form>
            </nav>
        </nav>
    </div> 

}