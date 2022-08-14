<template>
  <div>
    <Notification :messages="messages" :timeout="4000" />
    <div class="personal-history__title">
      <h2>{{ $t("cabinet.show_products.title") }}</h2>
    </div>
    <div class="personal-history__block personal-history__block-overview pd">
      <div class="personal-order" v-if="getUser">
        <History-Product
          v-if="!viewedProducts.length"
          class="viewedProdMessage"
        />
        <card-product-item
          v-for="(product, index) in viewedProducts"
          :key="index"
          :product_data="product"
          @addToCart="addToCart"
          @addOverview="addOverview"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HistoryProduct from "@/components/messages/History-Product";
import CardProductItem from "@/components/home/Card-Product-Item.vue";
import { mapGetters } from "vuex";
import Notification from "@/components/messages/Notification";
import ViewProduct from "@/mixins/viewedProducts";
import Cart from "@/mixins/cart";
export default {
  name: "my-review",
  mixins: [ViewProduct, Cart],
  components: {
    HistoryProduct,
    CardProductItem,
    Notification,
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
};
</script>

<style lang="scss" scoped>
.personal-revised {
  padding-top: 0;
}
.viewedProdMessage {
  width: 100%;
}
</style>
