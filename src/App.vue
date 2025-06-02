<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
}
</style>