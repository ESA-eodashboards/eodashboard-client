<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>

<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase, useRouter } from 'vitepress';

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
      // Adapt image urls
      results.forEach((res)=>{res.image = 'https://esa-eodashboards.github.io/eodashboard-notebooks/'+res.image});
      items.value = results;

    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  });

  // Click event handler
  const handleResultClick = (evt) => {
    router.go(withBase(`/notebook?id=${evt.detail.link}`));
  };
</script>

# Resources

## Notebooks

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

2023

  - A. Anghelea, M. Maskey, S. -I. Sobue and N. Sugita, "The NASA-ESA-JAXA Earth Observation Dashboard," IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023, pp. 418-420, doi: 10.1109/IGARSS52108.2023.10282443.
  - Daniel Santillan, Silvester Pari, Stephan Meissl, Alessandro Scremin, Diego Moglioni, Sara Aparicio, Anca Anghelea, OPEN-SOURCE SCIENCE FOR EARTH OBSERVATION DASHBOARDS, IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023
  - Manil Maskey, Barry Lefer, AIR QUALITY INSIGHTS WITH NASA INTERACTIVE DASHBOARD, IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023
  - Slesa Adhikari, Alexandra Kirk, Aimee Barciauskas, Daniel da Silva, Hanbyul Jo, Ricardo Mestre, Anthony Boyd, Michael Suttles, Brian Freitag, Manil Maskey, Jerika Christman, A CONFIGURABLE AND INTERACTIVE DASHBOARD FOR EARTH OBSERVATION, IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023
  - Naoko Sugita, Kohei Kawamura, Yusuke Ikehata, Shinichi Sobue, Ko Hamamoto, JAXA’S EFFORTS FOR BETTER ACCESS TO EO DATA AND INFORMATION: EARTH-GRAPHY AND JAXA DASHBOARD PLAN, IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium, Pasadena, CA, USA, 2023
  - S. Sobue, Y. Tochigi, K. Kawamura, Y.Ikehata, G. Segami, N. Sugita, K. Hamamoto, K. Kuroiwa, JAXA EARTH OBSERVATION DASHBOARD WITH COG AND WMS/WMTS, The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences, Volume XLVIII-4/W7-2023 FOSS4G (Free and Open Source Software for Geospatial) 2023 – Academic Track, 26 June–2 July 2023, Prizren, Kosovo

2021

  - B. Lefer et al., "A Multi-Agency COVID-19 Dashboard with Satellite Air Quality Data," 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1553-1555, doi: 10.1109/IGARSS47720.2021.9553200.
  - Y. -L. Desnos, E. Hamdouch, A. Anghelea, G. Landgraf, S. Cheli and J. Turpin, "Rapid Action on COVID-19 and Earth Observation: an Inittiative for Societal Information Enabled by Copernicus Sentinels Data," 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1374-1376, doi: 10.1109/IGARSS47720.2021.9553746.
  - A. Anghelea, Y. -L. Desnos, M. Maskey, S. -i. Sobue and S. Meissl, "The COVID-19 Earth Observation Dashboard: A NASA-ESA-JAXA Collaborative Product," 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1556-1559, doi: 10.1109/IGARSS47720.2021.9553205.
  - M. J. Falkowski, M. Maskey, S. -i. Sobue, G. Campbell, G. Bawden and T. Tadono, "COIVD-19 Impact Monitoring of Economic Activities," 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1366-1369, doi: 10.1109/IGARSS47720.2021.9555044.
  - B. Koetz et al., "COIVD-19 Impact Monitoring for Agriculutre," 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1567-1570, doi: 10.1109/IGARSS47720.2021.9553844.
  - K. Hamamoto et al., "Jaxa's Earth Observation Data Analysis on Covid-19," 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1362-1365, doi: 10.1109/IGARSS47720.2021.9554593.
  - M. -H. Rio et al., "Trilateral Water Quality Monitoring from Space during Covid-19," 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1563-1566, doi: 10.1109/IGARSS47720.2021.9554949.
  - A. Kuze et al., "Covid-19 Impact Monitoring for Climate Environment (Greenhouse Gases)," 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS, 2021, pp. 1560-1562, doi: 10.1109/IGARSS47720.2021.9554328.

## Tutorials

* [IGARSS 2024](https://www.2024.ieeeigarss.org/tutorials.php#tut10). Material available on [GitHub](https://github.com/eurodatacube/2024-IGARSS-EODashboard)
* [IGARSS 2023](https://2023.ieeeigarss.org/tutorials.php#tut111)
* [Big Data from Space (BiDS) 2023](https://www.bigdatafromspace2023.org/satellite-events)
* [IGARSS 2022](https://igarss2022.org/tutorials.php#tut14). Notebooks available on [GitHub](https://github.com/eurodatacube/notebooks/tree/master/notebooks/contributions/IGARSS2022)

## Workshops

* [EO Dashboard Hackathon 2021](https://www.eodashboardhackathon.org/)
* [FOSS4G Europe 2024](https://talks.osgeo.org/foss4g-europe-2024-workshops/talk/8S3KEA/)
* [FOSS4G 2023](https://talks.osgeo.org/foss4g-2023-workshop/talk/8P89WS/)
* [2nd Earth System Science Challenge - February 2024](https://sciencehub.esa.int/2024/02/08/the-2nd-earth-system-science-workshop-at-esrin-science-hub/)
* [3rd Earth System Science Challenge - May 2024](https://sciencehub.esa.int/2024/05/09/3rd-earth-system-science-challenge/)

## Documentation

EO Dashboard is supported by the three agencies via several activities. Each agency contributes with EO Data, scientific expertise, and technology, including: [NASA’s VEDA](https://www.earthdata.nasa.gov/dashboard/), ESA’s [Euro Data Cube](https://eurodatacube.com) and the [Network of Resources](https://nor-discover.org), and [Jaxa’s Earth-graphy](https://earth.jaxa.jp/en/).
More information is available on the EO Dashboard Github page.
The EO Dashboard application is based on the [eodash](https://eodash.org/) ecosystem.

## Data

* [EO Dashboard Data Collections](https://github.com/eurodatacube/eodash-catalog/tree/main/collections)
* [STAC Catalogue](https://radiantearth.github.io/stac-browser/#/external/eurodatacube.github.io/eodash-catalog/trilateral/catalog.json?.language=en)
