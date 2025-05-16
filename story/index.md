---
layout: page
---

<script setup>
    import { onMounted } from 'vue';
    import { withBase } from 'vitepress';
    if(window && !customElements.get('eox-map')) import("@eox/map")
    if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");

    let storyfile;
    let storyurl;
    if (typeof window !== 'undefined' && 'URLSearchParams' in window) {
        const searchParams = new URLSearchParams(window.location.search);
        storyfile = searchParams.get('id');
        storyurl = `https://esa-eodashboards.github.io/eodashboard-narratives/${storyfile}.md`;
    }
    if (typeof window !== 'undefined') {
        function injectStyleToShadowRoot(selector, css) {
            const interval = setInterval(() => {
            const el = document.querySelector(selector);
            if (el && el.shadowRoot) {
                clearInterval(interval);
                const style = document.createElement('style');
                style.textContent = css;
                el.shadowRoot.appendChild(style);
            }
            }, 100);
        }

        injectStyleToShadowRoot('eox-storytelling', `
            .navigation {
               top: 60px !important;
            }
        `);
    }
</script>

<eox-storytelling 
    show-nav
    v-if="storyurl" 
    :markdown-url="storyurl">
</eox-storytelling>
