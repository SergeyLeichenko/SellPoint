<template>
  <div class="card-block card-block-order">
    <div class="image-text">
      <div class="photo-img">
        <router-link :to="{ name: 'product' }" class="photo-img__block">
          <img :src="cart_item.image" alt="images" />
        </router-link>
      </div>
      <router-link :to="{ name: 'product' }">
        <p class="text">
          {{ cart_item.title }}
        </p>
      </router-link>
    </div>
    <div class="number">
      <div class="number__left">
        <p class="price">
          {{ cart_item.actual_price | toFix | formattedPrice }} &#8372;
        </p>
        <span class="minus" @click="decrementItem">-</span>
        <p class="numb">{{ cart_item.quantity }}</p>
        <span class="plus" @click="incrementItem">+</span>
        <div class="all-price">
          <span>=</span>
          {{
            (cart_item.quantity * cart_item.actual_price)
              | toFix
              | formattedPrice
          }}
          &#8372;
        </div>
      </div>
    </div>
    <i class="fas fa-trash-alt deleteCart" @click="deleteFromCart"></i>
  </div>
</template>

<script>
import toFix from "@/filters/toFix";
import formattedPrice from "@/filters/price-format";
export default {
  name: "CartItem",
  props: {
    cart_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      count: this.cart_item.quantity,
    };
  },
  filters: {
    toFix,
    formattedPrice,
  },
  created() {},
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="scss" scoped></style>
