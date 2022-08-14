import axios from "axios";

export default {
  GET_BANNERS_FROM_API({ commit }) {
    return axios("home/banners/", {
      method: "GET",
    })
      .then((banners) => {
        commit("SET_BANNERS_TO_STATE", banners.data);
        return banners;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_SIDEBARS_FROM_API({ commit }) {
    return axios("home/catalogs/", {
      method: "GET",
    })
      .then((sidebars) => {
        commit("SET_SIDEBARS_TO_STATE", sidebars.data);
        return sidebars;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_CARD_LEADERS_FROM_API({ commit }) {
    return axios("products/home/?q=leader", {
      method: "GET",
    })
      .then((card_leaders_product) => {
        commit("SET_CARD_LEADERS_TO_STATE", card_leaders_product.data);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_CARD_NEWS_FROM_API({ commit }) {
    return axios("products/home/?q=new", {
      method: "GET",
    })
      .then((card_news_product) => {
        commit("SET_CARD_NEWS_TO_STATE", card_news_product.data);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_CARD_SALE_FROM_API({ commit }) {
    return axios("products/home/?q=sales", {
      method: "GET",
    })
      .then((card_sale_product) => {
        commit("SET_CARD_SALE_TO_STATE", card_sale_product.data);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
