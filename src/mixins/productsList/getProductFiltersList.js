const lang = localStorage.getItem("lang") || "uk";
const BASE_URL = process.env.VUE_APP_BASE_URL + lang;
import axios from "axios";

export default {
  created() {
    this.getProperties();
  },
  methods: {
    // query string
    queryStr() {
      this.$router
        .push({
          name: "products",
          query: {
            q: `${this.additional.length ? `&brand=${this.additional}` : ""}${
              this.property.length ? `&property=${this.property}` : ""
            }${this.property_1.length ? `&property=${this.property_1}` : ""}${
              this.property_2.length ? `&property=${this.property_2}` : ""
            }${this.property_3.length ? `&property=${this.property_3}` : ""}${
              this.property_4.length ? `&property=${this.property_4}` : ""
            }${this.property_5.length ? `&property=${this.property_5}` : ""}${
              this.property_6.length ? `&property=${this.property_6}` : ""
            }${this.property_7.length ? `&property=${this.property_7}` : ""}${
              this.property_8.length ? `&property=${this.property_8}` : ""
            }${this.property_9.length ? `&property=${this.property_9}` : ""}${
              this.property_10.length ? `&property=${this.property_10}` : ""
            }${this.property_11.length ? `&property=${this.property_11}` : ""}${
              this.property_12.length ? `&property=${this.property_12}` : ""
            }${this.property_13.length ? `&property=${this.property_13}` : ""}${
              this.property_14.length ? `&property=${this.property_14}` : ""
            }${this.property_15.length ? `&property=${this.property_15}` : ""}${
              this.property_16.length ? `&property=${this.property_16}` : ""
            }${this.property_17.length ? `&property=${this.property_17}` : ""}${
              this.property_18.length ? `&property=${this.property_18}` : ""
            }${this.property_19.length ? `&property=${this.property_19}` : ""}${
              this.minPrice ? `&min_price=${this.minPrice}` : ""
            }${this.maxPrice ? `&max_price=${this.maxPrice}` : ""}${this.sort}${
              this.pageNumber <= 1 ? "" : `&page=${this.pageNumber}`
            }${this.anyInStock === true ? "&any_in_stock=1" : ""}`,
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

    // all characteristics
    async getProperties() {
      await axios
        .get(`/products/filters/?product_type=${this.$route.params.slug}`)
        .then((response) => {
          this.characteristics = response.data;
        });
    },

    // get products
    async getProductsList() {
      await fetch(`${BASE_URL}/products/${this.$route.params.slug}`)
        .then((response) => response.json())
        .then((response) => {
          this.count = response.count;
          this.products = response.results;
        });
    },

    // filters products
    async getFiltersProducts() {
      // this.getProperties();
      this.queryStr();

      // brand
      const brand = this.additional.length
        ? `&brand=${this.additional.join("&brand=")}`
        : "";
      // price
      const minPr = this.minPrice ? `&min_price=${this.minPrice}` : "";
      const maxPr = this.maxPrice ? `&max_price=${this.maxPrice}` : "";
      // properties
      const prop = this.property.length
        ? `&${this.text}` + `${this.property}`
        : "";
      const prop_1 = this.property_1.length
        ? `&${this.text}` + `${this.property_1}`
        : "";
      const prop_2 = this.property_2.length
        ? `&${this.text}` + `${this.property_2}`
        : "";
      const prop_3 = this.property_3.length
        ? `&${this.text}` + `${this.property_3}`
        : "";
      const prop_4 = this.property_4.length
        ? `&${this.text}` + `${this.property_4}`
        : "";
      const prop_5 = this.property_5.length
        ? `&${this.text}` + `${this.property_5}`
        : "";
      const prop_6 = this.property_6.length
        ? `&${this.text}` + `${this.property_6}`
        : "";
      const prop_7 = this.property_7.length
        ? `&${this.text}` + `${this.property_7}`
        : "";
      const prop_8 = this.property_8.length
        ? `&${this.text}` + `${this.property_8}`
        : "";
      const prop_9 = this.property_9.length
        ? `&${this.text}` + `${this.property_9}`
        : "";
      const prop_10 = this.property_10.length
        ? `&${this.text}` + `${this.property_10}`
        : "";
      const prop_11 = this.property_11.length
        ? `&${this.text}` + `${this.property_11}`
        : "";
      const prop_12 = this.property_12.length
        ? `&${this.text}` + `${this.property_12}`
        : "";
      const prop_13 = this.property_13.length
        ? `&${this.text}` + `${this.property_13}`
        : "";
      const prop_14 = this.property_14.length
        ? `&${this.text}` + `${this.property_14}`
        : "";
      const prop_15 = this.property_15.length
        ? `&${this.text}` + `${this.property_15}`
        : "";
      const prop_16 = this.property_16.length
        ? `&${this.text}` + `${this.property_16}`
        : "";
      const prop_17 = this.property_17.length
        ? `&${this.text}` + `${this.property_17}`
        : "";
      const prop_18 = this.property_18.length
        ? `&${this.text}` + `${this.property_18}`
        : "";
      const prop_19 = this.property_19.length
        ? `&${this.text}` + `${this.property_19}`
        : "";
      // any in stock
      const anyStock = this.anyInStock === true ? `&any_in_stock=1` : "";
      // page number
      const page = this.pageNumber > 1 ? `&page=${this.pageNumber}` : "";

      await fetch(
        `${BASE_URL}/products/${this.$route.params.slug}/?${page}${brand}${this.sort}${minPr}${maxPr}${prop}${prop_1}${prop_2}${prop_3}${prop_4}${prop_5}${prop_6}${prop_7}${prop_8}${prop_9}${prop_10}${prop_11}${prop_12}${prop_13}${prop_14}${prop_15}${prop_16}${prop_17}${prop_18}${prop_19}${anyStock}`,
        {
          headers: {
            "Accept-Language": lang,
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
