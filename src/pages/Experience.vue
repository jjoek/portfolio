<template>
    <section id="experience" role="region" aria-label="Work Experience" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">
                    Work Experience
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                    A journey through innovative companies and challenging projects
                </p>
            </div>

            <div class="space-y-12">
                <div
                    v-for="(job, index) in experience"
                    :key="job.company"
                    class="experience-card animate-on-scroll"
                    :class="job.borderColor"
                    :style="{ animationDelay: `${index * 0.2}s` }"
                >
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">{{ job.title }}</h3>
                            <h4 class="text-lg font-semibold" :class="job.companyColor">
                                {{ job.company }} - {{ job.location }}
                            </h4>
                        </div>
                        <span
                            class="text-sm font-semibold px-3 py-1 rounded-full"
                            :class="job.dateStyle"
                            >{{ job.period }}</span
                        >
                    </div>
                    <ul class="text-gray-600 space-y-2">
                        <li
                            v-for="achievement in job.achievements"
                            :key="achievement"
                            class="flex items-start"
                        >
                            <svg
                                class="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            {{ achievement }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="mt-16 text-center animate-on-scroll">
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h3>
                    <p class="text-gray-600 mb-6">
                        Let's discuss how I can help your team build scalable, reliable systems
                    </p>
                    <a href="#contact" class="btn-primary"> Start a Conversation </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    const experience = [
        {
            title: 'Senior Backend Software Engineer / Junior DevOps Engineer',
            company: 'Workpay',
            location: 'Nairobi, Kenya',
            period: 'July 2023 - Current',
            borderColor: 'border-l-4 border-blue-500',
            companyColor: 'text-blue-600',
            dateStyle: 'text-blue-600 bg-blue-50',
            achievements: [
                'Senior Backend Engineer with focus on automation and DevOps',
                'Creating and supporting applications in Laravel and NodeJS',
                'Expertise in automation tools and containerization technologies',
            ],
        },
        {
            title: 'Backend Software Engineer',
            company: 'KamaPay',
            location: '',
            period: 'May 2023 - August 2023',
            borderColor: 'border-l-4 border-green-500',
            companyColor: 'text-green-600',
            dateStyle: 'text-green-600 bg-green-50',
            achievements: [
                'Developed secure cross-network money wallet for African countries',
                'Implemented secure GraphQL APIs for mobile and third-party integration',
            ],
        },
        {
            title: 'Backend Software Engineer & Team Lead',
            company: 'ZUMI',
            location: 'Nairobi, Kenya',
            period: 'Sept 2022 - March 2023',
            borderColor: 'border-l-4 border-purple-500',
            companyColor: 'text-purple-600',
            dateStyle: 'text-purple-600 bg-purple-50',
            achievements: [
                'Led engineering team delivering scalable AWS infrastructure',
                'Spearheaded infrastructure automation using CloudFormation and Ansible',
                'Designed CI/CD pipelines and promoted DevOps best practices',
            ],
        },
    ]
</script>
