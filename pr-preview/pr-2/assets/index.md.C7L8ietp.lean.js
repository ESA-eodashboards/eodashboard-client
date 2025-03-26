import{p as r,v as i,c as l,o as c,j as a}from"./chunks/framework.BhSt65lz.js";const d=["items"],m=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"EARTH OBSERVING DASHBOARD","tagline":"Global environmental changes observed by NASA, ESA, and JAXA","text":""}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),h={name:"index.md"},g=Object.assign(h,{setup(p){const o=r([]),n=[{keys:["title","subtitle"],title:"Search",type:"text",placeholder:"Type Something...",expanded:!0}];i(async()=>{try{const e=await fetch("https://esa-eodash.github.io/eodashboard-narratives/narratives.json");o.value=await e.json()}catch(e){console.error("Error fetching JSON:",e)}});const s=e=>{alert(`${e.detail.file} clicked!`)};return(e,t)=>(c(),l("div",null,[a("eox-itemfilter",{items:o.value,titleProperty:"title",imageProperty:"image",subTitleProperty:"subtitle",filterProperties:n,resultType:"cards",onSelect:s},null,40,d),t[0]||(t[0]=a("p",null,"The European Space Agency (ESA), Japan Aerospace Exploration Agency (JAXA), and National Aeronautics and Space Administration (NASA) have combined their resources, technical knowledge, and expertise to produce this Earth Observing Dashboard, which strengthens our understanding of global environmental changes and other societal challenges impacting our planet.",-1)),t[1]||(t[1]=a("p",null,"The dashboard provides an easy-to-use resource for all kinds of public from the scientist to the decision-maker, including people not familiar with satellites. Based on accurate remote sensing observations, it showcases examples of global environmental changes on 7 themes: Atmosphere, Oceans, Biomass, Cryosphere, Agriculture, Covid-19 and Economy. The dashboard offers a precise, objective and factual view without any artifacts of our planet. You can explore countries and regions around the world to see how the indicators in specific locations changed over time.",-1)),t[2]||(t[2]=a("p",null,"ESA, JAXA, and NASA will continue to enhance this dashboard as new data becomes available.",-1))]))}});export{m as __pageData,g as default};
