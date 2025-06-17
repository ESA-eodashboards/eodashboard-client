---
layout: page
---

<script setup>
    import { withBase } from 'vitepress'
</script>
<script client-only>
    
if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");
    
</script>
<style>
    /*:root{
        overflow:hidden
    }*/
</style>
<eo-dash style="height:calc(100dvh - 64px)" .config="withBase('/configs/trilateral-config.js')"/>
