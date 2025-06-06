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
}

/* Global styles */
:root {
  color-scheme: light;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
</style>