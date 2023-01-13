<script setup>
  import { usePokemonsList } from "./stores/pokemonsList";
  import { onBeforeMount, ref } from "vue";
  import HeaderVue  from "@/components/Header.vue";
  import NavVue  from "./components/Nav.vue";
  import PokemonVue  from "./components/Pokemon.vue";

  const pokemonsStore = usePokemonsList()
  
  onBeforeMount(() => {
    getPokemons()
  })

  const loading = ref(true)
  const getPokemons = async () => {
    // pokemonsStore.pokemonToSearch = ref(pokemonToSearch)
    await pokemonsStore.fetchPokemons() 
    loading.value = false
  }

</script>

<template>
  <HeaderVue></HeaderVue>
  <NavVue></NavVue>
  
  <form class="pokemon-form" v-on:submit={handleSubmit}>
    <input
      class="pokemon-input"
      type="text"
      name="pokemon"
      v-model="pokemonName"
      placeholder="Search your pokemon"
      autocomplete="off"/>
    <input
      type="submit"
      class="pokemon-btn"
      value=""
    />
  </form>

  <main>
    <section>
      <ul>
        <PokemonVue v-for="pokemon in pokemonsStore.pokemonsList"
        :pokemon="pokemon"></PokemonVue> 
      </ul>
    </section>
  </main>
</template>

<style scoped>
h2 {
  font-size: 5.3vw;
}

section {
  padding: 3vw;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2vw;
  list-style: none;
}
/* style */
input[type=text] {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid red;
  border-radius: 4px;
}
</style>
