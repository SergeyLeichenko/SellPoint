export default {
  data: () => {
    return {
      products: [],
      page: 1,
      count: "",
      pageNumber: "",
    };
  },
  created() {
    if (sessionStorage.getItem("products") && sessionStorage.getItem("count")) {
      this.products = JSON.parse(sessionStorage.getItem("products"));
      this.count = JSON.parse(sessionStorage.getItem("count"));
    } else {
      // this.loadListProduct(sessionStorage.getItem("pageNumber"));
      this.getProductsList();
    }
  },
  methods: {
    // pagination
    async loadListProduct(pageNumber) {
      this.pageNumber = pageNumber;

      await this.getFiltersProducts();

      sessionStorage.setItem("pageNumber", pageNumber);
    },
  },
  mounted() {
    // page number
    if (sessionStorage.getItem("pageNumber")) {
      try {
        this.pageNumber = sessionStorage.getItem("pageNumber");
      } catch (e) {
        sessionStorage.removeItem("pageNumber");
      }
    }
  },
};
