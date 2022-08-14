export default {
  // cart
  ADD_TO_CART({ commit }, product) {
    commit("SET_CART", product);
  },
  DELETE_FROM_CART({ commit }, index) {
    commit("REMOVE_FROM_CART", index);
  },
  INCREMENT_CART_ITEM({ commit }, index) {
    commit("INCREMENT", index);
  },
  DECREMENT_CART_ITEM({ commit }, index) {
    commit("DECREMENT", index);
  },
  CLEAR_ALL_IN_CART({ commit }, index) {
    commit("CLEAR_ALL_PRODUCT_IN_CART", index);
  },
  // id one product
  ADD_ID_PRODUCT({ commit }, payload) {
    commit("ID_PRODUCT", payload);
  },
  // search full
  GET_SEARCH_VALUE({ commit }, value) {
    commit("SET_SEARCH_VALUE", value);
  },
};
