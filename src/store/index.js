import Vue from "vue";
import Vuex from "vuex";

import commonActions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";
import createPersistedState from "vuex-persistedstate";
import user from "./user";
import userGoogle from "./userLoginGoogle";

const actions = { ...commonActions, ...apiRequests };

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    id_product: {},
    banners: [],
    sidebars: [],
    card_leaders_product: [],
    card_news_product: [],
    orders_product: "",
    card_sale_product: [],
    id_token_social_google: "",
    access_token_social_google: "",
    access_token_social_facebook: "",
    search_value: "",
    favorites: [],
  },
  mutations,
  actions,
  getters,
  modules: {
    user,
    userGoogle,
  },
  plugins: [createPersistedState()],
});
