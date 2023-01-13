import { defineStore } from 'pinia'

let pokemon = new Object();
    pokemon.name = "",
    pokemon.type = [],
    pokemon.id = "",
    pokemon.img="",
    pokemon.color= [];   

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
                    
                    if(data.name.includes("")){
                    pokemon.name = data.name.toUpperCase()
                    pokemon.id = data.id
                    pokemon.type = data.types[0].type.name
                    pokemon.color = "--"+pokemon.type

                    if(data.types[1]!=null){
                        pokemon.type2 = data.types[1].type.name
                        pokemon.color2 = "--"+pokemon.type2
                       
                    }else{
                        pokemon.type2 = "----"
                        pokemon.color2 = "----"
                    }
                    
                    pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`
                    this.pokemonsList.push(pokemon)
                   
                }
                })
            }
        }        
    }
})

