import axios from "axios";

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
      await this.getFiltersProducts();

      if (this.anyInStock === true) {
        await axios
          .get(
            `/products/filters/?product_type=${this.$route.params.slug}&in_stock=1`
          )
          .then((response) => {
            this.characteristics = response.data;
          });
      } else {
        await this.getProperties();
      }
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
