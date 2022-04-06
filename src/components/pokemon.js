import React from "react";
//<img src={pokemon.sprites.front_default} />
const Pokedex = (props) => {
    const {pokemons} = props;
    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <div>Pagination</div>
            </div>
            <div className="pokedex">
                {pokemons.map((pokemon, idx) =>{
                    return (
                        <div className="pokedex-grid">
                            <div key={idx}>{pokemon.name}</div> 
                            
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Pokedex;