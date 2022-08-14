export default {
  methods: {
    removeAllCheck() {
      this.$router.replace({
        query: "",
      });
      // brands
      sessionStorage.removeItem("isActiveBrand");
      sessionStorage.removeItem("isShowItem");
      sessionStorage.removeItem("additional");
      // properties
      sessionStorage.removeItem("property");
      sessionStorage.removeItem("isProperty");
      sessionStorage.removeItem("isShowItemProperty");
      sessionStorage.removeItem("property_1");
      sessionStorage.removeItem("isProperty_1");
      sessionStorage.removeItem("isShowItemProperty_1");
      sessionStorage.removeItem("property_2");
      sessionStorage.removeItem("isProperty_2");
      sessionStorage.removeItem("isShowItemProperty_2");
      sessionStorage.removeItem("property_3");
      sessionStorage.removeItem("isProperty_3");
      sessionStorage.removeItem("isShowItemProperty_3");
      sessionStorage.removeItem("property_4");
      sessionStorage.removeItem("isProperty_4");
      sessionStorage.removeItem("isShowItemProperty_4");
      sessionStorage.removeItem("property_5");
      sessionStorage.removeItem("isProperty_5");
      sessionStorage.removeItem("isShowItemProperty_5");
      sessionStorage.removeItem("property_6");
      sessionStorage.removeItem("isProperty_6");
      sessionStorage.removeItem("isShowItemProperty_6");
      sessionStorage.removeItem("property_7");
      sessionStorage.removeItem("isProperty_7");
      sessionStorage.removeItem("isShowItemProperty_7");
      sessionStorage.removeItem("property_8");
      sessionStorage.removeItem("isProperty_8");
      sessionStorage.removeItem("isShowItemProperty_8");
      sessionStorage.removeItem("property_9");
      sessionStorage.removeItem("isProperty_9");
      sessionStorage.removeItem("isShowItemProperty_9");
      sessionStorage.removeItem("property_10");
      sessionStorage.removeItem("isProperty_10");
      sessionStorage.removeItem("isShowItemProperty_10");
      sessionStorage.removeItem("property_11");
      sessionStorage.removeItem("isProperty_11");
      sessionStorage.removeItem("isShowItemProperty_11");
      sessionStorage.removeItem("property_12");
      sessionStorage.removeItem("isProperty_12");
      sessionStorage.removeItem("isShowItemProperty_12");
      sessionStorage.removeItem("property_13");
      sessionStorage.removeItem("isProperty_13");
      sessionStorage.removeItem("isShowItemProperty_13");
      sessionStorage.removeItem("property_14");
      sessionStorage.removeItem("isProperty_14");
      sessionStorage.removeItem("isShowItemProperty_14");
      sessionStorage.removeItem("property_15");
      sessionStorage.removeItem("isProperty_15");
      sessionStorage.removeItem("isShowItemProperty_15");
      sessionStorage.removeItem("property_16");
      sessionStorage.removeItem("isProperty_16");
      sessionStorage.removeItem("isShowItemProperty_16");
      sessionStorage.removeItem("property_17");
      sessionStorage.removeItem("isProperty_17");
      sessionStorage.removeItem("isShowItemProperty_17");
      sessionStorage.removeItem("property_18");
      sessionStorage.removeItem("isProperty_18");
      sessionStorage.removeItem("isShowItemProperty_18");
      sessionStorage.removeItem("property_19");
      sessionStorage.removeItem("isProperty_19");
      sessionStorage.removeItem("isShowItemProperty_19");
      //price
      sessionStorage.removeItem("minPrice");
      sessionStorage.removeItem("maxPrice");
      // products
      sessionStorage.removeItem("products");
      sessionStorage.removeItem("count");
      sessionStorage.setItem("pageNumber", 1);
      // sort
      sessionStorage.removeItem("-price");
      sessionStorage.removeItem("price");
      sessionStorage.removeItem("-avg_rating");
      sessionStorage.removeItem("sale_price");
      // any in stock
      sessionStorage.removeItem("anyInStock");
      location.reload();
      // active link navbar
      sessionStorage.removeItem("activeLink");
      // max price product
      sessionStorage.removeItem("max_price_product");
    },
  },
};
