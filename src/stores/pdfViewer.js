import { ref } from 'vue'

const isOpen = ref(false)
const pdfUrl = ref('')

export const usePdfViewer = () => {
    const showPdf = url => {
        pdfUrl.value = url
        isOpen.value = true
    }

    const closePdf = () => {
        isOpen.value = false
    }

    return {
        isOpen,
        pdfUrl,
        showPdf,
        closePdf,
    }
}
