---
layout: page
footer: null
---

<script setup>
  import { onMounted, ref } from 'vue'

  const iframeSrc = ref('');
  const paramName = 'id'; 

  onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get(paramName);
    if (id) {
      iframeSrc.value = 'https://esa-eodashboards.github.io/eodashboard-notebooks/'+(id);
    }
  })
</script>

<iframe
    v-if="iframeSrc"
    :src="iframeSrc"
    class="full-width"
    height="100%"
    style="border: none; overflow-y: auto; height: calc(100vh - 64px);transform: translateY(var(--vp-nav-height)); margin-top: calc(var(--vp-nav-height) * -1 - 90px - 48px); margin-bottom: var(--vp-nav-height);"
></iframe>
<p v-else>Notebook `{{ paramName }}` not found</p>
