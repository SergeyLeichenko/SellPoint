import Vue from "vue";
import VueRouter from "vue-router";
import qs from "qs";
import Home from "../views/Index.vue";
import Cabinet from "../views/Cabinet.vue";
import Order from "../views/Order.vue";
import Products from "../views/Products.vue";
import Overview from "../views/Overview.vue";
import Contacts from "../views/Contacts.vue";
import Exchange from "../views/Exchange.vue";
import Credit from "../views/Credit.vue";
import Delivery from "../views/Delivery.vue";
import AboutUs from "../views/About-Us.vue";
import Search from "../views/Search.vue";
import Cooperation from "../views/Cooperation.vue";
import News from "../views/News.vue";
import Personal from "../views/PersonalData.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  hashbang: false,
  history: true,
  base: process.env.BASE_URL,
  // query params
  stringifyQuery: (query) => {
    let result = qs.stringify(query, {
      arrayFormat: "repeat",
      format: "RFC1738",
    });
    return result ? "?" + result : "";
  },
  // end query params
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/product/:slug/",
      name: "product",
      component: Overview,
      params: "slug",
    },
    {
      path: "/search/full/",
      name: "search",
      component: Search,
    },
    {
      path: "/profile",
      name: "profile",
      component: Cabinet,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
    },
    {
      path: "/products/:slug/",
      name: "products",
      component: Products,
      params: "slug",
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/exchange",
      name: "exchange",
      component: Exchange,
    },
    {
      path: "/credit",
      name: "credit",
      component: Credit,
    },
    {
      path: "/delivery",
      name: "delivery",
      component: Delivery,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/cooperation",
      name: "cooperation",
      component: Cooperation,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/personal",
      name: "personal",
      component: Personal,
    },
    {
      path: "/404",
      name: "error",
      component: Error,
    },
    {
      path: "*/*",
      redirect: { name: "error" },
    },
  ],
});
export default router;
