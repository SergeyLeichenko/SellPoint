<template>
  <div class="container_widg">
    <div class="widg-prod">
      <!-- liked -->
      <!-- <div class="widg-prod__liked" :class="{
        elOpacity: this.product_data.status === '5 Not In Stock',
      }">
        <div class="widg-prod__liked_product" v-if="getUser">
          <i
            class="fas fa-heart heart-red"
            @click="removeFavorite"
            v-if="isActiveHeart"
          ></i>
          <i class="far fa-heart" v-else @click="addFavorite"></i>
        </div>
        <div class="widg-prod__liked_product" v-else>
          <i class="far fa-heart" @click="$emit('openLoginForm')"></i>
        </div>
      </div> -->
      <!-- end liked -->

      <!-- image -->
      <div
        class="widg-prod__img"
        :class="{
          elOpacity: this.product_data.status === '5 Not In Stock',
        }"
      >
        <a
          :href="
            $router.resolve({
              name: 'product',
              params: { slug: product_data.slug },
            }).href
          "
        >
          <img :src="product_data.image" alt="images" @click="addOverview" />
          <p class="action" v-if="action">{{ $t("card.action") }}</p>
        </a>
      </div>
      <!-- end image -->

      <!-- title -->
      <div
        class="widg-prod__title"
        :class="{
          elOpacity: this.product_data.status === '5 Not In Stock',
        }"
      >
        <a
          :href="
            $router.resolve({
              name: 'product',
              params: { slug: product_data.slug },
            }).href
          "
        >
          <p @click="addOverview">{{ product_data.title }}</p>
        </a>
      </div>
      <!-- end title -->

      <!-- ratting -->
      <div
        class="widg-prod__comment-rating"
        :class="{
          elOpacity: this.product_data.status === '5 Not In Stock',
        }"
      >
        <div class="rating">
          <i class="fas fa-thumbs-up"></i>
          <i class="fas fa-thumbs-up"></i>
          <i class="fas fa-thumbs-up"></i>
          <i class="fas fa-thumbs-up"></i>
          <i class="fas fa-thumbs-up"></i>
          <div class="pointer-checked">
            <img
              :src="src"
              v-for="img in product_data.avg_rating"
              :key="img"
              class="pointer-up"
            />
          </div>
        </div>
        <div class="comment">
          <i class="fas fa-comment-dots"></i>
          <span class="commnet-all">{{ product_data.reviews_count }}</span>
        </div>
      </div>
      <!-- end ratting -->

      <!-- colors -->
      <div
        class="widg-prod__colors"
        :class="{
          elOpacity: this.product_data.status === '5 Not In Stock',
        }"
      >
        <ul class="widg-prod__colors_block">
          <li
            class="widg-prod__colors_block_list"
            v-for="(color, index) in product_data.versions"
            :key="index"
          >
            <ColorsItem
              v-for="(col, index) in color.version_product"
              :key="index"
              :colors_data_item="col"
              :result_slug="product_data.slug"
            />
          </li>
        </ul>
      </div>
      <!-- end colors -->

      <!-- status -->
      <div class="widg-prod__status">
        <div class="widg-prod__status_btn">
          <a
            href="#"
            class="status-green"
            v-if="product_data.status === '2 In stock'"
            >{{ $t("card.available") }} &#10004;
          </a>
          <a
            href="#"
            class="status-pink"
            v-if="product_data.status === '4 Under the order'"
            >{{ $t("card.under") }}</a
          >
          <a
            href="#"
            class="status-pink"
            v-if="product_data.status === '3 Ends'"
            >{{ $t("card.ends") }}</a
          >
          <a
            href="#"
            class="status-black"
            v-if="product_data.status === '5 Not In Stock'"
            >{{ $t("card.not_available") }}</a
          >
          <a
            href="#"
            class="status-blue"
            v-if="product_data.status === '1 Ready to ship'"
            >{{ $t("card.ready") }}</a
          >
          <a
            href="#"
            class="status-orange"
            v-if="product_data.status === '2 Is expected'"
            >{{ $t("card.expected") }}</a
          >
        </div>
        <div class="widg-prod__status_btn-right">
          <!-- event new product -->
          <div
            class="status-btn bg-green"
            v-if="product_data.event === 'New product'"
          >
            <p>{{ $t("card.novelty") }}</p>
          </div>
          <div
            class="status-btn bg-green"
            v-if="product_data.event === 'Home New product'"
          >
            <p>{{ $t("card.novelty") }}</p>
          </div>
          <!-- end event new product -->
          <!-- event sales -->
          <div class="status-btn bg-red" v-if="product_data.event === 'Sales'">
            <p>{{ $t("card.promotional") }}</p>
          </div>
          <div
            class="status-btn bg-red"
            v-if="product_data.event === 'Home Sales'"
          >
            <p>{{ $t("card.promotional") }}</p>
          </div>
          <!-- end event sales -->
          <!-- event leader -->
          <div
            class="status-btn bg-yellow"
            v-if="product_data.event === 'Sale leader'"
          >
            <p>{{ $t("card.sales") }}</p>
          </div>
          <div
            class="status-btn bg-yellow"
            v-if="product_data.event === 'Home Sale leader'"
          >
            <p>{{ $t("card.sales") }}</p>
          </div>
          <!-- end event leader -->
        </div>
      </div>
      <!-- end status -->

      <!-- sale -->
      <div class="widg-prod__sale" v-if="product_data.event === 'Sales'">
        <span class="old-price"
          ><strike>{{
            product_data.price | toFix | formattedPrice
          }}</strike></span
        >
        <span class="sale-price"
          >{{ $t("products.sales") }}
          {{ product_data.difference | toFix | formattedPrice }}
          &#8372;</span
        >
      </div>

      <div
        class="widg-prod__new-price"
        v-if="
          product_data.status === '5 Not In Stock' &&
          product_data.any_in_stock === true
        "
      >
        <!-- any_in_stock block -->
        <p class="new-price" v-if="product_data.any_in_stock === true">
          <span>{{ product_data.actual_price | toFix | formattedPrice }}</span>
          &#8372;
        </p>

        <!-- event sales show block -->
        <p class="new-price" v-else-if="product_data.event === 'Sales'">
          <span>{{ product_data.actual_price | toFix | formattedPrice }}</span>
          &#8372;
        </p>
        <!-- else show block -->
        <p class="new-price" v-else>
          <span>{{ product_data.actual_price | toFix | formattedPrice }}</span>
          &#8372;
        </p>
      </div>
      <div
        class="widg-prod__new-price"
        :class="{
          elOpacity: this.product_data.status === '5 Not In Stock',
        }"
      >
        <!-- status not in stock hide block -->
        <p class="hide" v-if="product_data.status === '5 Not In Stock'">
          <span>{{ product_data.actual_price | toFix | formattedPrice }}</span>
          &#8372;
        </p>

        <!-- event sales show block -->
        <p class="new-price" v-else-if="product_data.event === 'Sales'">
          <span>{{ product_data.actual_price | toFix | formattedPrice }}</span>
          &#8372;
        </p>
        <!-- else show block -->
        <p class="new-price" v-else>
          <span>{{ product_data.actual_price | toFix | formattedPrice }}</span>
          &#8372;
        </p>
      </div>
      <!-- end sale -->

      <div class="widg-prod__new-price">
        <!-- status not in stock hide block -->
        <p class="hide" v-if="product_data.status === '5 Not In Stock'">
          <span>{{ product_data.actual_price | toFix | formattedPrice }}</span>
          &#8372;
        </p>

        <!-- event sales show block -->
        <p class="new-price" v-else-if="product_data.event === 'Sales'">
          <span>{{ product_data.actual_price | toFix | formattedPrice }}</span>
          &#8372;
        </p>

        <!-- else show block actual_price > 0-->
        <p class="new-price" v-else-if="product_data.actual_price > 0">
          <span>{{ product_data.actual_price | toFix | formattedPrice }}</span>
          &#8372;
        </p>

        <!-- else show block -->
        <p class="new-price" v-else>
          <span class="new-price-text">{{
            $t("detail_product.text-price")
          }}</span>
        </p>

        <div class="cart" @click="addToCart()">
          <!-- if not in stock hide-->
          <button
            class="cart-icon"
            v-if="
              product_data.status != '5 Not In Stock' &&
              product_data.status != '2 Is expected'
            "
          >
            <i class="fas fa-shopping-bag"></i>
          </button>

          <!-- else show icon card -->
          <button class="hide" v-else>
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>

      <mini-paramether :param_data="product_data" />
    </div>
  </div>
