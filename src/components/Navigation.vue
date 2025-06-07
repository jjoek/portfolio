<template>
    <nav
        class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <router-link
                        to="/"
                        class="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
                    >
                        John Irungu
                    </router-link>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <template v-if="$route.path === '/'">
                            <a
                                href="#home"
                                class="nav-link"
                                :class="{ active: activeSection === 'home' }"
                                >Home</a
                            >
                            <a
                                href="#about"
                                class="nav-link"
                                :class="{ active: activeSection === 'about' }"
                                >About</a
                            >
                            <a
                                href="#skills"
                                class="nav-link"
                                :class="{ active: activeSection === 'skills' }"
                                >Skills</a
                            >
                            <a
                                href="#experience"
                                class="nav-link"
                                :class="{ active: activeSection === 'experience' }"
                                >Experience</a
                            >
                            <a
                                href="#contact"
                                class="nav-link"
                                :class="{ active: activeSection === 'contact' }"
                                >Contact</a
                            >
                        </template>
                        <template v-else>
                            <router-link to="/#home" class="nav-link">Home</router-link>
                            <router-link to="/#about" class="nav-link">About</router-link>
                            <router-link to="/#skills" class="nav-link">Skills</router-link>
                            <router-link to="/#experience" class="nav-link">Experience</router-link>
                            <router-link to="/#contact" class="nav-link">Contact</router-link>
                        </template>
                        <router-link
                            to="/infrastructure"
                            class="nav-link"
                            :class="{ active: $route.path === '/infrastructure' }"
                            >Infrastructure</router-link
                        >
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button
                        class="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                        @click="toggleMobileMenu"
                    >
                        <svg
                            class="h-6 w-6 transform transition-transform duration-200"
                            :class="{ 'rotate-90': mobileMenuOpen }"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                v-if="!mobileMenuOpen"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                v-else
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div v-show="mobileMenuOpen" class="md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <template v-if="$route.path === '/'">
                        <a
                            href="#home"
                            class="mobile-nav-link"
                            :class="{ active: activeSection === 'home' }"
                            @click="closeMobileMenu"
                            >Home</a
                        >
                        <a
                            href="#about"
                            class="mobile-nav-link"
                            :class="{ active: activeSection === 'about' }"
                            @click="closeMobileMenu"
                            >About</a
                        >
                        <a
                            href="#skills"
                            class="mobile-nav-link"
                            :class="{ active: activeSection === 'skills' }"
                            @click="closeMobileMenu"
                            >Skills</a
                        >
                        <a
                            href="#experience"
                            class="mobile-nav-link"
                            :class="{ active: activeSection === 'experience' }"
                            @click="closeMobileMenu"
                            >Experience</a
                        >
                        <a
                            href="#contact"
                            class="mobile-nav-link"
                            :class="{ active: activeSection === 'contact' }"
                            @click="closeMobileMenu"
                            >Contact</a
                        >
                    </template>
                    <template v-else>
                        <router-link to="/#home" class="mobile-nav-link" @click="closeMobileMenu"
                            >Home</router-link
                        >
                        <router-link to="/#about" class="mobile-nav-link" @click="closeMobileMenu"
                            >About</router-link
                        >
                        <router-link to="/#skills" class="mobile-nav-link" @click="closeMobileMenu"
                            >Skills</router-link
                        >
                        <router-link
                            to="/#experience"
                            class="mobile-nav-link"
                            @click="closeMobileMenu"
                            >Experience</router-link
                        >
                        <router-link to="/#contact" class="mobile-nav-link" @click="closeMobileMenu"
                            >Contact</router-link
                        >
                    </template>
                    <router-link
                        to="/infrastructure"
                        class="mobile-nav-link"
                        :class="{ active: $route.path === '/infrastructure' }"
                        @click="closeMobileMenu"
                        >Infrastructure</router-link
                    >
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, watch } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const mobileMenuOpen = ref(false)
    const activeSection = ref('home')

    const toggleMobileMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
        mobileMenuOpen.value = false
    }

    const handleScroll = () => {
        if (route.path !== '/') return

        const sections = ['home', 'about', 'skills', 'experience', 'contact']
        const scrollPos = window.scrollY + 100

        sections.forEach(section => {
            const element = document.getElementById(section)
            if (element) {
                const offsetTop = element.offsetTop
                const height = element.offsetHeight

                if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
                    activeSection.value = section
                }
            }
        })
    }

    // Reset active section when route changes
    watch(
        () => route.path,
        newPath => {
            if (newPath === '/') {
                handleScroll()
            }
        }
    )

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial call
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<style scoped>
    .nav-link {
        @apply px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200;
    }

    .nav-link.active {
        @apply text-blue-600;
    }

    .mobile-nav-link {
        @apply block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200;
    }

    .mobile-nav-link.active {
        @apply bg-blue-50 text-blue-600;
    }

    .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
</style>
