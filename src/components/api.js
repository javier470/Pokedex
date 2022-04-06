//funciones
export const getData = async (url) =>{//busca los datos según la url de los resultados llamados
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

export const getPokemons = async (limit, offset) => {//busca los pokémon en grupos de 6(limit), con los datos de todos los pokémon (offset)
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}
