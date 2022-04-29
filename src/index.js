import VueNiceTabs from "./VueNiceTabs.js";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.use(VueNiceTabs);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueNiceTabs.install = install;

export default VueNiceTabs;