import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";
import { name as packageName } from "../package.json";
import feedbackSchema from "../public/configs/feedback_schema.json";

const brandId = packageName.replace("-client", "");

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig(brandId),
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
  vite: {
    envPrefix: ["VITE_", "EODASH_"],
    server: {
      allowedHosts: true,
    },
  },
  themeConfig: {
    feedback: {
      endpoint:
        "https://git-issue-creator.eodashboard.hub-otc.eox.at/create-issue?repo=github.com/ESA-eodashboards/issues",
      schema: feedbackSchema,
      position: "bottom-right",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "News & Updates", link: "/news_updates" },
      { text: "Resources", link: "/resources" },
      { text: "Dashboard", link: "/explore" },
      {
        text: "Newsletter",
        link: "https://assets-eur.mkt.dynamics.com/846bcca8-9413-4d04-822b-7282239af232/digitalassets/standaloneforms/1596564b-a729-f011-8c4d-7c1e52350f4e",
        target: "_blank",
      },
      { text: "About", link: "/about" },
    ],
  },
});
