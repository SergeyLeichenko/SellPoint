import { mapActions } from "vuex";
export default {
  data: () => {
    return {
      viewedProducts: [],
    };
  },
  methods: {
    ...mapActions(["ADD_ID_PRODUCT"]),
    addOverview(data) {
      this.ADD_ID_PRODUCT(data.id);
      let isProductExists = false;
      if (this.viewedProducts.length) {
        this.viewedProducts.map(function (item) {
          if (item.id === data.id) {
            isProductExists = true;
          }
        });
        if (!isProductExists) {
          this.viewedProducts.push(data);
          this.saveViewedProducts();
        }
      } else {
        this.viewedProducts.push(data);
        this.saveViewedProducts();
      }
      if (this.viewedProducts.length > 6) {
        this.removeViewedProducts();
      }
    },
    // remove user viewed one product
    removeViewedProducts(x) {
      this.viewedProducts.splice(x, 1);
      this.saveViewedProducts();
    },
    // save user viewed products
    saveViewedProducts() {
      const parsed = JSON.stringify(this.viewedProducts);
      localStorage.setItem("viewedProducts", parsed);
    },
  },
  mounted() {
    // user viewed products
    if (localStorage.getItem("viewedProducts")) {
      try {
        this.viewedProducts = JSON.parse(
          localStorage.getItem("viewedProducts")
        );
      } catch (e) {
        localStorage.removeItem("viewedProducts");
      }
    }
  },
};
