<script setup>
    import ButtonVue  from "./Button.vue";
</script>

<template>
    <h1>Nav</h1>
    <ul>
        <li><ButtonVue></ButtonVue></li>
        <li><ButtonVue></ButtonVue></li>
        <li><ButtonVue></ButtonVue></li>
        <li><ButtonVue></ButtonVue></li>
        <li><ButtonVue></ButtonVue></li>
    </ul>
   
    
</template>

<style scoped>
    ul{
        display: flex;
        justify-content: space-around;
    }
    

</style>