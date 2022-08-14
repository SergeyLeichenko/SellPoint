export default {
  data: () => {
    return {
      sort: "",
    };
  },
  methods: {
    //sorting and another filter
    async uniqueCheckSortFull(index) {
      if (index === 0) {
        sessionStorage.setItem("-price", "&price=-price");
        sessionStorage.removeItem("price");
        sessionStorage.removeItem("-avg_rating");
        sessionStorage.removeItem("-sale_price");

        this.sort = "&price=-price";

        await this.getProductsFilters();
      } else if (index === 1) {
        sessionStorage.setItem("price", "&price=price");
        sessionStorage.removeItem("-price");
        sessionStorage.removeItem("-avg_rating");
        sessionStorage.removeItem("-sale_price");

        this.sort = "&price=price";

        await this.getProductsFilters();
      } else if (index === 2) {
        sessionStorage.setItem("-avg_rating", "&rating=-avg_rating");
        sessionStorage.removeItem("-price");
        sessionStorage.removeItem("price");
        sessionStorage.removeItem("-sale_price");

        this.sort = "&rating=-avg_rating";

        await this.getProductsFilters();
      } else if (index === 3) {
        sessionStorage.setItem("sale_price", "&sale_price=price");
        sessionStorage.removeItem("-price");
        sessionStorage.removeItem("price");
        sessionStorage.removeItem("-avg_rating");

        this.sort = "&sale_price=price";

        await this.getProductsFilters();
      } else {
        await this.getProducts();
      }
    },
  },
  mounted() {
    // sort
    if (
      sessionStorage.getItem("-sale_price") ||
      sessionStorage.getItem("-avg_rating") ||
      sessionStorage.getItem("-price") ||
      sessionStorage.getItem("price")
    ) {
      try {
        this.sort =
          sessionStorage.getItem("-sale_price") ||
          sessionStorage.getItem("-avg_rating") ||
          sessionStorage.getItem("-price") ||
          sessionStorage.getItem("price");
      } catch (e) {
        sessionStorage.removeItem("-price");
        sessionStorage.removeItem("price");
        sessionStorage.removeItem("-avg_rating");
        sessionStorage.removeItem("-sale_price");
      }
    }
  },
};
