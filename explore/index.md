---
layout: false
---

<script setup>
    import { withBase } from 'vitepress'
</script>
<script client-only>
    
if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");
    
</script>

<NavBar></NavBar>
<eo-dash style="height: calc(100dvh - var(--vp-nav-height))" .config="withBase('/configs/trilateral-config.js')"/>
