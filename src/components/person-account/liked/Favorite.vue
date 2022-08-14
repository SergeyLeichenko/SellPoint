<template>
  <div>
    <Notification :messages="messages" :timeout="4000" />
    <div class="personal-history__title">
      <h2>{{ $t("cabinet.sidebar.favorite") }}</h2>
    </div>

    <History-Favorite v-if="!FAVORITE.length" />
    <div class="favorite">
      <card-product-item
        v-for="(product, index) in FAVORITE"
        :key="index"
        :product_data="product"
        @addToCart="addToCart"
        @addOverview="addOverview"
        @addFavorite="addFavorite"
        @removeFavorite="removeFavorite(index, product)"
      />
    </div>
  </div>
</template>

<script>
import HistoryFavorite from "@/components/messages/History-Favorite";
import CardProductItem from "@/components/home/Card-Product-Item.vue";
import Notification from "@/components/messages/Notification";
import ViewProduct from "@/mixins/viewedProducts";
import Cart from "@/mixins/cart";
import Favorite from "@/mixins/favorites";
export default {
  name: "my-review",
  mixins: [ViewProduct, Cart, Favorite],
  components: {
    HistoryFavorite,
    CardProductItem,
    Notification,
  },
};
</script>

<style lang="scss" scoped>
.favorite {
  display: flex;
  flex-wrap: wrap;
}
</style>
