const VueScrollTo = require("vue-scrollto");
import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import BootstrapVue from "bootstrap-vue";
import VueTinySlider from "vue-tiny-slider";
import Tabs from "vue-tabs-component";
import ApiPlugin from "./plugins/api";
import LoadPlugin from "./plugins/load";
import vSelect from "vue-select";
import { i18n } from "./plugins/i18n";
import GoogleAuth from "@/config/google_oAuth.js";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import L from "leaflet";
import VueMeta from "vue-meta";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "tiny-slider/src/tiny-slider.scss";
import "vue-select/src/scss/vue-select.scss";
import "leaflet/dist/leaflet.css";

import "@/assets/style/main.scss";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

Vue.use(VueMeta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

const lang = localStorage.getItem("lang") || "uk";
axios.defaults.headers["Accept-Language"] = lang;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL + lang;
axios.defaults.withCredentials = true;

Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
Vue.use(GoogleAuth, {
  clientId: process.env.VUE_APP_GOOGLE_ID,
  scope: "profile email",
  prompt: "select_account",
});
Vue.use(VueAxios, axios);
Vue.use(ApiPlugin);
Vue.use(LoadPlugin);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.component("tiny-slider", VueTinySlider);
Vue.use(Tabs);

Vue.component("CartItem", require("@/components/home/Cart-Item.vue").default);
Vue.component(
  "DetailItem",
  require("@/components/overview/detail/Detail-Item.vue").default
);
Vue.component("TakeIn", require("@/components/overview/TakeIn.vue").default);
Vue.component(
  "Description",
  require("@/components/overview/tabs/Description.vue").default
);
Vue.component(
  "Characteristics",
  require("@/components/overview/tabs/characteris/Characteristics.vue").default
);
Vue.component(
  "Reviews",
  require("@/components/overview/tabs/reviews/Reviews.vue").default
);
Vue.component(
  "Accessories",
  require("@/components/overview/tabs/Accessories.vue").default
);
Vue.component(
  "CartEmpty",
  require("@/components/messages/Cart-Empty.vue").default
);
Vue.component(
  "NoRegister",
  require("@/components/home/No-Register.vue").default
);
Vue.component(
  "MyProduct",
  require("@/components/person-account/product_show/MyProduct.vue").default
);
Vue.component("v-select", vSelect);
Vue.component(
  "Notification",
  require("@/components/messages/Notification.vue").default
);
Vue.component("Step", require("@/components/overview/Step.vue").default);
Vue.component("Language", require("@/components/home/Lang.vue").default);
Vue.component(
  "ColorsItem",
  require("@/components/overview/detail/colors/Colors-Item.vue").default
);
Vue.component(
  "Slider",
  require("@/components/overview/detail/slider/Slider.vue").default
);
Vue.component(
  "MiniParamether",
  require("@/components/products/MiniParamether.vue").default
);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
