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
      { text: "Dashboard", link: "/uc1dashboard/" },
      // { text: 'UC2 Dashboard', link: '/uc2dashboard/' },
      // { text: 'Stories', link: '/stories/' },
      { text: "Editor", link: "/editor/" },
    ],
  },
});
