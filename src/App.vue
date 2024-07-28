<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <main>
    <ul class="nav">
      <li><RouterLink to="/" class="l active">Home</RouterLink></li>
      <li><RouterLink to="/about" class="l">About</RouterLink></li>
      <!--<li><a href="#contact">Contact</a></li>
      <li style="float:right"><a href="#about">About</a></li>-->
    </ul>
  </main>
  
  <RouterView />
</template>

<style scoped>

  .nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    width: 100%;
  }

  .nav li {
    float: left;
    border-right:1px solid #bbb;
  }

  .nav li:last-child {
    border-right: none;
  }

  .nav li .l {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li .l:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #04AA6D;
  }
</style>
