<template>
  <main class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Debug Info (only shown when there's an error) -->
      <div v-if="lastError" role="alert" aria-live="polite" class="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p class="text-red-600">{{ lastError }}</p>
      </div>

      <header class="text-center mb-16 animate-on-scroll">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Infrastructure Details</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-time information about the Kubernetes pod serving this application
        </p>
      </header>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Pod Information Card -->
        <article class="animate-on-scroll bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <header class="gradient-header px-6 py-4">
            <h2 class="text-xl font-semibold text-white mb-1">Kubernetes Pod Information</h2>
            <p class="text-blue-100 text-sm">Current pod serving your request</p>
          </header>
          <div class="p-6 space-y-4">
            <div class="flex items-center border-b border-gray-100 pb-4">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Pod Name</p>
                <p class="font-medium text-gray-900">{{ podInfo.podName }}</p>
              </div>
            </div>
            <div class="flex items-center border-b border-gray-100 pb-4">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Namespace</p>
                <p class="font-medium text-gray-900">{{ podInfo.namespace }}</p>
              </div>
            </div>
            <div class="flex items-center border-b border-gray-100 pb-4">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Pod IP</p>
                <p class="font-medium text-gray-900">{{ podInfo.podIP }}</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Node</p>
                <p class="font-medium text-gray-900">{{ podInfo.nodeName }}</p>
              </div>
            </div>
          </div>
        </article>

        <!-- Service Information Card -->
        <div class="animate-on-scroll bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="gradient-header px-6 py-4">
            <h3 class="text-xl font-semibold text-white mb-1">Service Information</h3>
            <p class="text-blue-100 text-sm">Kubernetes service configuration</p>
          </div>
          <div class="p-6 space-y-4">
            <div class="flex items-center border-b border-gray-100 pb-4">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Service Name</p>
                <p class="font-medium text-gray-900">portfolio</p>
              </div>
            </div>
            <div class="flex items-center border-b border-gray-100 pb-4">
              <div class="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Service Type</p>
                <p class="font-medium text-gray-900">NodePort</p>
              </div>
            </div>
            <div class="flex items-center border-b border-gray-100 pb-4">
              <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Port</p>
                <p class="font-medium text-gray-900">80</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Node Port</p>
                <p class="font-medium text-gray-900">30080</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Last Updated -->
      <div class="text-center mt-8 text-sm text-gray-500 animate-on-scroll">
        Last updated: {{ new Date().toLocaleString() }}
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@unhead/vue'

const podInfo = ref({
  podName: 'Not available',
  namespace: 'Not available',
  podIP: 'Not available',
  nodeName: 'Not available'
})

const lastError = ref(null)

const fetchPodInfo = async () => {
  try {
    console.log('Fetching pod info...')

    // Helper function to check if response is HTML
    const isHtmlResponse = (text) => {
      return text.trim().toLowerCase().startsWith('<!doctype html') || 
             text.trim().toLowerCase().startsWith('<html') ||
             text.includes('</html>') ||
             text.includes('</body>')
    }

    // Fetch pod name with HTML check
    const nameResponse = await fetch('/podinfo/name')
    console.log('Name response:', nameResponse.status)
    let name = 'Not available'
    if (nameResponse.ok) {
      const text = await nameResponse.text()
      if (!isHtmlResponse(text)) {
        name = text
      }
    }

    // Fetch namespace with HTML check
    const namespaceResponse = await fetch('/podinfo/namespace')
    console.log('Namespace response:', namespaceResponse.status)
    let namespace = 'Not available'
    if (namespaceResponse.ok) {
      const text = await namespaceResponse.text()
      if (!isHtmlResponse(text)) {
        namespace = text
      }
    }

    // Fetch pod IP with better error handling
    let podIP = 'Not available'
    try {
      const podIPResponse = await fetch('/podinfo_runtime/podinfo.json')
      console.log('Pod IP response:', podIPResponse.status)
      if (podIPResponse.ok) {
        const text = await podIPResponse.text()
        console.log('Raw podinfo response:', text)
        if (text && !isHtmlResponse(text)) {
          try {
            const data = JSON.parse(text)
            podIP = data.pod_ip || 'Not available'
          } catch (parseError) {
            console.warn('Error parsing pod IP JSON:', parseError)
          }
        }
      }
    } catch (ipError) {
      console.warn('Error fetching pod IP:', ipError)
    }

    const node = 'Not available'

    podInfo.value = {
      podName: name.trim(),
      namespace: namespace.trim(),
      podIP: typeof podIP === 'string' ? podIP.trim() : podIP.toString(),
      nodeName: node.trim()
    }

    lastError.value = null
    console.log("Environment Set Variables: " + Date.now() + JSON.stringify(podInfo.value))
  } catch (error) {
    console.error('Error fetching pod info:', error)
    lastError.value = error.message
  }
}

// Handle scroll animations
const handleScroll = () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll')
  animateElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    
    if (elementTop < windowHeight - 100) {
      el.classList.add('animate-fade-in-up')
    }
  })
}

let interval
onMounted(async () => {
  console.log('Infrastructure component mounted')
  await fetchPodInfo()
  interval = setInterval(fetchPodInfo, 30000)
  
  // Set up scroll animations
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial call
  
  // Trigger initial animations
  setTimeout(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach(el => el.classList.add('animate-fade-in-up'))
  }, 100)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
  window.removeEventListener('scroll', handleScroll)
})

// SEO meta tags
useHead({
  title: 'Infrastructure Details - John Irungu',
  meta: [
    {
      name: 'description',
      content: 'Explore the real-time Kubernetes infrastructure powering this portfolio website. View pod details and infrastructure metrics.'
    },
    {
      property: 'og:title',
      content: 'Infrastructure Details - John Irungu'
    },
    {
      property: 'og:description',
      content: 'Explore the real-time Kubernetes infrastructure powering this portfolio website. View pod details and infrastructure metrics.'
    }
  ]
})
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.animate-on-scroll.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
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

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Cards */
.stat-card {
  @apply text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105;
}

/* Gradient backgrounds */
.gradient-header {
  @apply bg-gradient-to-r from-blue-500 to-purple-600;
}
</style> 