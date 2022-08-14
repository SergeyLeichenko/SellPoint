<template>
  <header class="header" id="top">
    <div class="header-first">
      <div class="wrap">
        <div class="header__block">
          <div class="header__block_logo">
            <div class="logo" @click="removeAllCheck">
              <li>
                <a :href="$router.resolve({ name: 'home' }).href">
                  <img
                    src="@/assets/images/SellPoint_logo.png"
                    alt="Інтернет-магазин SellPoint"
                  />
                </a>
              </li>
            </div>
          </div>
          <Nav />
          <Language />
        </div>
      </div>
    </div>
    <div class="header-second">
      <div class="wrap">
        <div class="header-second__block">
          <!-- button catalog -->
          <div
            class="header-second__block_catalog"
            @click="$emit('event', 'showSidebar')"
          >
            <div class="catalog-btn">
              <div class="btn-name">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xml:space="preserve"
                  width="3.8241mm"
                  height="3.8241mm"
                  version="1.1"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  viewBox="0 0 3.5 3.5"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                  class="svg-white"
                >
                  <defs></defs>
                  <g id="Слой_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <g id="_2950720242400">
                      <path
                        class="fil0"
                        d="M-0 3.2l0 -0.86c0,-0.16 0.13,-0.29 0.29,-0.29l0.86 0c0.16,0 0.29,0.13 0.29,0.29l0 0.86c0,0.16 -0.13,0.29 -0.29,0.29l-0.86 0c-0.16,0 -0.29,-0.13 -0.29,-0.29z"
                      />
                      <path
                        class="fil0"
                        d="M2.34 0l0.86 0c0.16,0 0.29,0.13 0.29,0.29l0 0.86c0,0.16 -0.13,0.29 -0.29,0.29l-0.86 0c-0.16,0 -0.29,-0.13 -0.29,-0.29l0 -0.86c0,-0.16 0.13,-0.29 0.29,-0.29z"
                      />
                      <path
                        class="fil0"
                        d="M0.29 0l0.86 0c0.16,0 0.29,0.13 0.29,0.29l0 0.86c0,0.16 -0.13,0.29 -0.29,0.29l-0.86 0c-0.16,0 -0.29,-0.13 -0.29,-0.29l0 -0.86c0,-0.16 0.13,-0.29 0.29,-0.29z"
                      />
                      <path
                        class="fil0"
                        d="M2.05 3.2l0 -0.86c0,-0.16 0.13,-0.29 0.29,-0.29l0.86 0c0.16,0 0.29,0.13 0.29,0.29l0 0.86c0,0.16 -0.13,0.29 -0.29,0.29l-0.86 0c-0.16,0 -0.29,-0.13 -0.29,-0.29z"
                      />
                    </g>
                  </g>
                </svg>
                <router-link to="">{{ $t("catalog") }}</router-link>
              </div>
              <!-- <i class="fas fa-chevron-down catalog-down"></i> -->
            </div>
          </div>
          <!-- end button catalog -->

          <div class="search-icons">
            <!-- search -->
            <div class="header-second__block_search">
              <input
                type="text"
                v-model="vendor"
                @input="debouncedOnChange"
                :placeholder="$t('search')"
                class="search"
                ref="vendors"
                @keyup.enter="onEnter(vendor)"
              />
              <i class="fas fa-search" v-if="!vendors.length"></i>
              <span v-else @click="closeSearch" class="clear-search">X</span>
              <div class="autocomplete-box">
                <ul class="list-group">
                  <a
                    v-for="(vendor, id) in vendors"
                    :key="id"
                    @click="select_vendor(vendor)"
                    class="autocomplete-box-li"
                    :href="
                      $router.resolve({
                        name: 'product',
                        params: { slug: vendor.id },
                      }).href
                    "
                  >
                    {{ vendor.text }}
                  </a>
                </ul>
              </div>
            </div>
            <!-- end search -->

            <div class="header-second__block_icons">
              <!-- login -->
              <div class="login-name" v-if="getUser">
                <a :href="$router.resolve({ name: 'profile' }).href">
                  <div class="login-name__auth">
                    <div class="modal-show" @click="showForm">
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99145 0.00402832C10.2906 0.00402832 11.4701 0.530645 12.3248 1.38003C13.1795 2.22941 13.7094 3.40156 13.7094 4.69262C13.7094 5.98368 13.1795 7.15583 12.3248 8.00521C11.4701 8.85459 10.2906 9.38121 8.99145 9.38121C7.69231 9.38121 6.51282 8.85459 5.65812 8.00521C4.80342 7.15583 4.2735 5.98368 4.2735 4.69262C4.2735 3.40156 4.80342 2.22941 5.65812 1.38003C6.51282 0.530645 7.69231 0.00402832 8.99145 0.00402832V0.00402832ZM17.9829 18.3167C17.9829 18.6904 17.6752 18.9962 17.2991 18.9962C16.9231 18.9962 16.6154 18.6904 16.6154 18.3167V16.618C16.6154 15.3269 16.0855 14.1378 15.2137 13.2884C14.359 12.439 13.1624 11.8954 11.8632 11.8954H6.11966C4.82051 11.8954 3.62393 12.422 2.76923 13.2884C1.91453 14.1378 1.36752 15.3269 1.36752 16.618V18.3167C1.36752 18.6904 1.05983 18.9962 0.683761 18.9962C0.307692 18.9962 0 18.6904 0 18.3167V16.618C0 14.9532 0.683761 13.4243 1.79487 12.3201C2.90598 11.2159 4.42735 10.5364 6.11966 10.5364H11.8632C13.5556 10.5364 15.0769 11.2159 16.188 12.3201C17.2991 13.4243 17.9829 14.9532 17.9829 16.618V18.3167ZM11.3504 2.33134C10.7521 1.73677 9.91453 1.36304 8.99145 1.36304C8.06838 1.36304 7.23077 1.73677 6.63248 2.33134C6.03419 2.9259 5.65812 3.7583 5.65812 4.67563C5.65812 5.59297 6.03419 6.42536 6.63248 7.01993C7.23077 7.6145 8.06838 7.98822 8.99145 7.98822C9.91453 7.98822 10.7521 7.6145 11.3504 7.01993C11.9487 6.42536 12.3248 5.59297 12.3248 4.67563C12.3248 3.7583 11.9487 2.9259 11.3504 2.33134Z"
                          fill="#ee35ff"
                          class="user-pink"
                        />
                      </svg>
                    </div>
                    <div class="full-name">
                      <p class="name-first">
                        {{ getUser.first_name || getUser.user.first_name }}
                      </p>
                      <p class="name-second">
                        {{ getUser.last_name || getUser.user.last_name }}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="user" v-else>
                <div class="modal-show" @click="showForm">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99145 0.00402832C10.2906 0.00402832 11.4701 0.530645 12.3248 1.38003C13.1795 2.22941 13.7094 3.40156 13.7094 4.69262C13.7094 5.98368 13.1795 7.15583 12.3248 8.00521C11.4701 8.85459 10.2906 9.38121 8.99145 9.38121C7.69231 9.38121 6.51282 8.85459 5.65812 8.00521C4.80342 7.15583 4.2735 5.98368 4.2735 4.69262C4.2735 3.40156 4.80342 2.22941 5.65812 1.38003C6.51282 0.530645 7.69231 0.00402832 8.99145 0.00402832V0.00402832ZM17.9829 18.3167C17.9829 18.6904 17.6752 18.9962 17.2991 18.9962C16.9231 18.9962 16.6154 18.6904 16.6154 18.3167V16.618C16.6154 15.3269 16.0855 14.1378 15.2137 13.2884C14.359 12.439 13.1624 11.8954 11.8632 11.8954H6.11966C4.82051 11.8954 3.62393 12.422 2.76923 13.2884C1.91453 14.1378 1.36752 15.3269 1.36752 16.618V18.3167C1.36752 18.6904 1.05983 18.9962 0.683761 18.9962C0.307692 18.9962 0 18.6904 0 18.3167V16.618C0 14.9532 0.683761 13.4243 1.79487 12.3201C2.90598 11.2159 4.42735 10.5364 6.11966 10.5364H11.8632C13.5556 10.5364 15.0769 11.2159 16.188 12.3201C17.2991 13.4243 17.9829 14.9532 17.9829 16.618V18.3167ZM11.3504 2.33134C10.7521 1.73677 9.91453 1.36304 8.99145 1.36304C8.06838 1.36304 7.23077 1.73677 6.63248 2.33134C6.03419 2.9259 5.65812 3.7583 5.65812 4.67563C5.65812 5.59297 6.03419 6.42536 6.63248 7.01993C7.23077 7.6145 8.06838 7.98822 8.99145 7.98822C9.91453 7.98822 10.7521 7.6145 11.3504 7.01993C11.9487 6.42536 12.3248 5.59297 12.3248 4.67563C12.3248 3.7583 11.9487 2.9259 11.3504 2.33134Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <!-- modal login -->
                <div class="modal-content-form" v-if="showModalForm">
                  <AuthForm @showModalForm="showModalForm = false" />
                </div>
                <!-- end modal login -->
              </div>
              <!-- end login -->

              <!-- favorite product icon -->
              <!-- <div class="favorite" v-if="getUser">
                <a
                  :href="$router.resolve({ name: 'profile' }).href"
                  class="favorite__block"
                >
                  <i class="far fa-heart"></i>
                  <span class="favorite__block_number" v-if="FAVORITE.length">
                    {{ FAVORITE.length }}
                  </span>
                </a>
              </div> -->
              <!-- end favorite product icon -->

              <!-- cart -->
              <div class="cart">
                <button class="modal-show" @click="showCart">
                  <svg
                    width="19"
                    height="22"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9801 17.2406L14.8845 5.05284C14.8446 4.71649 14.5658 4.45928 14.2271 4.45928H11.9562V3.45023C11.9562 1.55085 10.4024 0.00759888 8.49005 0.00759888C6.5777 0.00759888 5.02392 1.55085 5.02392 3.45023V4.45928H2.753C2.41436 4.45928 2.13547 4.71649 2.09563 5.05284L0.980093 17.2999C0.960173 17.478 1.01993 17.656 1.13946 17.7945C1.25898 17.933 1.43826 18.0122 1.61754 18.0122H15.3028C15.6614 18.0122 15.9602 17.7154 15.9602 17.3593C15.9602 17.3197 15.9602 17.2801 15.9602 17.2603L15.9801 17.2406ZM6.31874 3.43045C6.31874 2.24333 7.29483 1.27386 8.49005 1.27386C9.68527 1.27386 10.6614 2.24333 10.6614 3.43045V4.4395H6.33866V3.43045H6.31874ZM2.3546 16.6866L3.35061 5.74532H5.02392V6.89287C5.02392 7.249 5.32272 7.54578 5.68129 7.54578C6.03985 7.54578 6.33866 7.249 6.33866 6.89287V5.74532H10.6614V6.89287C10.6614 7.249 10.9602 7.54578 11.3187 7.54578C11.6773 7.54578 11.9761 7.249 11.9761 6.89287V5.74532H13.6494L14.6454 16.6866H2.37452H2.3546Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <span class="cart__numb" v-if="CART.length">{{
                  CART.length
                }}</span>
                <!-- Modal -->
                <cart
                  v-if="showModalCart"
                  :cart="CART"
                  @closeCart="closeCart"
                  @showCart="showCart"
                />
              </div>
              <!-- end cart -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- reset password -->
    <ResetPassword />
    <!-- end reset password -->

    <!-- confirm password -->
    <ConfirmPassword
      v-if="closeFormConfirm"
      @closeForm="closeForm"
      :token_data="this.tokenQueryConfirm"
    />
    <!-- end confirm password -->
  </header>
