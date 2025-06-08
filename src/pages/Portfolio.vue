<template>
    <main id="app" class="min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <Home />

        <!-- About Section -->
        <About />

        <!-- Skills Section -->
        <Skills />

        <!-- Experience Section -->
        <Experience />

        <!-- Contact Section -->
        <Contact />
    </main>
</template>

<script setup>
    import About from './About.vue'
    import Skills from './Skills.vue'
    import Experience from './Experience.vue'
    import Contact from './Contact.vue'
    import Home from './Home.vue'
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
        color: #1f2937;
    }

    #app {
        min-height: 100vh;
    }

    /* Gradient text */
    .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    /* Animations */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
    }

    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }

    .animate-on-scroll.animate-fade-in-up {
        opacity: 1;
        transform: translateY(0);
    }

    /* Typewriter effect */
    .typewriter {
        border-right: 2px solid transparent;
    }

    .cursor {
        animation: pulse 1s infinite;
        color: #667eea;
    }

    /* Floating shapes */
    .floating-shapes {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
    }

    .shape {
        position: absolute;
        border-radius: 50%;
        background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.1) 0%,
            rgba(118, 75, 162, 0.1) 100%
        );
        animation: float 6s ease-in-out infinite;
    }

    .shape-1 {
        width: 120px;
        height: 120px;
        top: 20%;
        left: 10%;
        animation-delay: 0s;
    }

    .shape-2 {
        width: 80px;
        height: 80px;
        top: 60%;
        right: 15%;
        animation-delay: 2s;
    }

    .shape-3 {
        width: 100px;
        height: 100px;
        top: 30%;
        right: 30%;
        animation-delay: 4s;
    }

    /* Buttons */
    .btn-primary {
        @apply inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200;
    }

    .btn-secondary {
        @apply inline-flex items-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-lg text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200;
    }

    /* Cards */
    .stat-card {
        @apply text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105;
    }

    .skill-card {
        @apply bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2;
    }

    .experience-card {
        @apply bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105;
    }

    .certification-card {
        @apply bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300;
    }

    .certification-item {
        @apply hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200;
    }

    /* Badges */
    .skill-badge {
        @apply inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 hover:scale-105 transition-transform duration-200;
    }

    .tech-badge {
        @apply hover:scale-110 transition-all duration-200 cursor-pointer;
    }

    .learning-badge {
        @apply bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .shape {
            display: none;
        }

        .btn-primary,
        .btn-secondary {
            @apply w-full justify-center;
        }
    }

    .dark-theme {
        background-color: #1a1a1a;
        color: #ffffff;
    }
</style>
