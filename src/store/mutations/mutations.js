export default {
  // cart
  SET_CART: (state, product) => {
    let isProductExists = false;
    if (state.cart.length) {
      state.cart.map(function (item) {
        if (item.id === product.id) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  CLEAR_ALL_PRODUCT_IN_CART: (state, index) => {
    state.cart.splice(index);
  },
  // banners
  SET_BANNERS_TO_STATE: (state, banners) => {
    state.banners = banners;
  },
  // sidebar
  SET_SIDEBARS_TO_STATE: (state, sidebars) => {
    state.sidebars = sidebars;
  },
  // leaders products
  SET_CARD_LEADERS_TO_STATE: (state, card_leaders_product) => {
    state.card_leaders_product = card_leaders_product;
  },
  // news products
  SET_CARD_NEWS_TO_STATE: (state, card_news_product) => {
    state.card_news_product = card_news_product;
  },
  // id one product
  ID_PRODUCT: (state, payload) => {
    state.id_product = payload;
  },
  // sales products
  SET_CARD_SALE_TO_STATE: (state, card_sale_product) => {
    state.card_sale_product = card_sale_product;
  },
  // search full
  SET_SEARCH_VALUE: (state, value) => {
    state.search_value = value;
  },
};
