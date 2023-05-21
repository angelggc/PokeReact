import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PokemonContext } from './context/pokemonContext';
import { BusquedaContext } from './context/searchContext';
import { DeleteContext } from './context/eliminarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BusquedaContext>
        <PokemonContext>
            <DeleteContext>
                <App />
            </DeleteContext>
        </PokemonContext>
    </BusquedaContext>
);
