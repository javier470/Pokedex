//importanciones
import React from "react";


//función
const Pokedex = (props) => {
    const {pokemons} = props;
    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <div>Pokémons</div>
            </div>
            <div className="pokedex">
                {pokemons.map((pokemon, idx) =>{//mapea en lista los pokémons
                    return (
                        <div className="pokedex-grid">
                            <div id='name' key={idx}>{pokemon.name}</div> 
                            <img src={pokemon.sprites.front_default} alt='pokemon'/>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Pokedex;