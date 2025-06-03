<template>
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200">
            John Irungu
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">Home</router-link>
            <router-link to="/infrastructure" class="nav-link" :class="{ 'active': $route.path === '/infrastructure' }">Infrastructure</router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
          >
            <svg class="h-6 w-6 transform transition-transform duration-200" :class="{ 'rotate-90': mobileMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <router-link to="/" @click="closeMobileMenu" class="mobile-nav-link">Home</router-link>
            <router-link to="/infrastructure" @click="closeMobileMenu" class="mobile-nav-link">Infrastructure</router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative;
}

.nav-link.active {
  @apply text-blue-600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background: #667eea;
  border-radius: 2px;
}

.mobile-nav-link {
  @apply text-gray-600 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200;
}

.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style> 