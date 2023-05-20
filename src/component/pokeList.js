import React from "react"

export default function PokeList(props){

    function priMayus(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    return  <div className="col-md-6 border rounded">
                    <div className="row">
                        <img className="col-4" src= {props.imagen}></img>
                        <div className="col-8">
                            <h2 className="col">{priMayus(props.nombre)}</h2>
                            <h6 className="col">Weight: { props.peso}</h6>
                            <h6>Habilidades:</h6>
                            <ul>
                                {props.abilities.map((e,i)=>{
                                    return <li key={i}>{e.ability.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>
            </div>
                
           
}