<template>
    <section id="skills" role="region" aria-label="Technical Skills" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">
                    Technical Skills
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                    A comprehensive toolkit for modern software development and infrastructure
                    automation
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="(skill, index) in skills"
                    :key="skill.title"
                    class="skill-card animate-on-scroll"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                >
                    <div class="flex items-center mb-4">
                        <div
                            class="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                            :class="skill.iconBg"
                        >
                            <svg
                                class="w-6 h-6"
                                :class="skill.iconColor"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                v-html="skill.icon"
                            ></svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">{{ skill.title }}</h3>
                    </div>
                    <div class="space-y-2">
                        <span
                            v-for="tag in skill.tags"
                            :key="tag.name"
                            class="skill-badge"
                            :class="tag.class"
                        >
                            {{ tag.name }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Learning Path -->
            <div
                class="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg animate-on-scroll"
            >
                <div class="text-center">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Currently Learning</h3>
                    <p class="text-gray-600 mb-6">
                        Expanding my expertise in container orchestration and cloud-native
                        technologies
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <div v-for="cert in learningCerts" :key="cert" class="learning-badge">
                            <span class="text-blue-600 font-semibold">{{ cert }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    const skills = [
        {
            title: 'Infrastructure as Code',
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            icon: '<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />',
            tags: [
                { name: 'Terraform', class: 'bg-purple-100 text-purple-800' },
                { name: 'CloudFormation', class: 'bg-blue-100 text-blue-800' },
                { name: 'Ansible', class: 'bg-red-100 text-red-800' },
            ],
        },
        {
            title: 'CI/CD & DevOps',
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            icon: '<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />',
            tags: [
                { name: 'GitLab CI', class: 'bg-orange-100 text-orange-800' },
                { name: 'GitHub Actions', class: 'bg-gray-100 text-gray-800' },
                { name: 'Bitbucket Pipelines', class: 'bg-blue-100 text-blue-800' },
            ],
        },
        {
            title: 'Programming & Frameworks',
            iconBg: 'bg-indigo-100',
            iconColor: 'text-indigo-600',
            icon: '<path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />',
            tags: [
                { name: 'PHP (Laravel)', class: 'bg-purple-100 text-purple-800' },
                { name: 'Node.js (AdonisJS)', class: 'bg-green-100 text-green-800' },
                { name: 'JavaScript', class: 'bg-yellow-100 text-yellow-800' },
                { name: 'Vue.js', class: 'bg-blue-100 text-blue-800' },
                { name: 'React', class: 'bg-cyan-100 text-cyan-800' },
            ],
        },
        {
            title: 'Cloud Platforms',
            iconBg: 'bg-yellow-100',
            iconColor: 'text-yellow-600',
            icon: '<path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />',
            tags: [
                { name: 'AWS (EC2, RDS, S3, CloudFront)', class: 'bg-orange-100 text-orange-800' },
                { name: 'DigitalOcean', class: 'bg-blue-100 text-blue-800' },
                { name: 'Linode', class: 'bg-green-100 text-green-800' },
            ],
        },
        {
            title: 'Containers & Orchestration',
            iconBg: 'bg-purple-100',
            iconColor: 'text-purple-600',
            icon: '<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />',
            tags: [
                { name: 'Docker', class: 'bg-blue-100 text-blue-800' },
                { name: 'Kubernetes', class: 'bg-blue-100 text-blue-800' },
                { name: 'Helm', class: 'bg-purple-100 text-purple-800' },
            ],
        },
        {
            title: 'Database & Monitoring',
            iconBg: 'bg-red-100',
            iconColor: 'text-red-600',
            icon: '<path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" /><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" /><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />',
            tags: [
                { name: 'MySQL / MariaDB', class: 'bg-blue-100 text-blue-800' },
                { name: 'MongoDB', class: 'bg-green-100 text-green-800' },
                { name: 'Redis', class: 'bg-pink-100 text-pink-800' },
                { name: 'CloudWatch', class: 'bg-orange-100 text-orange-800' },
                { name: 'Grafana (exploring)', class: 'bg-gray-100 text-gray-800' },
            ],
        },
    ]

    const learningCerts = [
        'AWS Solutions Architect Certification',
        'Certified Kubernetes Administrator (CKA)',
        'Kubestronaut Path (CNCF)',
    ]
</script>