</template>

<script>
import MiniParamether from "@/components/products/MiniParamether";
import toFix from "@/filters/toFix";
import formattedPrice from "@/filters/price-format";
import ColorsItem from "./Colors-Item";
import { mapGetters } from "vuex";
export default {
  name: "catalog-item",
  components: {
    MiniParamether,
    ColorsItem,
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      action: false,
      slug: this.$route.params["slug"],
      src: require("@/assets/images/pointer.svg"),
      isActiveHeart: false,
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  filters: {
    toFix,
    formattedPrice,
  },
  methods: {
    addToCart() {
      this.$emit(
        "addToCart",
        this.product_data,
        this.$set(this.product_data, "quantity", 1),
        this.$set(this.product_data, "product", this.product_data.id)
      );
    },
    addOverview() {
      this.$emit("addOverview", this.product_data);
    },
    addFavorite() {
      this.isActiveHeart = true;
      this.$emit(
        "addFavorite",
        this.product_data,
        this.$set(this.product_data, "favorite", true)
      );
    },
    removeFavorite() {
      this.isActiveHeart = false;
      this.$emit("removeFavorite", this.product_data);
    },
  },
  mounted() {
    // document.title = this.product_data.prod_type.name;
  },
};
</script>

<style lang="scss" scoped>
.cart-icon {
  border: 0;
  outline: none;
}
.container_widg .widg-prod {
  &__comment-rating {
    bottom: 160px;
  }
  &__colors {
    bottom: 100px;
  }
}
</style>
