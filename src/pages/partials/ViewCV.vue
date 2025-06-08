<template>
    <button class="btn-primary group" @click="showCv">
        View Resume
        <svg
            class="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
        </svg>
    </button>

    <PdfViewer v-if="isCvOpen" :is-open="isCvOpen" :pdf-url="cvUrl" @close="closeCv" />
</template>

<script setup>
    import { ref } from 'vue'
    import PdfViewer from '../../components/PdfViewer.vue'

    const isCvOpen = ref(false)
    const cvUrl = ref('https://jjoek-cv.s3.eu-central-1.amazonaws.com/Updated+Resume+(CV).pdf')

    const showCv = () => {
        console.log('Opening CV with URL:', cvUrl.value)
        isCvOpen.value = true
    }

    const closeCv = () => {
        console.log('Closing CV viewer')
        isCvOpen.value = false
    }
</script>
