<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>

<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase, useRouter } from 'vitepress';
  import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

  const router = useRouter();
  const items = ref([]);

  const filterProps = [{
    "keys": [
      "title",
      "subtitle",
    ],
    "title": "Search",
    "type": "text",
    "placeholder": "Search in title...",
    "expanded": true
  }
  ];

  onMounted(async () => {
    try {
      const response = await fetch('https://esa-eodashboards.github.io/eodashboard-notebooks/notebooks.json');
      const results = await response.json();
      results.forEach((res)=>{
        if (res.image.startsWith('build')){
          // Adapt image urls in case locally built and not absolute
          res.image = 'https://esa-eodashboards.github.io/eodashboard-notebooks/'+res.image
        }
        });
      items.value = results;

    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  });

  // Click event handler
  const handleResultClick = (evt) => {
    trackEvent(['notebooks', 'select', evt.detail.link]);
    router.go(withBase(`/notebook?id=${evt.detail.link}`));
  };
</script>

# Resources

## Notebooks

Whether you're an educator, researcher, or simply curious, the Dashboard also serves as a valuable educational resource. Many indicators are accompanied by support materials - including example notebooks - that show how the data was produced and how it can be accessed and analyzed further. 

<client-only>
  <eox-itemfilter
    :items="items"
    titleProperty="title"
    imageProperty="image"
    subTitleProperty="subtitle"
    :filterProperties="filterProps"
    resultType="cards"
    @select="handleResultClick"
  ></eox-itemfilter>
</client-only>


## Publications

2025

- A Anghelea,  M. Maskey,  N. Sugita,  S. Sobue,  D. Santillan, [Earth Observation Science Storytelling with Dashboards](https://lps25.esa.int/programme/programme-session/?id=30A6B8BB-94ED-4B9E-A770-C16C46B6DA28), Living Planet Symposium 2025

2024

- A. Anghelea, M. Maskey, S. Sobue, N. Sugita, B. Leffer and C. Vitolo, [ESA-NASA-JAXA EO Dashboard Collaboration Advancing EO Science for Society](https://agu.confex.com/agu/agu24/meetingapp.cgi/Paper/1540529), AGU 2024

2023

  - A. Anghelea, M. Maskey, S. -I. Sobue and N. Sugita, "The NASA-ESA-JAXA Earth Observation Dashboard," IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023, pp. 418-420, doi: [10.1109/IGARSS52108.2023.10282443](https://doi.org/10.1109/IGARSS52108.2023.10282443).
  - D. Santillan, S. Pari, S. Meissl, A. Scremin, D. Moglioni, S. Aparicio, A. Anghelea, [Open-Source Science for Earth Observation Dashboards](https://2023.ieeeigarss.org/view_paper.php?PaperNum=3498), IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023
  - M. Maskey, B. Lefer, [Air Quality Insights with NASA Interactive Dashboard](https://2023.ieeeigarss.org/view_paper.php?PaperNum=3485), IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023
  - S. Adhikari, A. Kirk, A. Barciauskas, D. da Silva, H. Jo, R. Mestre, A. Boyd, M. Suttles, B. Freitag, M. Maskey, J. Christman, [A Configurable and Interactive Dashboard for Earth Observation](https://2023.ieeeigarss.org/view_paper.php?PaperNum=5280), IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023
  - N. Sugita, K. Kawamura, Y. Ikehata, S. Sobue, K. Hamamoto, [JAXA’s Efforts for Better Access to EO Data and Information: Earth-Graphy and JAXA Dashboard Plan](https://2023.ieeeigarss.org/view_paper.php?PaperNum=3485#top), IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023
  - Sobue, S., Tochigi, Y., Kawamura, K., Ikehata, Y., Segami, G., Sugita, N., Hamamoto, K., and Kuroiwa, K.: JAXA EARTH OBSERVATION DASHBOARD WITH COG AND WMS/WMTSS, Int. Arch. Photogramm. Remote Sens. Spatial Inf. Sci., XLVIII-4/W7-2023, 209–216, [https://doi.org/10.5194/isprs-archives-XLVIII-4-W7-2023-209-2023](https://doi.org/10.5194/isprs-archives-XLVIII-4-W7-2023-209-2023), 2023.

2021

  - B. Lefer et al., "A Multi-Agency COVID-19 Dashboard with Satellite Air Quality Data," 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, Brussels, Belgium, 2021, pp. 1553-1555, doi: [10.1109/IGARSS47720.2021.9553200](https://ieeexplore.ieee.org/document/9553200).
  - Y. -L. Desnos, E. Hamdouch, A. Anghelea, G. Landgraf, S. Cheli and J. Turpin, "Rapid Action on COVID-19 and Earth Observation: an Inittiative for Societal Information Enabled by Copernicus Sentinels Data", 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, Brussels, Belgium, 2021, pp. 1374-1376, doi: [10.1109/IGARSS47720.2021.9553746](https://ieeexplore.ieee.org/document/9553746).
  - A. Anghelea, Y. -L. Desnos, M. Maskey, S. -i. Sobue and S. Meissl, "The COVID-19 Earth Observation Dashboard: A NASA-ESA-JAXA Collaborative Product", 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, Brussels, Belgium, 2021, pp. 1556-1559, doi: [10.1109/IGARSS47720.2021.9553205](https://ieeexplore.ieee.org/document/9553205).
  - M. J. Falkowski, M. Maskey, S. -i. Sobue, G. Campbell, G. Bawden and T. Tadono, "COIVD-19 Impact Monitoring of Economic Activities", 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, Brussels, Belgium, 2021, pp. 1366-1369, doi: [10.1109/IGARSS47720.2021.9555044](https://ieeexplore.ieee.org/document/9555044).
  - B. Koetz et al., "COIVD-19 Impact Monitoring for Agriculture", 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, Brussels, Belgium, 2021, pp. 1567-1570, doi: [10.1109/IGARSS47720.2021.9553844](https://ieeexplore.ieee.org/document/9553844).
  - K. Hamamoto et al., "Jaxa's Earth Observation Data Analysis on Covid-19", 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, Brussels, Belgium, 2021, pp. 1362-1365, doi: [10.1109/IGARSS47720.2021.9554593](https://ieeexplore.ieee.org/document/9554593).
  - M. -H. Rio et al., "Trilateral Water Quality Monitoring from Space during Covid-19", 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1563-1566, doi: [10.1109/IGARSS47720.2021.9554949](https://ieeexplore.ieee.org/document/9554949).
  - A. Kuze et al., "Covid-19 Impact Monitoring for Climate Environment (Greenhouse Gases)", 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1560-1562, doi: [10.1109/IGARSS47720.2021.9554328](https://ntrs.nasa.gov/api/citations/20240000406/downloads/IGARSS2021GHG-Dashboard-%20revision511-1.pdf).

## Tutorials

* [Living Planet Symposium 2025](https://lps25.esa.int/programme/programme-session/?id=7A4E4BC9-92EE-41D3-8A3A-62FF63DC914E) Materials and environment used are available on [GitHub](https://github.com/eurodatacube/2025-LPS-EODashboard).
* [IGARSS 2024](https://www.2024.ieeeigarss.org/tutorials.php#tut10). Material available on [GitHub](https://github.com/eurodatacube/2024-IGARSS-EODashboard)
* [IGARSS 2023](https://2023.ieeeigarss.org/tutorials.php#tut111)
* [Big Data from Space (BiDS) 2023](https://www.bigdatafromspace2023.org/satellite-events)
* [IGARSS 2022](https://igarss2022.org/tutorials.php#tut14). Notebooks available on [GitHub](https://github.com/eurodatacube/notebooks/tree/master/notebooks/contributions/IGARSS2022)

## Workshops

* [EO Dashboard Hackathon 2021](https://www.eodashboardhackathon.org/)
* [FOSS4G Europe 2024](https://talks.osgeo.org/foss4g-europe-2024-workshops/talk/8S3KEA/)
* [FOSS4G 2023](https://talks.osgeo.org/foss4g-2023-workshop/talk/8P89WS/)
* [2nd ESA Earth System Science Challenge - February 2024](https://sciencehub.esa.int/2024/02/08/the-2nd-earth-system-science-workshop-at-esrin-science-hub/)
* [3rd ESA Earth System Science Challenge - May 2024](https://sciencehub.esa.int/2024/05/09/3rd-earth-system-science-challenge/)

## Documentation

EO Dashboard is supported by the three agencies via several activities. Each agency contributes with EO Data, scientific expertise, and technology, including: [NASA’s VEDA](https://www.earthdata.nasa.gov/dashboard/), ESA’s [Euro Data Cube](https://eurodatacube.com) and the [Network of Resources](https://nor-discover.org), and [Jaxa’s Earth-graphy](https://earth.jaxa.jp/en/).
More information is available on the EO Dashboard Github page.
The EO Dashboard application is based on the [eodash](https://eodash.org/) ecosystem.

## Data

* [EO Dashboard Data Collections](https://github.com/ESA-eodashboards/eodashboard-catalog/tree/main/collections)
* [STAC Catalogue](https://radiantearth.github.io/stac-browser/#/external/ESA-eodashboards.github.io/eodashboard-catalog/trilateral/catalog.json?.language=en)
