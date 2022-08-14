<template>
  <div class="modal-content-cart">
    <div class="modal-wrap" ref="modal-wrap">
      <div class="block-second">
        <button class="modal-close" @click="closeCart">
          <span>&times;</span>
        </button>
        <div class="block-cart" v-if="cartBlock">
          <div class="out-card" v-if="!cart.length">
            <p>
              <b>{{ $t("cart.basket") }}</b>
            </p>
            <p>{{ $t("cart.basket_empty") }}</p>
          </div>
          <div class="out-card" v-if="CART.length">
            <p>
              <b>{{ $t("cart.basket") }}</b>
            </p>
            <p>
              {{ $t("cart.in_basket") }} <b>{{ CART.length }} </b>{{ getTitle }}
            </p>
          </div>

          <Cart-Empty v-if="!cart.length" @closeCart="closeCart" />

          <Cart-Item
            v-for="(item, index) in cart"
            :key="item.id"
            :cart_item="item"
            @deleteFromCart="deleteFromCart(index)"
            @decrement="decrement(index)"
            @increment="increment(index)"
          />

          <div class="block-down" v-if="CART.length">
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
                    <span>{{ total }}<small>&#8372;</small></span>
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="call-me-check">
              <input
                type="checkbox"
                class="call-me-check-i"
                id="call-me-check-not"
              />
              <label for="call-me-check-not">
                <p class="not-call-me">
                  {{ $t("cart.do_not_call") }}
                </p>
              </label>
            </div> -->
            <div class="draw-up">
              <div class="draw-up__btn">
                <router-link to="/order">{{ $t("cart.order") }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./Cart-Item";
import CartEmpty from "@/components/messages/Cart-Empty";
import { mapActions, mapGetters } from "vuex";
import toFix from "@/filters/toFix";
import formattedPrice from "@/filters/price-format";
export default {
  name: "modal-content-cart",
  components: {
    CartItem,
    CartEmpty,
  },
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      cartBlock: true,
      quantity: this.cart,
    };
  },
  filters: {
    toFix,
    formattedPrice,
  },
  computed: {
    ...mapGetters(["CART"]),
    total() {
      let total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].actual_price * this.cart[i].quantity;
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ",");
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
  mounted() {
    // click window close cart
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["modal-wrap"]) {
        vm.closeCart();
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
