<template>
    <section id="contact" role="region" aria-label="Contact Information" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">
                    Get In Touch
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                    Ready to discuss your next project or explore collaboration opportunities? Let's
                    connect!
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-12">
                <!-- Contact Information -->
                <div class="space-y-8 animate-on-scroll">
                    <div>
                        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
                        <p class="text-gray-600 mb-8 leading-relaxed">
                            I'm always interested in discussing new opportunities, innovative
                            projects, and ways to leverage technology for business growth. Whether
                            you're looking for a senior backend engineer, DevOps expertise, or
                            technical leadership, I'd love to hear from you.
                        </p>
                    </div>

                    <!-- Contact Methods -->
                    <div class="space-y-6">
                        <div
                            v-for="contact in contactMethods"
                            :key="contact.type"
                            class="contact-item"
                        >
                            <div
                                class="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                                :class="contact.bgColor"
                            >
                                <svg
                                    class="w-6 h-6"
                                    :class="contact.iconColor"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    v-html="contact.icon"
                                ></svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-900">
                                    {{ contact.type }}
                                </h4>
                                <a
                                    :href="contact.href"
                                    :target="contact.external ? '_blank' : ''"
                                    :rel="contact.external ? 'noopener noreferrer' : ''"
                                    class="text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    {{ contact.display }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Certifications & Achievements -->
                <div class="space-y-8 animate-on-scroll">
                    <div class="certification-card">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">
                            Current Certifications
                        </h4>
                        <div class="space-y-4">
                            <div
                                v-for="cert in currentCertifications"
                                :key="cert.name"
                                class="flex items-center certification-item"
                            >
                                <div
                                    class="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                                    :class="cert.bgColor"
                                >
                                    <svg
                                        class="w-6 h-6 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="font-medium text-gray-900">{{ cert.name }}</div>
                                    <div class="text-sm text-gray-600">{{ cert.issuer }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="certification-card">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">Currently Pursuing</h4>
                        <div class="space-y-3">
                            <div
                                v-for="pursuit in currentPursuits"
                                :key="pursuit"
                                class="flex items-center"
                            >
                                <div
                                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3"
                                >
                                    <svg
                                        class="w-4 h-4 text-blue-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span class="text-gray-700">{{ pursuit }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    const contactMethods = [
        {
            type: 'Email',
            href: 'mailto:jjohnirungu@gmail.com',
            display: 'jjohnirungu@gmail.com',
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            external: false,
            icon: '<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />',
        },
        {
            type: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jjoek/',
            display: 'linkedin.com/in/jjoek',
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            external: true,
            icon: '<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />',
        },
        {
            type: 'Location',
            href: '#',
            display: 'Nairobi County, Kenya',
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            external: false,
            icon: '<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />',
        },
    ]

    const currentCertifications = [
        {
            name: 'AWS DevOps Engineer - Professional',
            issuer: 'Amazon Web Services',
            bgColor: 'bg-orange-500',
        },
        {
            name: 'Agile Software Development',
            issuer: 'Certified Professional',
            bgColor: 'bg-blue-500',
        },
    ]

    const currentPursuits = ['KCNA Certification', 'CKA Certification', 'Kubestranaut Path']
</script>
<style>
       /* Contact */
       .contact-item {
        @apply flex items-center hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200;
    }

    /* Social links */
    .social-link {
        @apply w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110;
    }
</style>