</template>

<script>
import Language from "@/components/home/Lang";
import Nav from "@/components/home/NavBar";
import Cart from "@/components/home/Cart";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import _debounce from "lodash.debounce";
import ConfirmPassword from "@/components/auth/Confirm-Password";
import ResetPassword from "@/components/auth/Reset-Password.vue";
import AuthForm from "@/components/auth/AuthForm";
import removeAllCheck from "@/mixins/removeAllCheck";
import Auth from "@/mixins/auth";
export default {
  name: "header-top",
  mixins: [removeAllCheck, Auth],
  components: {
    Nav,
    Cart,
    Language,
    ConfirmPassword,
    ResetPassword,
    AuthForm,
  },
  data() {
    return {
      showModalCart: false,
      vendor: "",
      vendor_id: "",
      vendors: [],
      closeFormConfirm: false,
      tokenQueryConfirm: "",
    };
  },
  computed: {
    ...mapGetters(["CART", "SEARCH_VALUE", "FAVORITE"]),
    debouncedOnChange() {
      return _debounce(this.get_vendors, 1000);
    },
  },
  created() {
    this.tokenConfirm();
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE"]),
    showCart() {
      this.showModalCart = true;
    },
    closeCart() {
      this.showModalCart = false;
    },
    // search only product detail
    get_vendors() {
      if (this.vendor.length > 0) {
        axios
          .get("products/search/tiny/", { params: { q: this.vendor } })
          .then((response) => {
            this.vendors = response.data.results;
          });
      }
    },
    closeSearch() {
      this.vendors.splice(0);
      this.vendor = "";
    },
    onEnter(value) {
      this.GET_SEARCH_VALUE(value);
      this.$router.push({ name: "search" });
    },
    // close confirm form
    closeForm() {
      this.closeFormConfirm = false;
    },
    tokenConfirm() {
      // added url
      const str = window.location.search.split("token=");
      this.tokenQueryConfirm = str[1];
      if (str[1]) {
        this.closeFormConfirm = true;
      } else if (str) {
        this.closeFormConfirm = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.autocomplete-box-li:hover {
  background-color: #f2f2f2;
  cursor: pointer;
}
.autocomplete-box {
  position: absolute;
  z-index: 1;
  width: 99%;
  .list-group {
    background-color: $white;
    display: flex;
    padding: 0 20px;
    border: 1px solid #f2f2f2;
    margin-top: -2px;
    margin-left: 4px;
    a {
      color: $black;
      margin-bottom: 10px;
    }
  }
}
</style>
