---
layout: page
---

<script setup>
    import { onMounted } from 'vue';
    import { withBase } from 'vitepress';
    if(window && !customElements.get('eox-map')) import("@eox/map")
    if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");

    let storyurl;
    if (typeof window !== 'undefined' && 'URLSearchParams' in window) {
        const searchParams = new URLSearchParams(window.location.search);
        storyurl = searchParams.get('storyurl');
    }
</script>

<eox-storytelling 
    v-if="storyurl" 
    :markdown-url="storyurl"
    style="overflow-y: auto; height: calc(100vh - 64px)">
</eox-storytelling>
