---
layout: false
---

<script setup>
    import { withBase } from 'vitepress'
</script>
<script client-only>
    
if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");
    
</script>
<style scoped>
  /*
::v-deep .top-nav > nav, .top-nav > .holder {
  max-width: unset;
}
*/
</style>

<NavBar style="height:60px;"></NavBar>
<eo-dash style="height: calc(100dvh - var(--vp-nav-height))" .config="withBase('/configs/trilateral-config.js')"/>
