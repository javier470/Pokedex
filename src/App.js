import React from 'react';
import './App.css';
import Navbar from './components/navBar';
import Pokedex from './components/pokemon';
import { getPokemons } from './components/api';

function App() {
  const [pokemons, setPokemons] = React.useState([])


  const fetchPokemons = async() =>{
    try{
      let num = Math.floor(Math.random() * 1120);
      const data = await getPokemons(6, num);
      setPokemons(data.results);
    }catch(err){

    }
  }

  React.useEffect(()=>{
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
