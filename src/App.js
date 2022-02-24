import { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';
import style from '../src/components/Pokemon.module.css'

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=4')

  const getAllPokemans = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemon(poki => [...poki, data])

      });
    }
    createPokemonObject(data.results)

  }

  useEffect(() => {
    getAllPokemans()
  }, [])

  var sum = []
  const exp = () => {
    
    var rndNumber = Math.floor(Math.random() * 250)
    sum.push(rndNumber)
    
    return rndNumber
  }
  
  console.log(sum)
  
  var gamer2 = 1
  var gamer1 = 0

  
 
  console.log(gamer1);
  



  



  return (
    <>
      <h1>Pokedex Game</h1>

      <div className={style.btn}>
        <button onClick={getAllPokemans} className='load-more' disabled="disabled">Loadn more</button>
      </div>

      <div>
        <h4 className={gamer1 > gamer2 ? style.winner : style.lose}>{gamer1 > gamer2 ? "Winning Hand" : "Losing Hand"}</h4>
        <h4>Total Experience:{gamer1} </h4>
        <div className={style.allcontainer}>
          {allPokemon.map((pokemon, index) => <Pokemon
            id={pokemon.id}
            name={pokemon.name.toUpperCase()}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            exp={exp()}
           /*  sum={sum.push(exp)} */
            key={index}
          />)}
        </div>
      </div>


      <div>
        <h4 className={gamer1 < gamer2 ? style.winner : style.lose}>{gamer1 < gamer2 ? "Winning Hand" : "Losing Hand"}</h4>
        <h4>Total Experience: {gamer2}</h4>
        <div className={style.allcontainer}>
          {allPokemon.map((pokemon, index) => <Pokemon
            id={pokemon.id}
            name={pokemon.name.toUpperCase()}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            exp={exp()}
           /*  sum={sum.push(exp)} */
            key={index}
          />)}
        </div>
      </div>

    </>
  );
}

export default App;
