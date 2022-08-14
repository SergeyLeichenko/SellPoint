<template>
  <div class="modal-content-cart">
    <div class="modal-wrap modal-wrap-block">
      <div class="block-second block-second-cart">
        <div class="out-card">
          <p>
            <b>{{ $t("cart.basket") }}</b>
          </p>
          <p>
            {{ $t("cart.in_basket") }} <b>{{ CART.length }}</b>
            {{ getTitle }}
          </p>
        </div>
        <Cart-Item
          v-for="(item, index) in cart"
          :key="item.id"
          :cart_item="item"
          @deleteFromCart="deleteFromCart(index)"
          @decrement="decrement(index)"
          @increment="increment(index)"
        />

        <div class="all-sum">
          <div class="remove-all-card" @click="clearAll">
            <p class="remove-all">{{ $t("cart.clean") }}</p>
          </div>
          <div class="code-sale">
            <!-- <div class="code">
              <input type="text" class="promcode" placeholder="промокод" />
              <a href="">{{ $t("cart.apply") }}</a>
              <p>{{ $t("cart.sale") }}<span>0 &#8372;</span></p>
            </div> -->
            <div class="to-pay">
              <p class="to-pay__text">
                {{ $t("cart.paid") }}
                <span
                  >{{ cartTotalCost | toFix | formattedPrice }}
                  <small>&#8372;</small></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/home/Cart-Item";
import { mapActions, mapGetters } from "vuex";
import toFix from "@/filters/toFix";
import formattedPrice from "@/filters/price-format";
export default {
  name: "OrderCart",
  comments: {
    CartItem,
  },
  data() {
    return {
      quantity: this.cart,
    };
  },
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    toFix,
    formattedPrice,
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];

      if (this.cart.length) {
        for (let item of this.cart) {
          result.push(item.actual_price * item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
    // numerals for products
    getTitle() {
      return `${
        this.CART.length % 100 < 11 || this.CART.length % 100 > 19
          ? this.CART.length % 10 != 1
            ? this.CART.length % 10 > 1 && this.CART.length % 10 < 5
              ? this.$t("products.product_1")
              : this.$t("products.product_2")
            : this.$t("products.product")
          : this.$t("products.product_2")
      }`;
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
      "CLEAR_ALL_IN_CART",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    closeCart() {
      this.$emit("closeCart");
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    clearAll(index) {
      this.CLEAR_ALL_IN_CART(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-content-cart .modal-wrap .block-second-cart {
  width: 100%;
  padding: 32px 0 29px;
  overflow-y: inherit;
  min-height: 100%;
  max-height: 100%;
}
</style>
