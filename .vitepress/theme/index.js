import EOX from "@eox/pages-theme-eox";

/** @type {import('vitepress').Theme} */
export default {
  ...EOX,
  async enhanceApp({ app, router, siteData }) {
    EOX.enhanceApp({ app, router, siteData });
    
    if (!import.meta.env.SSR) {
      await import("./style.css");
      await import("@eodash/eodash/webcomponent");
      await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
    }
  },
};
