import React, { useContext } from "react"
import { EliminarContext } from "../context/eliminarContext";

export default function PokeList(props){

    function priMayus(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const [deleteState, setDelete] = useContext(EliminarContext)

    return  <div className="col-md-6 border rounded">
                    <div className="row">
                        <img className="col-4" src= {props.pokemon.sprites.front_default}></img>
                        <div className="col-7">
                            <h2 className="col">{priMayus(props.pokemon.name)}</h2>
                            <h6 className="col">Weight: { props.pokemon.weight}</h6>
                            <h6>Habilidades:</h6>
                            <ul>
                                {props.pokemon.abilities.map((e,i)=>{
                                    return <li key={e.ability.name+i}>{priMayus(e.ability.name).replace( "-" , " ")}</li>
                                })}
                            </ul>
                        </div>
                        <div className="col-1"><input type="checkbox" className="form-check-input" ></input></div>
                    </div>
            </div>
                
           
}