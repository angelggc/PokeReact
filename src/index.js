import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PokemonContext } from './context/pokemonContext';
import { BusquedaContext } from './context/searchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BusquedaContext>
        <PokemonContext>
            <App />
        </PokemonContext>
    </BusquedaContext>
);
