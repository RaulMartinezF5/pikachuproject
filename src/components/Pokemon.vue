
<template>
<li>   
  <div class="card">
    <h2>{{pokemon.name}}</h2>
  <span>
        <div v-if="pokemon.color === '--grass'">
          <h3 style="background-color: var(--grass);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--poison'">
          <h3 style="background-color: var(--poison);">{{pokemon.type}}</h3>
        </div>          
        <div v-else-if="pokemon.color === '--fire'">
          <h3 style="background-color: var(--fire);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--water'">
          <h3 style="background-color: var(--water);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--normal'">
          <h3 style="background-color: var(--normal);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color=== '--fighting'">
          <h3 style="background-color: var(--fighting);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--electric'">
          <h3 style="background-color: var(--electric);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--ground'">
          <h3 style="background-color: var(--ground);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--rock'">
          <h3 style="background-color: var(--rock);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--psychic'">
          <h3 style="background-color: var(--psychic);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--ice'">
          <h3 style="background-color: var(--ice);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--bug'">
          <h3 style="background-color: var(--bug);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--ghost'">
          <h3 style="background-color: var(--ghost);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--dragon'">
          <h3 style="background-color: var(--dragon);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--fairy'">
          <h3 style="background-color: var(--fairy);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--dark'">
          <h3 style="background-color: var(--dark);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--steel'">
          <h3 style="background-color: var(--steel);">{{pokemon.type}}</h3>
        </div>
        <div v-else-if="pokemon.color === '--flying'">
          <h3 style="background-color: var(--flying);">{{pokemon.type}}</h3>
        </div>
        <div v-else>
          <h3 style="background-color: white;">{{pokemon.type}}</h3>
        </div>
      </span>
      <span>
        <div v-if="pokemon.color2 === '--grass'">
          <h3 style="background-color: var(--grass);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--poison'">
          <h3 style="background-color: var(--poison);">{{pokemon.type2}}</h3>
        </div>          
        <div v-else-if="pokemon.color2 === '--fire'">
          <h3 style="background-color: var(--fire);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--water'">
          <h3 style="background-color: var(--water);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--normal'">
          <h3 style="background-color: var(--normal);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2=== '--fighting'">
          <h3 style="background-color: var(--fighting);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--electric'">
          <h3 style="background-color: var(--electric);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--ground'">
          <h3 style="background-color: var(--ground);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--rock'">
          <h3 style="background-color: var(--rock);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--psychic'">
          <h3 style="background-color: var(--psychic);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--ice'">
          <h3 style="background-color: var(--ice);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--bug'">
          <h3 style="background-color: var(--bug);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--ghost'">
          <h3 style="background-color: var(--ghost);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--dragon'">
          <h3 style="background-color: var(--dragon);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--fairy'">
          <h3 style="background-color: var(--fairy);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--dark'">
          <h3 style="background-color: var(--dark);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--steel'">
          <h3 style="background-color: var(--steel);">{{pokemon.type2}}</h3>
        </div>
        <div v-else-if="pokemon.color2 === '--flying'">
          <h3 style="background-color: var(--flying);">{{pokemon.type2}}</h3>
        </div>
        <div v-else>
          <h3 style="background-color: white;">{{pokemon.type2}}</h3>
        </div>
      </span>

      <img v-bind:src=pokemon.img alt="">
      <p>{{pokemon.id}}</p>      
    </div>
</li>
</template>

<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>

  .card{
    width: 70%;
    border-style: solid;
    border-color: var(--normal);
    border-width: .3vw;
    font-size: 1vw ;
    text-align: center;
  }
  .card img{
    width: 90% ;
  }
  h2{
    font-size: 2em;
    display: flex;
    justify-content: left;
    padding: 0.2vw;
    
  }
  h3{
    font-size: 1.5em;
    display: flex;
    justify-content: right;
    padding: 0.2vw;
  }
  h4{
    font-size: 1.5em;
    display: flex;
    justify-content: right;
    padding: 0.2vw;
  }
  p{
    font-size: 3vw;
    background-color: grey  ;
    color: white;
  }
</style> 