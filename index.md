---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "EARTH OBSERVING DASHBOARD"
  tagline: "<img src='./assets/trilateral_logo.svg' class='center bottom-margin large-margin' style='height: 40px' />Global environmental changes observed by NASA, ESA, and JAXA"
  text: "EARTH OBSERVING DASHBOARD"
  background: 
    src: ./assets/EO_Dashboard_kv_no_logos.jpg
---
<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>

The Earth Observing Dashboard is a joint initiative by the European Space Agency (ESA), the National Aeronautics and Space Administration (NASA), and the Japan Aerospace Exploration Agency (JAXA). This tri-agency effort brings together Earth Observation data from complementary satellite missions to share scientifically grounded insights with the public. Using storytelling, it combines interactive visual elements—such as maps, indicators, and dynamic charts, to explore the impacts of global events on our planet. 

**Have a story to tell? We'd love to see it.**

With EO Dashboard, ESA, NASA, and JAXA aim to empower a global community of storytellers, educators, and explorers. Use the Dashboard to explore the available stories, or create your own data-driven narratives and share them with the world. Submit your ideas or completed stories to eodash@esa.int for a chance to be featured on the Dashboard. visit the **Resources** page for details. 

<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase, useRouter } from 'vitepress';

  const router = useRouter();
  const items = ref([]);

  const filterProps = [{
    "keys": [
      "title",
      "subtitle",
      "theme"
    ],
    "title": "By keyword",
    "type": "text",
    "placeholder": "Search in title or subtitle",
    "expanded": true
  }, {
    "key": 'theme',
    "title": 'By theme',
    expanded: true
  }
  ];

  onMounted(async () => {
    try {
      const response = await fetch('https://esa-eodashboards.github.io/eodashboard-narratives/narratives.json');
      const results = await response.json();
      results.forEach((res)=>{res.image = 'https://esa-eodashboards.github.io/eodashboard-narratives/'+res.image});
      items.value = results;
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  });

  // Click event handler
  const handleResultClick = (evt) => {
    const sections = evt.detail.file.split("/");
    const filename = sections[sections.length-1].split(".")[0];
    router.go(withBase(`/story?id=${filename}`));
  };
</script>

<div class="large-space"></div>

<client-only>
  <eox-itemfilter
    :items="items"
    titleProperty="title"
    imageProperty="image"
    subTitleProperty="subtitle"
    aggregateResults="theme"
    :filterProperties="filterProps"
    resultType="cards"
    @select="handleResultClick"
    style="--form-flex-direction: row"
    class="large-margin bottom-margin"
  >
    <h6 slot="filterstitle" class="small vertical-margin">Filter Stories:</h6>
    <h6 slot="resultstitle" class="large large-margin vertical-margin top-padding">Earth Observing Dashboard Stories</h6>
  </eox-itemfilter>
</client-only>

<div class="large-space"></div>

<style>
  /* Making sure hero image is not darkened */
  header .background-image {
    opacity: 1!important;
  }
</style>
