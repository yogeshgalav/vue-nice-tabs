
import VueNiceTabs from "./VueNiceTabs.vue";

export const Autocomplete = {
  install: (app, options) => {
    app.component("Tabs", VueNiceTabs);
  }
};

export default VueNiceTabs;
