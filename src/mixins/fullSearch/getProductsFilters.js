const lang = localStorage.getItem("lang") || "uk";
const BASE_URL = process.env.VUE_APP_BASE_URL + lang;

export default {
  methods: {
    // query string
    queryStr() {
      this.$router
        .replace({
          name: "search",
          query: {
            q: `${this.SEARCH_VALUE}${
              this.minPrice > 0 ? `&min_price=${this.minPrice}` : ""
            }${this.maxPrice < 999999 ? `&max_price=${this.maxPrice}` : ""}${
              this.sort
            }${this.pageNumber <= 1 ? "" : `&page=${this.pageNumber}`}${
              this.anyInStock === true ? "&any_in_stock=" : ""
            }`,
          },
        })
        .catch((err) => {
          if (
            err.name !== "NavigationDuplicated" &&
            !err.message.includes(
              "Avoided redundant navigation to current location"
            )
          );
        });
    },

    // get products
    async getProducts() {
      this.queryStr();

      await fetch(
        `${BASE_URL}/products/search/full/?q=${this.SEARCH_VALUE}${this.pageNumber}`,
        {
          headers: {
            "content-language": lang,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          sessionStorage.setItem("products", JSON.stringify(response.results));
          sessionStorage.setItem("count", JSON.stringify(response.count));
          this.count = response.count;
          this.products = response.results;
        });
    },

    // filters products
    async getProductsFilters() {
      this.queryStr();

      // price
      const minPr = this.minPrice ? `&min_price=${this.minPrice}` : "";
      const maxPr = this.maxPrice ? `&max_price=${this.maxPrice}` : "";

      // any in stock
      const anyStock = this.anyInStock === true ? `&any_in_stock=1` : "";
      // page number
      const page = `&page=${this.pageNumber}`;

      // sorting
      // this.sortPriceUp = this.sort === true ? "&price=-price" : "";

      await fetch(
        `${BASE_URL}/products/search/full/?q=${this.SEARCH_VALUE}${page}${anyStock}${minPr}${maxPr}${this.sort}`,
        {
          headers: {
            "content-language": lang,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          sessionStorage.setItem("products", JSON.stringify(response.results));
          sessionStorage.setItem("count", JSON.stringify(response.count));
          this.count = response.count;
          this.products = response.results;
        });
    },
  },
};
