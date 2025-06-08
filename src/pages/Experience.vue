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
                    v-for="(job, index) in displayedExperience"
                    :key="job.company + job.period"
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

            <!-- View More Button -->
            <div v-if="hasMoreExperience" class="mt-12 text-center">
                <button
                    class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 animate-on-scroll"
                    @click="toggleShowMore"
                >
                    <span>{{ showAllExperience ? 'Show Less' : 'View More' }}</span>
                    <svg
                        class="ml-2 -mr-1 h-5 w-5"
                        :class="{ 'rotate-180': showAllExperience }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
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
    import { ref, computed } from 'vue'

    const showAllExperience = ref(false)
    const initialDisplayCount = 3

    const experience = [
        {
            title: 'Senior Backend Software Engineer & DevOps Contributor',
            company: 'Workpay',
            location: 'Nairobi, Kenya',
            period: 'Jul 2023 – Present',
            borderColor: 'border-l-4 border-blue-500',
            companyColor: 'text-blue-600',
            dateStyle: 'text-blue-600 bg-blue-50',
            achievements: [
                "Led backend development for Workpay's Performance Management System using Laravel",
                'Core contributor to the Payroll Squad — building scalable APIs for multi-country payroll automation.',
                'Introduced GitLab CI pipelines and optimized queued job processing with Laravel Horizon.',
                'Collaborated with DevOps to streamline infrastructure using Docker and Terraform.',
                'Promoted package-driven development across internal Laravel codebases.',
            ],
        },
        {
            title: 'Backend Software Engineer',
            company: 'KamaPay',
            location: 'Nairobi, Kenya',
            period: 'May 2023 – Aug 2023',
            borderColor: 'border-l-4 border-green-500',
            companyColor: 'text-green-600',
            dateStyle: 'text-green-600 bg-green-50',
            achievements: [
                'Redesigned backend GraphQL APIs for a secure cross-network wallet platform.',
                'Implemented transactional flows and security measures in Laravel and GraphQL.',
                'Worked closely with the DevOps engineer to deploy on a secure AWS architecture.',
            ],
        },
        {
            title: 'Lead Backend Engineer & Acting DevOps Engineer',
            company: 'ZUMI',
            location: 'Nairobi, Kenya',
            period: 'Sep 2022 – Mar 2023',
            borderColor: 'border-l-4 border-purple-500',
            companyColor: 'text-purple-600',
            dateStyle: 'text-purple-600 bg-purple-50',
            achievements: [
                'Led a team of 7 engineers building a B2B e-commerce platform using Node.js (AdonisJS).',
                'Introduced AdonisJS into production and managed architectural direction.',
                'Managed CI/CD workflows, infrastructure automation (CloudFormation, Ansible), and AWS operations.',
                'Fostered team growth through mentorship, 1:1s, and engineering representation in leadership.',
            ],
        },
        {
            title: 'Senior Backend Engineer',
            company: 'ZUMI',
            location: 'Nairobi, Kenya',
            period: 'May 2022 – Sep 2022',
            borderColor: 'border-l-4 border-purple-300',
            companyColor: 'text-purple-500',
            dateStyle: 'text-purple-500 bg-purple-50',
            achievements: [
                'Developed backend services using AdonisJS, deployed to AWS and Heroku.',
                'Integrated backend with Odoo ERP and M-Pesa payment systems.',
                'Implemented GitHub Actions pipelines and versioned infrastructure configurations.',
            ],
        },
        {
            title: 'Lead Software Consultant',
            company: 'Disruptive Technologies',
            location: 'Nairobi, Kenya',
            period: 'Jun 2021 – Jul 2022',
            borderColor: 'border-l-4 border-yellow-500',
            companyColor: 'text-yellow-600',
            dateStyle: 'text-yellow-600 bg-yellow-50',
            achievements: [
                'Rebuilt and stabilized a sales automation platform used by Kyosk Limited.',
                'Used Laravel + TailwindCSS to redesign dashboards, reporting, and workflows.',
                'Implemented map-based tracking and analytics for sales agents and territory performance.',
                'Earned ongoing trust from leadership as a go-to consultant for backend strategy.',
            ],
        },
        {
            title: 'Software Engineer',
            company: 'I-We Limited',
            location: 'Remote (Edinburgh HQ)',
            period: 'Sep 2021 – Apr 2022',
            borderColor: 'border-l-4 border-green-400',
            companyColor: 'text-green-500',
            dateStyle: 'text-green-500 bg-green-50',
            achievements: [
                'Built backend services for a COVID-19 tracker and crypto wallet product.',
                'Worked with Docker, early Kubernetes setup, and GraphQL APIs in a modular backend structure.',
                'Explored CI/CD automation and Helm as part of a distributed team.',
            ],
        },
        {
            title: 'Software Engineer',
            company: 'Collabmed Software Solutions',
            location: 'Nairobi, Kenya',
            period: 'Sep 2019 – Aug 2021',
            borderColor: 'border-l-4 border-blue-400',
            companyColor: 'text-blue-500',
            dateStyle: 'text-blue-500 bg-blue-50',
            achievements: [
                'Built and maintained healthcare applications using Laravel and Vue.js.',
                'Automated deployment and configuration on VPS hosts (Linode, DigitalOcean).',
                'Created custom tools for reporting, finance, and patient management workflows.',
            ],
        },
        {
            title: 'Junior Software Engineer',
            company: 'Collabmed Software Solutions',
            location: 'Nairobi, Kenya',
            period: 'Jul 2018 – Sep 2019',
            borderColor: 'border-l-4 border-blue-300',
            companyColor: 'text-blue-400',
            dateStyle: 'text-blue-400 bg-blue-50',
            achievements: [
                'Assisted in backend and frontend features for internal health and finance systems.',
                'Helped implement deployment automation scripts and system setup consistency.',
            ],
        },
        {
            title: 'IT Support Engineer',
            company: 'Collabmed Software Solutions',
            location: 'Nairobi, Kenya',
            period: 'Jul 2017 – Jul 2018',
            borderColor: 'border-l-4 border-gray-400',
            companyColor: 'text-gray-600',
            dateStyle: 'text-gray-600 bg-gray-50',
            achievements: [
                'Configured local servers and supported developer systems.',
                'Deployed app updates and performed diagnostics on production environments.',
            ],
        },
    ]

    const displayedExperience = computed(() => {
        return showAllExperience.value ? experience : experience.slice(0, initialDisplayCount)
    })

    const hasMoreExperience = computed(() => {
        return experience.length > initialDisplayCount
    })

    const toggleShowMore = () => {
        showAllExperience.value = !showAllExperience.value
    }
</script>

<style scoped>
    .experience-card {
        @apply bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200;
    }

    .btn-primary {
        @apply inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200;
    }
</style>
