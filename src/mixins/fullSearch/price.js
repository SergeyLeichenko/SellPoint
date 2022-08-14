export default {
  data: () => {
    return {
      minPrice: 0,
      maxPrice: 999999,
      maxP: 999999,
      minP: 0,
      openListPrice: true,
    };
  },
  methods: {
    async setPrice() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }

      sessionStorage.setItem("minPrice", JSON.stringify(this.minPrice));
      sessionStorage.setItem("maxPrice", JSON.stringify(this.maxPrice));

      await this.getProductsFilters();
    },
    priceInput(e) {
      const slider = this.$refs.sliderTrack;
      let priceGrap = 0;

      if (this.maxPrice - this.minPrice >= priceGrap) {
        slider.style.left = (this.minPrice / e.target.max) * 100 + "%";
        slider.style.right = 100 - (this.maxPrice / e.target.max) * 100 + "%";
      }
    },
    rangeInput(e) {
      const slider = this.$refs.sliderTrack;
      let priceGrap = 0;

      if (this.maxPrice - this.minPrice < priceGrap) {
        if (e.target.className === "range-min") {
          // if active slider is min slider
          this.minPrice = this.maxPrice - priceGrap;
        } else {
          this.maxPrice = this.minPrice + priceGrap;
        }
      } else {
        slider.style.left = (this.minPrice / e.target.max) * 100 + "%";
        slider.style.right = 100 - (this.maxPrice / e.target.max) * 100 + "%";
      }
    },
  },
  mounted() {
    // active price
    if (
      sessionStorage.getItem("minPrice") &&
      sessionStorage.getItem("maxPrice")
    ) {
      try {
        this.minPrice = JSON.parse(sessionStorage.getItem("minPrice"));
        this.maxPrice = JSON.parse(sessionStorage.getItem("maxPrice"));
      } catch (e) {
        sessionStorage.removeItem("minPrice");
        sessionStorage.removeItem("maxPrice");
      }
    }
  },
};
