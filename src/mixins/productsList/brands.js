export default {
  data() {
    return {
      additional: [],
      produsers: [],
      searchProducer: "",
      isActiveBrand: [],
      isShowItem: [],
      openListBrand: false,
    };
  },
  created() {
    //brands
    this.$load(async () => {
      await this.$api.filtersBrand
        .get(this.$route.params.slug)
        .then((response) => {
          this.produsers = response.data;
        });
    });
  },
  computed: {
    // search brands
    searchBrands() {
      return this.produsers.filter((elem) => {
        return elem.name
          .toLowerCase()
          .includes(this.searchProducer.toLowerCase());
      });
    },
  },
  methods: {
    //filter brands
    async uniqueCheckBrands(index) {
      this.$set(this.isActiveBrand, index, !this.isActiveBrand[index]);
      this.$set(this.isShowItem, index, !this.isShowItem[index]);
      sessionStorage.setItem(
        "isActiveBrand",
        JSON.stringify(this.isActiveBrand)
      );
      sessionStorage.setItem("isShowItem", JSON.stringify(this.isShowItem));
      sessionStorage.setItem("additional", JSON.stringify(this.additional));

      if (this.additional.length) {
        await this.getFiltersProducts();
      } else if (!this.additional.length) {
        sessionStorage.removeItem("additional");
        await this.getFiltersProducts();
      } else {
        await this.getProductsList();
      }
    },
  },
  mounted() {
    // active brands
    if (
      sessionStorage.getItem("isActiveBrand") &&
      sessionStorage.getItem("isShowItem") &&
      sessionStorage.getItem("additional")
    ) {
      try {
        this.isActiveBrand = JSON.parse(
          sessionStorage.getItem("isActiveBrand")
        );
        this.isShowItem = JSON.parse(sessionStorage.getItem("isShowItem"));
        this.additional = JSON.parse(sessionStorage.getItem("additional"));
      } catch (e) {
        sessionStorage.removeItem("isActiveBrand");
        sessionStorage.removeItem("isShowItem");
        sessionStorage.removeItem("additional");
      }
    }
  },
};
