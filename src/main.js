import { createEodash } from "@eodash/eodash";
import tools from "./tools";
import basedOnWms from "./basedOnWms";
import container from "./container";
import backgroundMap from "./backgroundMap";

export default createEodash((store) => ({
  id: "template-id",
  stacEndpoint:
    "https://esa-eodash.github.io/eodashboard-catalog/trilateral/catalog.json",
  routes: [],
  brand: {
    name: " EARTH OBSERVING DASHBOARD",
    shortName: "eodashboard",
    font: {
      link: "style.css",
      family: "Roboto",
    },
    logo: "logo.png",
    theme: {
      colors: {
        primary: "#333",
        secondary: "#333",
        background: "#fff",
        surface: "#fff",
      },
    },
    meta: {
      title: "Earth observing dashboard",
      content: 'Dashboard for ESA, NASA, JAXA EO data examples'
    }
  },
  template: {
    gap: 6,
    background: {
      id: Symbol(),
      type: "internal",
      widget: {
        name: 'EodashMap'
      }
    },
    widgets: [
      tools,
      {
        id: Symbol(),
        type: "internal",
        title: "datepicker",
        layout: { x: 5, y: 11, w: 2, h: 1 },
        widget: {
          name: 'EodashDatePicker',
          props: {
            inline: true,
          },
        }
      },
      basedOnWms(store.states),
      // container(store.states)
    ],
  },
}));
