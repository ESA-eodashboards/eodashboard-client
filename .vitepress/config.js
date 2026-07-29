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
    theme: {
      brandConfig: {
        legal: {
          about: "/about",
          termsAndConditions: "/terms_and_conditions",
          privacyPolicy: "/privacy",
        },
      }
    },
    feedback: {
      endpoint:
        "https://git-issue-creator.eodashboard.hub-otc.eox.at/create-issue?repo=github.com/ESA-eodashboards/issues",
      schema: feedbackSchema,
      position: "bottom-right",
    },
    nav: [
      { text: "News & Updates", link: "/news_updates" },
      { text: "Resources", link: "/resources" },
      { text: "Dashboard", link: "/explore" },
      { text: "About", link: "/about" },
    ],
  },
});
