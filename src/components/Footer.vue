<template>
     <!-- Footer -->
     <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Brand Section -->
                <div class="space-y-4">
                    <h3 class="text-2xl font-bold gradient-text">John Irungu</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Senior Backend Engineer & DevOps Specialist passionate about building
                        scalable systems and automating infrastructure.
                    </p>
                    <div class="flex space-x-4">
                        <a
                            v-for="social in socialLinks"
                            :key="social.name"
                            :href="social.href"
                            :target="social.external ? '_blank' : ''"
                            :rel="social.external ? 'noopener noreferrer' : ''"
                            class="social-link"
                            :class="social.hoverColor"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                v-html="social.icon"
                            ></svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="space-y-4">
                    <h4 class="text-lg font-semibold">Quick Links</h4>
                    <ul class="space-y-2">
                        <li v-for="link in quickLinks" :key="link.name">
                            <a
                                :href="link.href"
                                class="text-gray-400 hover:text-white transition-colors"
                                >{{ link.name }}</a
                            >
                        </li>
                    </ul>
                </div>

                <!-- Certifications -->
                <div class="space-y-4">
                    <h4 class="text-lg font-semibold">Certifications</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li
                            v-for="cert in footerCertifications"
                            :key="cert.name"
                            class="flex items-center"
                        >
                            <svg
                                class="w-4 h-4 mr-2"
                                :class="cert.iconColor"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ cert.name }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400">
                    © 2024 John Irungu. Built with Vue.js and Tailwind CSS. All rights
                    reserved.
                </p>
            </div>
        </div>
    </footer>
</template>
<script setup>
    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jjoek/',
            external: true,
            hoverColor: 'hover:bg-blue-600',
            icon: '<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />',
        },
        {
            name: 'Email',
            href: 'mailto:jjohnirungu@gmail.com',
            external: false,
            hoverColor: 'hover:bg-green-600',
            icon: '<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />',
        },
    ]

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    const footerCertifications = [
        { name: 'AWS DevOps Engineer - Professional', iconColor: 'text-orange-500' },
        { name: 'Agile Software Development', iconColor: 'text-blue-500' },
        { name: 'KCNA & CKA (In Progress)', iconColor: 'text-blue-500' },
    ]
</script>