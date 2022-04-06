//importanciones
import React from 'react';
import './App.css';
import Navbar from './components/navBar';
import Pokedex from './components/pokemon';
import { getData, getPokemons } from './components/api';

//funciones
function App() {
  const [pokemons, setPokemons] = React.useState([])


  const fetchPokemons = async() =>{//función para listar los pokémon
    try{
      let num = Math.floor(Math.random() * 1120);
      const data = await getPokemons(6, num);//llama a la función que lista en grupo de 6
      const promises = data.results.map(async (pokemon) =>{//mapea cada dato a su pokémon
        return await getData(pokemon.url);
      })
      const results = await Promise.all(promises);//verifica que los datos sean correctos
      setPokemons(results)
    }catch(err){

    }
  }

  React.useEffect(()=>{//renderiza la aplicación para que se actualice una vez
    fetchPokemons();
  }, [])

  return (
    <div>
      <Navbar/>
      <div className="App">
        <Pokedex pokemons={pokemons}/> 
      </div>
    </div>

  );
}

export default App;
