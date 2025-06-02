<template>
    <div id="app" class="min-h-screen bg-gray-50">
      <!-- Navigation -->
      <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
              <a href="#home" class="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200">
                John Irungu
              </a>
            </div>
    
            <!-- Desktop Navigation -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-8">
                <a href="#home" class="nav-link" :class="{ 'active': activeSection === 'home' }">Home</a>
                <a href="#about" class="nav-link" :class="{ 'active': activeSection === 'about' }">About</a>
                <a href="#skills" class="nav-link" :class="{ 'active': activeSection === 'skills' }">Skills</a>
                <a href="#experience" class="nav-link" :class="{ 'active': activeSection === 'experience' }">Experience</a>
                <a href="#contact" class="nav-link" :class="{ 'active': activeSection === 'contact' }">Contact</a>
                <a href="/infrastructure" class="nav-link" :class="{ 'active': activeSection === 'Infrastructure' }">Infrastructure</a>
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
                <a href="#home" @click="closeMobileMenu" class="mobile-nav-link">Home</a>
                <a href="#about" @click="closeMobileMenu" class="mobile-nav-link">About</a>
                <a href="#skills" @click="closeMobileMenu" class="mobile-nav-link">Skills</a>
                <a href="#experience" @click="closeMobileMenu" class="mobile-nav-link">Experience</a>
                <a href="#contact" @click="closeMobileMenu" class="mobile-nav-link">Contact</a>
              </div>
            </div>
          </transition>
        </div>
      </nav>
    
      <!-- Hero Section -->
      <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 relative overflow-hidden">
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
              <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 hover:scale-110 transition-transform duration-300">
                <div class="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <img src="https://media.licdn.com/dms/image/v2/C4D03AQGxi3fFNgOE9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657398955790?e=1754524800&v=beta&t=xObI29KRcNu4g9HqZyaT6TxIZdJRRH3moPWYl-JFJlE" alt="John Irungu" class="w-full h-full rounded-full">
                  <!-- <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg> -->
                </div>
              </div>
            </div>
    
            <!-- Main Heading -->
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up" style="animation-delay: 0.4s">
              Hi, I'm <span class="gradient-text typing-animation">John Irungu</span>
            </h1>
    
            <!-- Subtitle with typewriter effect -->
            <div class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.6s">
              <span class="typewriter">{{ displayedText }}</span>
              <span class="cursor">|</span>
            </div>
    
            <!-- Description -->
            <p class="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.8s">
              Versatile DevOps-focused Software Engineer with expertise in backend development, 
              infrastructure automation, and cloud engineering. Passionate about automation, 
              process optimization, and leveraging AI to streamline software delivery.
            </p>
    
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style="animation-delay: 1s">
              <a href="#contact" class="btn-primary group">
                Get In Touch
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#experience" class="btn-secondary group">
                View My Work
                <svg class="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
    
            <!-- Tech Stack Icons -->
            <div class="flex flex-wrap justify-center items-center gap-6 opacity-70 animate-fade-in-up" style="animation-delay: 1.2s">
              <div v-for="tech in techStack" :key="tech.name" class="flex items-center space-x-2 tech-badge">
                <div class="w-8 h-8 rounded flex items-center justify-center" :class="tech.bgColor">
                  <span class="text-white text-xs font-bold">{{ tech.short }}</span>
                </div>
                <span class="text-sm text-gray-600">{{ tech.name }}</span>
              </div>
            </div>
          </div>
    
          <!-- Scroll Indicator -->
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    
      <!-- About Section -->
      <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">About Me</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Passionate about building scalable systems and automating infrastructure
            </p>
          </div>
    
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Left Column - Text Content -->
            <div class="space-y-6 animate-on-scroll">
              <div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-4">Professional Journey</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  As a Senior Backend Engineer and DevOps specialist, I bring a unique blend of development 
                  expertise and infrastructure automation skills. My journey spans from IT support to leading 
                  engineering teams, giving me a comprehensive understanding of the entire technology stack.
                </p>
                <p class="text-gray-600 leading-relaxed">
                  Currently pursuing Kubernetes certifications (KCNA, CKA) to deepen my container orchestration 
                  skills, I'm passionate about leveraging cutting-edge technologies to solve complex problems 
                  and streamline software delivery processes.
                </p>
              </div>
    
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3">What I Do</h4>
                <ul class="space-y-2">
                  <li v-for="item in whatIDo" :key="item" class="flex items-center text-gray-600 animate-on-scroll">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
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
                  <div class="text-3xl font-bold mb-2" :class="stat.color">{{ stat.value }}</div>
                  <div class="text-gray-600">{{ stat.label }}</div>
                </div>
              </div>
    
              <!-- Education -->
              <div class="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">Education</h4>
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">Bachelor's Degree in Computer Science</div>
                    <div class="text-sm text-gray-600">University of Embu (2018-2022)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Skills Section -->
      <section id="skills" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">Technical Skills</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              A comprehensive toolkit for modern software development and infrastructure automation
            </p>
          </div>
    
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(skill, index) in skills" :key="skill.title" class="skill-card animate-on-scroll" :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4" :class="skill.iconBg">
                  <svg class="w-6 h-6" :class="skill.iconColor" fill="currentColor" viewBox="0 0 20 20" v-html="skill.icon">
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">{{ skill.title }}</h3>
              </div>
              <div class="space-y-2">
                <span v-for="tag in skill.tags" :key="tag.name" class="skill-badge" :class="tag.class">
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </div>
    
          <!-- Learning Path -->
          <div class="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg animate-on-scroll">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Currently Learning</h3>
              <p class="text-gray-600 mb-6">Expanding my expertise in container orchestration and cloud-native technologies</p>
              <div class="flex flex-wrap justify-center gap-4">
                <div v-for="cert in learningCerts" :key="cert" class="learning-badge">
                  <span class="text-blue-600 font-semibold">{{ cert }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Experience Section -->
      <section id="experience" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">Work Experience</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              A journey through innovative companies and challenging projects
            </p>
          </div>
    
          <div class="space-y-12">
            <div v-for="(job, index) in experience" :key="job.company" class="experience-card animate-on-scroll" :class="job.borderColor" :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900">{{ job.title }}</h3>
                  <h4 class="text-lg font-semibold" :class="job.companyColor">{{ job.company }} - {{ job.location }}</h4>
                </div>
                <span class="text-sm font-semibold px-3 py-1 rounded-full" :class="job.dateStyle">{{ job.period }}</span>
              </div>
              <ul class="text-gray-600 space-y-2">
                <li v-for="achievement in job.achievements" :key="achievement" class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
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
              <p class="text-gray-600 mb-6">Let's discuss how I can help your team build scalable, reliable systems</p>
              <a href="#contact" class="btn-primary">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Contact Section -->
      <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">Get In Touch</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Ready to discuss your next project or explore collaboration opportunities? Let's connect!
            </p>
          </div>
    
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Contact Information -->
            <div class="space-y-8 animate-on-scroll">
              <div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
                <p class="text-gray-600 mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to leverage technology for business growth. Whether you're looking 
                  for a senior backend engineer, DevOps expertise, or technical leadership, 
                  I'd love to hear from you.
                </p>
              </div>
    
              <!-- Contact Methods -->
              <div class="space-y-6">
                <div v-for="contact in contactMethods" :key="contact.type" class="contact-item">
                  <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4" :class="contact.bgColor">
                    <svg class="w-6 h-6" :class="contact.iconColor" fill="currentColor" viewBox="0 0 20 20" v-html="contact.icon">
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900">{{ contact.type }}</h4>
                    <a :href="contact.href" :target="contact.external ? '_blank' : ''" :rel="contact.external ? 'noopener noreferrer' : ''" class="text-blue-600 hover:text-blue-700 transition-colors">
                      {{ contact.display }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
    
            <!-- Certifications & Achievements -->
            <div class="space-y-8 animate-on-scroll">
              <div class="certification-card">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">Current Certifications</h4>
                <div class="space-y-4">
                  <div v-for="cert in currentCertifications" :key="cert.name" class="flex items-center certification-item">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3" :class="cert.bgColor">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
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
                  <div v-for="pursuit in currentPursuits" :key="pursuit" class="flex items-center">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
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
                <a v-for="social in socialLinks" :key="social.name" :href="social.href" :target="social.external ? '_blank' : ''" :rel="social.external ? 'noopener noreferrer' : ''" class="social-link" :class="social.hoverColor">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" v-html="social.icon">
                  </svg>
                </a>
              </div>
            </div>
    
            <!-- Quick Links -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Quick Links</h4>
              <ul class="space-y-2">
                <li v-for="link in quickLinks" :key="link.name">
                  <a :href="link.href" class="text-gray-400 hover:text-white transition-colors">{{ link.name }}</a>
                </li>
              </ul>
            </div>
    
            <!-- Certifications -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold">Certifications</h4>
              <ul class="space-y-2 text-gray-400">
                <li v-for="cert in footerCertifications" :key="cert.name" class="flex items-center">
                  <svg class="w-4 h-4 mr-2" :class="cert.iconColor" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ cert.name }}
                </li>
              </ul>
            </div>
          </div>
    
          <div class="border-t border-gray-800 mt-8 pt-8 text-center">
            <p class="text-gray-400">
              © 2024 John Irungu. Built with Vue.js and Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </template>
    
    <script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    
    const mobileMenuOpen = ref(false)
    const activeSection = ref('home')
    const displayedText = ref('')
    const typewriterIndex = ref(0)
    
    const typewriterTexts = [
      'Senior Backend Engineer',
      'DevOps Specialist', 
      'AWS Certified DevOps Professional',
      'Infrastructure Automation Expert'
    ]
    
    const techStack = [
      { name: 'AWS Certified', short: 'AWS', bgColor: 'bg-red-500' },
      { name: 'Kubernetes', short: 'K8s', bgColor: 'bg-blue-500' },
      { name: 'Laravel', short: 'PHP', bgColor: 'bg-purple-500' },
      { name: 'Node.js', short: 'JS', bgColor: 'bg-green-500' }
    ]
    
    const whatIDo = [
      'Design and implement scalable backend architectures',
      'Automate infrastructure using IaC tools (Terraform, CloudFormation)',
      'Build and optimize CI/CD pipelines',
      'Lead engineering teams and mentor developers'
    ]
    
    const stats = [
      { value: '6+', label: 'Years Experience', color: 'text-blue-600' },
      { value: '50+', label: 'Projects Delivered', color: 'text-green-600' },
      { value: '3', label: 'AWS Certifications', color: 'text-purple-600' },
      { value: '10+', label: 'Technologies', color: 'text-orange-600' }
    ]
    
    const skills = [
      {
        title: 'Infrastructure as Code',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        icon: '<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />',
        tags: [
          { name: 'AWS CloudFormation', class: 'bg-blue-100 text-blue-800' },
          { name: 'Terraform', class: 'bg-purple-100 text-purple-800' },
          { name: 'Ansible', class: 'bg-red-100 text-red-800' }
        ]
      },
      {
        title: 'CI/CD',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        icon: '<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />',
        tags: [
          { name: 'GitHub Actions', class: 'bg-gray-100 text-gray-800' },
          { name: 'GitLab CI', class: 'bg-orange-100 text-orange-800' },
          { name: 'Bitbucket Pipelines', class: 'bg-blue-100 text-blue-800' }
        ]
      },
      {
        title: 'Programming',
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
        icon: '<path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />',
        tags: [
          { name: 'PHP (Laravel)', class: 'bg-purple-100 text-purple-800' },
          { name: 'Node.js', class: 'bg-green-100 text-green-800' },
          { name: 'JavaScript', class: 'bg-yellow-100 text-yellow-800' },
          { name: 'Vue.js', class: 'bg-blue-100 text-blue-800' },
          { name: 'React', class: 'bg-cyan-100 text-cyan-800' }
        ]
      },
      {
        title: 'Cloud Platforms',
        iconBg: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        icon: '<path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />',
        tags: [
          { name: 'AWS', class: 'bg-orange-100 text-orange-800' },
          { name: 'Digital Ocean', class: 'bg-blue-100 text-blue-800' },
          { name: 'Linode', class: 'bg-green-100 text-green-800' }
        ]
      },
      {
        title: 'Containers & Orchestration',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        icon: '<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />',
        tags: [
          { name: 'Docker', class: 'bg-blue-100 text-blue-800' },
          { name: 'Kubernetes', class: 'bg-blue-100 text-blue-800' },
          { name: 'Helm', class: 'bg-purple-100 text-purple-800' }
        ]
      },
      {
        title: 'Database & Monitoring',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        icon: '<path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" /><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" /><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />',
        tags: [
          { name: 'MySQL/MariaDB', class: 'bg-blue-100 text-blue-800' },
          { name: 'MongoDB', class: 'bg-green-100 text-green-800' },
          { name: 'CloudWatch', class: 'bg-orange-100 text-orange-800' }
        ]
      }
    ]
    
    const learningCerts = ['KCNA Certification', 'CKA Certification', 'Kubestranaut Path']
    
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
          'Expertise in automation tools and containerization technologies'
        ]
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
          'Implemented secure GraphQL APIs for mobile and third-party integration'
        ]
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
          'Designed CI/CD pipelines and promoted DevOps best practices'
        ]
      }
    ]
    
    const contactMethods = [
      {
        type: 'Email',
        href: 'mailto:jjohnirungu@gmail.com',
        display: 'jjohnirungu@gmail.com',
        bgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
        external: false,
        icon: '<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />'
      },
      {
        type: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jjoek/',
        display: 'linkedin.com/in/jjoek',
        bgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
        external: true,
        icon: '<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />'
      },
      {
        type: 'Location',
        href: '#',
        display: 'Nairobi County, Kenya',
        bgColor: 'bg-green-100',
        iconColor: 'text-green-600',
        external: false,
        icon: '<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />'
      }
    ]
    
    const currentCertifications = [
      { name: 'AWS DevOps Engineer - Professional', issuer: 'Amazon Web Services', bgColor: 'bg-orange-500' },
      { name: 'Agile Software Development', issuer: 'Certified Professional', bgColor: 'bg-blue-500' }
    ]
    
    const currentPursuits = ['KCNA Certification', 'CKA Certification', 'Kubestranaut Path']
    
    const socialLinks = [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jjoek/',
        external: true,
        hoverColor: 'hover:bg-blue-600',
        icon: '<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />'
      },
      {
        name: 'Email',
        href: 'mailto:jjohnirungu@gmail.com',
        external: false,
        hoverColor: 'hover:bg-green-600',
        icon: '<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />'
      }
    ]
    
    const quickLinks = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' }
    ]
    
    const footerCertifications = [
      { name: 'AWS DevOps Engineer - Professional', iconColor: 'text-orange-500' },
      { name: 'Agile Software Development', iconColor: 'text-blue-500' },
      { name: 'KCNA & CKA (In Progress)', iconColor: 'text-blue-500' }
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
                typewriterIndex.value = (typewriterIndex.value + 1) % typewriterTexts.length
                setTimeout(startTypewriter, 500)
              }
            }
            setTimeout(deleteChar, 2000)
          }, 1000)
        }
      }
      
      typeChar()
    }
    
    // Mobile menu functions
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }
    
    // Scroll animations
    const handleScroll = () => {
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
    
      // Animate elements on scroll
      const animateElements = document.querySelectorAll('.animate-on-scroll')
      animateElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (elementTop < windowHeight - 100) {
          el.classList.add('animate-fade-in-up')
        }
      })
    }
    
    onMounted(() => {
      startTypewriter()
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial call
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
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
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
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
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
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
    
    /* Navigation */
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
    
    /* Mobile menu transitions */
    .mobile-menu-enter-active, .mobile-menu-leave-active {
      transition: all 0.3s ease;
    }
    
    .mobile-menu-enter-from, .mobile-menu-leave-to {
      opacity: 0;
      transform: translateY(-10px);
    }
    
    /* Buttons */
    .btn-primary {
      @apply bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center;
    }
    
    .btn-secondary {
      @apply border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center;
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
    
    /* Contact */
    .contact-item {
      @apply flex items-center hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200;
    }
    
    /* Social links */
    .social-link {
      @apply w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110;
    }
    
    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .shape {
        display: none;
      }
      
      .btn-primary, .btn-secondary {
        @apply w-full justify-center;
      }
    }
    </style>