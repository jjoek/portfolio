<template>
    <section
        id="home"
        role="banner"
        class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 relative overflow-hidden"
    >
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="floating-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div class="text-center">
                <!-- Profile Image -->
                <div class="mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
                    <div
                        class="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 hover:scale-110 transition-transform duration-300"
                    >
                        <div
                            class="w-full h-full rounded-full bg-gray-200 flex items-center justify-center"
                        >
                            <img
                                src="https://jjoek-cv.s3.eu-central-1.amazonaws.com/profile-avatar.jpg"
                                alt="John Irungu"
                                class="w-full h-full rounded-full"
                            />
                        </div>
                    </div>
                </div>

                <!-- Main Heading -->
                <h1
                    class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up"
                    style="animation-delay: 0.4s"
                >
                    Hi, I'm <span class="gradient-text typing-animation">John Irungu</span>
                </h1>

                <!-- Personal Introduction -->
                <p
                    class="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in-up"
                    style="animation-delay: 0.5s"
                >
                    but online I go by <span class="gradient-text font-semibold">jjoek</span>.
                </p>

                <!-- Subtitle with typewriter effect -->
                <div
                    class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up"
                    style="animation-delay: 0.6s"
                >
                    <span class="typewriter">{{ displayedText }}</span>
                    <span class="cursor">|</span>
                </div>

                <!-- Description -->
                <p
                    class="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
                    style="animation-delay: 0.8s"
                >
                    Versatile DevOps-focused Software Engineer with expertise in backend
                    development, infrastructure automation, and cloud engineering. Passionate about
                    automation, process optimization, and leveraging AI to streamline software
                    delivery.
                </p>

                <!-- CTA Buttons -->
                <div
                    class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
                    style="animation-delay: 1s"
                >
                    <ViewCV />
                    <a href="#contact" class="btn-secondary group">
                        Get In Touch
                        <svg
                            class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>

                <!-- Tech Stack Icons -->
                <div
                    class="flex flex-wrap justify-center items-center gap-6 opacity-70 animate-fade-in-up"
                    style="animation-delay: 1.2s"
                >
                    <div
                        v-for="tech in techStack"
                        :key="tech.name"
                        class="flex items-center space-x-2 tech-badge"
                    >
                        <div
                            class="w-8 h-8 rounded flex items-center justify-center"
                            :class="tech.bgColor"
                        >
                            <span class="text-white text-xs font-bold">{{ tech.short }}</span>
                        </div>
                        <span class="text-sm text-gray-600">{{ tech.name }}</span>
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    class="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { onMounted, ref } from 'vue'
    import ViewCV from './partials/ViewCV.vue'

    const displayedText = ref('')
    const typewriterIndex = ref(0)

    const typewriterTexts = [
        'Senior Backend Engineer',
        'DevOps Specialist',
        'AWS Certified DevOps Professional',
        'Infrastructure Automation Expert',
    ]

    const techStack = [
        { name: 'AWS Certified', short: 'AWS', bgColor: 'bg-red-500' },
        { name: 'Kubernetes', short: 'K8s', bgColor: 'bg-blue-500' },
        { name: 'Laravel', short: 'PHP', bgColor: 'bg-purple-500' },
        { name: 'Node.js', short: 'JS', bgColor: 'bg-green-500' },
    ]

    // Typewriter effect
    const startTypewriter = () => {
        const text = typewriterTexts[typewriterIndex.value]
        let charIndex = 0

        const typeChar = () => {
            if (charIndex < text.length) {
                displayedText.value = text.substring(0, charIndex + 1)
                charIndex++
                setTimeout(typeChar, 100)
            } else {
                setTimeout(() => {
                    const deleteChar = () => {
                        if (charIndex > 0) {
                            displayedText.value = text.substring(0, charIndex - 1)
                            charIndex--
                            setTimeout(deleteChar, 50)
                        } else {
                            typewriterIndex.value =
                                (typewriterIndex.value + 1) % typewriterTexts.length
                            setTimeout(startTypewriter, 500)
                        }
                    }
                    setTimeout(deleteChar, 2000)
                }, 1000)
            }
        }

        typeChar()
    }

    onMounted(() => {
        startTypewriter()
    })
</script>
