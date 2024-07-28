<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import { onBeforeMount } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  onBeforeMount(() => {
    store.dispatch('fetchUser')
  })

  const user = store.state.user

</script>

<template>

  <main>
    <ul class="nav" v-if="$store.state.user">
      <li><RouterLink to="/" class="l active">Home</RouterLink></li>
      <li><RouterLink to="/about" class="l">About</RouterLink></li>
      <!--<li><a href="#contact">Contact</a></li>-->
      <li style="float:right;"><button class="l" style="background: red;" @click="$store.dispatch('logout')" >Logout</button></li>
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
