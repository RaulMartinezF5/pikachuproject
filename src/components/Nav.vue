<script setup>
    import ButtonVue  from "./Button.vue";
</script>

<template>
    <h1>Nav</h1>
    <ul>
        <li> <button class="button button1">Green</button></li>
        <li> <button class="button button2">Blue</button></li>
        <li><button class="button button3">Red</button></li>
        <li><button class="button button4">Gray</button></li>
        <li><button class="button button4">Gray</button></li>
        <li><button class="button button5">Black</button></li>
    </ul>
  
</template>

<style scoped>
    ul{
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    

li {
  float: left;
}

    /* styles for button  */
    .button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
}

.button1:hover {
  background-color: #4CAF50;
  color: white;
}

.button2 {
  background-color: white; 
  color: black; 
  border: 2px solid #008CBA;
}

.button2:hover {
  background-color: #008CBA;
  color: white;
}

.button3 {
  background-color: white; 
  color: black; 
  border: 2px solid #f44336;
}

.button3:hover {
  background-color: #f44336;
  color: white;
}

.button4 {
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
}

.button4:hover {background-color: #e7e7e7;}

.button5 {
  background-color: white;
  color: black;
  border: 2px solid #555555;
}

.button5:hover {
  background-color: #555555;
  color: white;
}

</style>