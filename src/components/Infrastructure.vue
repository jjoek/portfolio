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
        podName: 'Not available',
        namespace: 'Not available',
        podIP: 'Not available',
        nodeName: 'Not available'
      }
    }
  },
  methods: {
    async fetchPodInfo() {
      try {
        const name = await fetch('/podinfo/name').then(res => res.text());
        const namespace = await fetch('/podinfo/namespace').then(res => res.text());
        const podIP = await fetch('/podinfo_runtime/podinfo.json')
            .then(res => res.json())
            .then(data => data.pod_ip);

        // const ip = await fetch('/podinfo/ip').then(res => res.text());
        const node = 'Not available'; //await fetch('/podinfo/node').then(res => res.text());

        this.podInfo = {
          podName: name.trim(),
          namespace: namespace.trim(),
          podIP: podIP.trim(),
          nodeName: node.trim()
        };
        console.log("Environment Set Variables JJOEK: " + Date.now() +  JSON.stringify(this.podInfo));
      } catch (error) {
        console.error('Error fetching pod info:', error);
      }
    }
  },
  async mounted() {
    await this.fetchPodInfo();
  }
}
</script>

<style scoped>
.infrastructure-info {
  @apply max-w-4xl mx-auto p-6;
}
</style> 