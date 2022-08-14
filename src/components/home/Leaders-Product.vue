<template>
  <div>
    <Notification :messages="messages" :timeout="4000" />

    <!-- modal login -->
    <div class="modal-content-form" v-if="showModalForm">
      <AuthForm @showModalForm="showModalForm = false" />
    </div>
    <!-- end modal login -->

    <!-- leaders products -->
    <section class="leaders" v-if="this.CARD_LEADERS_PRODUCT.length">
      <div class="wrap">
        <h2 class="leaders__title">
          {{ $t("title_liders") }}
        </h2>
        <div class="leaders-tab">
          <!-- Tab content -->
          <div class="tabcontent">
            <div class="tabcontent__block">
              <card-product-item
                v-for="(product, index) in CARD_LEADERS_PRODUCT"
                :key="index"
                :product_data="product"
                @addToCart="addToCart"
                @addOverview="addOverview"
                @addFavorite="addFavorite"
                @removeFavorite="removeFavorite(product)"
                @openLoginForm="showForm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- news products -->
    <section class="leaders" v-if="this.CARD_NEWS_PRODUCT.length">
      <div class="wrap">
        <h2 class="leaders__title">
          {{ $t("title_news") }}
        </h2>
        <div class="leaders-tab">
          <!-- Tab content -->
          <div class="tabcontent">
            <div class="tabcontent__block">
              <card-product-item
                v-for="(product, index) in CARD_NEWS_PRODUCT"
                :key="index"
                :product_data="product"
                @addToCart="addToCart"
                @addOverview="addOverview"
                @addFavorite="addFavorite"
                @removeFavorite="removeFavorite(product)"
                @openLoginForm="showForm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- sales products -->
    <section class="leaders" v-if="this.CARD_SALE_PRODUCT.length">
      <div class="wrap">
        <h2 class="leaders__title">
          {{ $t("title_sale") }}
        </h2>
        <div class="leaders-tab">
          <!-- Tab content -->
          <div class="tabcontent">
            <div class="tabcontent__block">
              <card-product-item
                v-for="(product, index) in CARD_SALE_PRODUCT"
                :key="index"
                :product_data="product"
                @addToCart="addToCart"
                @addOverview="addOverview"
                @addFavorite="addFavorite"
                @removeFavorite="removeFavorite(product)"
                @openLoginForm="showForm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- viewed products -->
    <section class="leaders" v-if="this.viewedProducts.length">
      <div class="wrap">
        <h2 class="leaders__title">
          {{ $t("title_viewed") }}
        </h2>
        <div class="leaders-tab">
          <!-- Tab content -->
          <div class="tabcontent">
            <div class="tabcontent__block">
              <card-product-item
                v-for="(product, index) in viewedProducts"
                :key="index"
                :product_data="product"
                @addToCart="addToCart"
                @addOverview="addOverview"
                class="viewed-product"
                @addFavorite="addFavorite"
                @removeFavorite="removeFavorite(product)"
                @openLoginForm="showForm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardProductItem from "./Card-Product-Item.vue";
import Notification from "@/components/messages/Notification";
import AuthForm from "@/components/auth/AuthForm";
import ViewProduct from "@/mixins/viewedProducts";
import Cart from "@/mixins/cart";
import Favorites from "@/mixins/favorites";
import Auth from "@/mixins/auth";
export default {
  name: "v-leaders-product",
  mixins: [ViewProduct, Cart, Favorites, Auth],
  components: {
    CardProductItem,
    Notification,
    AuthForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "CARD_LEADERS_PRODUCT",
      "CARD_NEWS_PRODUCT",
      "CARD_SALE_PRODUCT",
    ]),
  },
  methods: {
    ...mapActions([
      "GET_CARD_LEADERS_FROM_API",
      "GET_CARD_NEWS_FROM_API",
      "GET_CARD_SALE_FROM_API",
    ]),
  },
  mounted() {
    this.GET_CARD_LEADERS_FROM_API();
    this.GET_CARD_NEWS_FROM_API();
    this.GET_CARD_SALE_FROM_API();
  },
};
</script>

<style lang="scss" scoped></style>
