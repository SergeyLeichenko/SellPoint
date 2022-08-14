import { mapActions } from "vuex";

export default {
  data: () => {
    return {
      messages: [],
    };
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data).then(() => {
        let timeStamp = Date.now();
        this.messages.push({
          name: this.$t("added_product_in_cart"),
          id: timeStamp,
        });
      });
    },
  },
};
