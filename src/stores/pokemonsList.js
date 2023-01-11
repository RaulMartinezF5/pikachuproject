import { defineStore } from 'pinia'

export const usePokemonsList = defineStore({
    id: 'pokemons',
    state: () => ({
        pokemonsList: []
    }),
    actions: {
        async fetchPokemons () {
                await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
                .then(res => res.json())
                .then(data => {
                    this.pokemonsList = data.results
                })
        }        
    }
})