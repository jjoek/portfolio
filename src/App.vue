<template>
    <div class="min-h-screen bg-gray-50">
        <Navigation />
        <router-view></router-view>
        <Footer />
        <PdfViewer v-if="isOpen" :is-open="isOpen" :pdf-url="pdfUrl" @close="closePdf" />
    </div>
</template>

<script setup>
    import Navigation from './components/Navigation.vue'
    import Footer from './components/Footer.vue'
    import PdfViewer from './components/PdfViewer.vue'
    import { usePdfViewer } from './stores/pdfViewer'

    const { isOpen, pdfUrl, closePdf } = usePdfViewer()
</script>

<style>
    @import './styles/main.css';
</style>
