import { defineStore } from 'pinia'

export const usePokemonsList = defineStore({
    id: 'pokemons',
    state: () => ({
        pokemonsList: []
    }),
    actions: {
        async fetchPokemons () {
                await fetch('https://pokeapi.co/api/v2/pokemon')
                .then(res => res.json())
                .then(data => {
                    this.pokemonsList = data.results
                    console.log(data.results);
                })
            
        }        
    }
})