<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white text-xl font-bold">Portfolio</router-link>
      <div class="space-x-4">
        <router-link to="/" class="text-gray-300 hover:text-white">Home</router-link>
        <router-link to="/infrastructure" class="text-gray-300 hover:text-white">Infrastructure</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script> 