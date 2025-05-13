import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Earth Observing Dashboard",
  description: "Global environmental changes observed by NASA, ESA, and JAXA",
  appearance: false, // disable dark mode
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
  vite:{
    server:{
      allowedHosts: true
    }
  },
  themeConfig: {
    logo: "/assets/trilateral_logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "News & Updates", link: "/news_updates" },
      { text: "Engage", link: "/engage" },
      { text: "Science", link: "/science" },
      { text: "Explore", link: "/explore" },
      { text: "About", link: "/about" },
    ],
  },
});
