---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "EARTH OBSERVING DASHBOARD"
  tagline: "<img src='assets/trilateral_logo.svg' class='center bottom-margin large-margin' style='height: 40px' /><p>Global environmental changes observed by NASA, ESA, and JAXA</p>"
  text: "EARTH OBSERVING DASHBOARD"
  background: 
    src: assets/EO_Dashboard_kv_no_logos.jpg
---
<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>

Please explore the Stories below to get acquainted with the various datasets from the agencies and insights that can be won from them.
If you are interested in further science, events, or other information we invite you to explore the site and available sections!

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
    "title": "Search",
    "type": "text",
    "placeholder": "Search in title or subtitle",
    "expanded": true
  }, {
    "key": 'theme',
    "title": 'Theme',
    "expanded": true
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
  ></eox-itemfilter>
</client-only>

The European Space Agency (ESA), Japan Aerospace Exploration Agency (JAXA), and National Aeronautics and Space Administration (NASA) have combined their resources, technical knowledge, and expertise to produce this Earth Observing Dashboard, which strengthens our understanding of global environmental changes and other societal challenges impacting our planet.

The dashboard provides an easy-to-use resource for all kinds of public from the scientist to the decision-maker, including people not familiar with satellites. Based on accurate remote sensing observations, it showcases examples of global environmental changes on 7 themes: Atmosphere, Oceans, Biomass, Cryosphere, Agriculture, Covid-19 and Economy. The dashboard offers a precise, objective and factual view without any artifacts of our planet. You can explore countries and regions around the world to see how the indicators in specific locations changed over time.

ESA, JAXA, and NASA will continue to enhance this dashboard as new data becomes available.

<style>
  /* Making sure hero image is not darkened */
  header .background-image {
    opacity: 1!important;
  }

  /* Fixing nav bar height here for now */
  .top-nav {
    height: 60px!important;
  }
</style>