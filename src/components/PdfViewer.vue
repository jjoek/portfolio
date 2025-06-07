<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" v-if="isOpen" @click.self="close">
    <div class="bg-white rounded-lg w-11/12 h-[90vh] max-w-5xl p-4 relative">
      <!-- Close button -->
      <button 
        @click="close" 
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
        aria-label="Close PDF viewer"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- PDF Container -->
      <div class="w-full h-full overflow-auto bg-gray-100 rounded-lg pdf-container">
        <div class="relative w-full h-full flex justify-center">
          <!-- PDF Viewer -->
          <VuePdfEmbed
            :source="pdfUrl"
            :width="viewerWidth"
            @rendered="handleRendered"
            @error="handleError"
          />
        </div>
      </div>

      <!-- Download button - positioned relative to modal -->
      <a 
        :href="pdfUrl" 
        download="John_Irungu_CV.pdf"
        class="absolute bottom-6 right-6 z-10 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download CV
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import VuePdfEmbed from 'vue-pdf-embed'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  pdfUrl: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])

// Set viewer width to fill the container while maintaining some padding
const viewerWidth = computed(() => {
  // Return a value that's 95% of the container width to allow for padding
  return Math.min(window.innerWidth * 0.95, 1024)
})

const handleRendered = (numberOfPages) => {
  console.log('PDF rendered successfully with', numberOfPages, 'pages')
}

const handleError = (err) => {
  console.error('PDF loading error:', err)
}

const close = () => {
  emit('close')
}

onMounted(() => {
  console.log('PDF viewer mounted with URL:', props.pdfUrl)
})
</script>

<style scoped>
.pdf-container {
  background: theme('colors.gray.100');
  border-radius: theme('borderRadius.lg');
  min-height: 80vh;
  padding: 1rem;
}

/* Custom scrollbar for the PDF container */
.pdf-container::-webkit-scrollbar {
  width: 8px;
}

.pdf-container::-webkit-scrollbar-track {
  background: theme('colors.gray.100');
  border-radius: 4px;
}

.pdf-container::-webkit-scrollbar-thumb {
  background: theme('colors.gray.300');
  border-radius: 4px;
}

.pdf-container::-webkit-scrollbar-thumb:hover {
  background: theme('colors.gray.400');
}

/* Add some spacing between PDF pages */
:deep(.vue-pdf-embed > div) {
  margin-bottom: 1rem;
  width: 100%;
}

:deep(.vue-pdf-embed > div:last-child) {
  margin-bottom: 0;
}

:deep(.vue-pdf-embed) {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style> 