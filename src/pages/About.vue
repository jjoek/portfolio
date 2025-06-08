<template>
    <!-- About Section -->
    <section id="about" role="region" aria-label="About Me" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">
                    About Me
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                    Passionate about building scalable systems and automating infrastructure
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left Column - Text Content -->
                <div class="space-y-6 animate-on-scroll">
                    <div>
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                            Professional Journey
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            As a Senior Backend Engineer and DevOps specialist, I bring a unique
                            blend of development expertise and infrastructure automation skills. My
                            journey spans from IT support to leading engineering teams, giving me a
                            comprehensive understanding of the entire technology stack.
                        </p>
                        <p class="text-gray-600 leading-relaxed">
                            Currently pursuing Kubernetes certifications (KCNA, CKA) to deepen my
                            container orchestration skills, I'm passionate about leveraging
                            cutting-edge technologies to solve complex problems and streamline
                            software delivery processes.
                        </p>
                    </div>

                    <div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">What I Do</h4>
                        <ul class="space-y-2">
                            <li
                                v-for="item in whatIDo"
                                :key="item"
                                class="flex items-center text-gray-600 animate-on-scroll"
                            >
                                <svg
                                    class="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Right Column - Stats & Highlights -->
                <div class="space-y-8 animate-on-scroll">
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-2 gap-6">
                        <div v-for="stat in stats" :key="stat.label" class="stat-card">
                            <div class="text-3xl font-bold mb-2" :class="stat.color">
                                {{ stat.value }}
                            </div>
                            <div class="text-gray-600">{{ stat.label }}</div>
                        </div>
                    </div>

                    <!-- Education -->
                    <div
                        class="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                    >
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">Education</h4>
                        <div class="flex items-start">
                            <div
                                class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 mt-1"
                            >
                                <svg
                                    class="w-6 h-6 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div class="font-medium text-gray-900">
                                    Bachelor's Degree in Computer Science
                                </div>
                                <div class="text-sm text-gray-600">
                                    University of Embu (2018-2022)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    const whatIDo = [
        'Design and implement scalable backend architectures',
        'Automate infrastructure using IaC tools (Terraform, CloudFormation)',
        'Build and optimize CI/CD pipelines',
        'Lead engineering teams and mentor developers',
    ]

    const calculateYearsOfExperience = () => {
        const startDate = new Date(2017, 6) // July 2017 (month is 0-based)
        const currentDate = new Date()
        const years = currentDate.getFullYear() - startDate.getFullYear()
        const months = currentDate.getMonth() - startDate.getMonth()
        return months < 0 ? years - 1 : years
    }

    const stats = [
        {
            value: `${calculateYearsOfExperience()}+`,
            label: 'Years Experience',
            color: 'text-blue-600',
        },
        { value: '10+', label: 'Projects Delivered', color: 'text-green-600' },
        { value: '1', label: 'AWS Certifications', color: 'text-purple-600' },
        { value: '20+', label: 'Technologies', color: 'text-orange-600' },
    ]
</script>
