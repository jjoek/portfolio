<template>
    <div class="min-h-screen bg-gray-50">
        <Navigation />
        <router-view></router-view>
    </div>
</template>

<script setup>
    import Navigation from './components/Navigation.vue'
</script>

<style>
    @import './styles/main.css';
</style>
