export const pokemons = async (num) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${num}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

export const getPokemons = async (limit, offset) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}