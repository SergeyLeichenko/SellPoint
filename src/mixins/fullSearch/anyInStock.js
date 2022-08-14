export default {
  data: () => {
    return {
      anyInStock: false,
      openListAnyInStock: true,
    };
  },
  methods: {
    // any in stock btn
    async checkAnyInStock() {
      sessionStorage.setItem("anyInStock", JSON.stringify(this.anyInStock));
      await this.getProductsFilters();
    },
  },
  mounted() {
    if (sessionStorage.getItem("anyInStock")) {
      try {
        this.anyInStock = JSON.parse(sessionStorage.getItem("anyInStock"));
      } catch (e) {
        sessionStorage.removeItem("anyInStock");
      }
    }
  },
};
