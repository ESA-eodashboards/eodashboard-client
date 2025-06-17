---
layout: false
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
<eo-dash class="full-width" style="height:calc(100dvh); display: block;" .config="withBase('/configs/trilateral-config.js')"/>
