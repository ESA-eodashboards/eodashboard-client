---
layout: page
---

<script setup>
import { onMounted, ref } from 'vue'

const iframeSrc = ref('')
const paramName = 'id' 

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get(paramName)
  if (id) {
    iframeSrc.value = 'https://esa-eodashboards.github.io/eodashboard-notebooks/'+(id)
  }
})
</script>

<iframe
    v-if="iframeSrc"
    :src="iframeSrc"
    width="100%"
    height="100%"
    style="border: none; overflow-y: auto; height: calc(100vh - 64px)"
></iframe>
<p v-else>Notebook `{{ paramName }}` not found</p>
