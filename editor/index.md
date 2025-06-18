---
layout: page
---

<script setup client-only>
    if(window && !customElements.get('eox-map')) import("@eox/map");
    if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");
    import("@eox/map/dist/eox-map-advanced-layers-and-sources");
</script>
<ClientOnly>
    <eox-storytelling show-editor="open" style="overflow-y: auto;height: calc(100vh - 64px);" markdown="## Start your journey here!"></eox-storytelling>
</ClientOnly>
