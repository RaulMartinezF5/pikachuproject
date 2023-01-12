import { defineStore } from 'pinia'

let pokemon = new Object();
    pokemon.name = "",
    pokemon.type = "",
    pokemon.id = "",
    pokemon.img="" ;
    

export const usePokemonsList = defineStore({
    id: 'pokemons',
    state: () => ({
        pokemonsList: []

    }),
    actions: {
        async fetchPokemons () {
            for (let index = 0; index < 51; index++) {                
                await fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}`)
                .then(res => res.json())
                .then(data => {
                    pokemon.name = data.name
                    pokemon.id = data.id
                    pokemon.type = data.types[0].type.name
                    pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`
                    this.pokemonsList.push(pokemon)
                })
            }
        }        
    }
})

