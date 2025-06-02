<template>
  <div class="infrastructure-info">
    <h2 class="text-2xl font-bold mb-6">Infrastructure Details</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold mb-4">Kubernetes Pod Information</h3>
        <div class="space-y-2">
          <p><span class="font-medium text-gray-400">Pod Name:</span> {{ podInfo.podName }}</p>
          <p><span class="font-medium text-gray-400">Namespace:</span> {{ podInfo.namespace }}</p>
          <p><span class="font-medium text-gray-400">Pod IP:</span> {{ podInfo.podIP }}</p>
          <p><span class="font-medium text-gray-400">Node:</span> {{ podInfo.nodeName }}</p>
        </div>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold mb-4">Service Information</h3>
        <div class="space-y-2">
          <p><span class="font-medium text-gray-400">Service Name:</span> portfolio</p>
          <p><span class="font-medium text-gray-400">Service Type:</span> NodePort</p>
          <p><span class="font-medium text-gray-400">Port:</span> 80</p>
          <p><span class="font-medium text-gray-400">Node Port:</span> 30080</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Infrastructure',
  data() {
    return {
      podInfo: {
        podName: process.env.POD_NAME || 'Not available',
        namespace: process.env.POD_NAMESPACE || 'Not available',
        podIP: process.env.POD_IP || 'Not available',
        nodeName: process.env.NODE_NAME || 'Not available'
      }
    }
  }
}
</script>

<style scoped>
.infrastructure-info {
  @apply max-w-4xl mx-auto p-6;
}
</style> 