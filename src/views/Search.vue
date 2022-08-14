<template name="search">
  <div>
    <Header v-on:event="showSidebar" v-click-outside="hide" />

    <Notification :messages="messages" :timeout="4000" />

    <!-- modal login -->
    <div class="modal-content-form" v-if="showModalForm">
      <AuthForm @showModalForm="showModalForm = false" />
    </div>
    <!-- end modal login -->

    <section class="sidebar-banner">
      <div class="wrap">
        <div class="sidebar-banner__block sidebar-banner__block-absol">
          <Sidebar
            v-if="sidebarDropdown"
            :sidebar_data="SIDEBARS"
            class="sidebar-desctop"
          />
          <transition name="dropdown">
            <SidebarMobile
              v-if="sidebarUp"
              :sidebar_data="SIDEBARS"
              class="sidebar-mobile"
              @closeCatalog="closeCatalog"
            />
          </transition>
        </div>
      </div>
    </section>

    <section class="products">
      <div class="wrap">
        <div class="title-block">
          <div class="title-block__search-prod" v-if="count">
            <p>
              <b>{{ $t("products.search") }}</b> {{ getTitle }}
            </p>
          </div>

          <!-- sorting products -->
          <Sorting @uniqueCheckSortFull="uniqueCheckSortFull" />
        </div>

        <div class="filter-touch mt">
          <div class="filter-btn" @click="openFilterMobile">
            <img src="@/assets/images/filter_icon.svg" alt="" />
            <p>{{ $t("products.filter") }}</p>
          </div>

          <div class="select-sort">
            <div class="dropdown">
              <Sorting @uniqueCheckSortFull="uniqueCheckSortFull" />
            </div>
          </div>
        </div>

        <div class="filters-product">
          <!-- filters mobile -->
          <transition name="filter-list">
            <div class="filters filters-mobile" v-if="filterBlock">
              <!-- count -->
              <div class="count-product">
                <div class="arrow-block" @click="openFilterMobile">
                  <span class="arrow-left"></span>
                </div>
                <p v-if="count">
                  <b>{{ $t("products.search") }}</b> {{ getTitle }}
                </p>
              </div>
              <!-- end count -->

              <div class="filters__title">
                <div class="title">
                  <img src="@/assets/images/filter_icon.svg" alt="" />
                  <p>{{ $t("products.filter") }}</p>
                </div>
                <button
                  type="button"
                  class="clear-all"
                  @click="removeAllCheck()"
                >
                  {{ $t("products.btn_delete_all") }}
                </button>
              </div>

              <!-- price -->
              <div class="block-filters">
                <div class="block-filters__price">
                  <div
                    class="block-filters__price_title fil-btn"
                    @click="openListPrice = !openListPrice"
                  >
                    <p class="title-name">{{ $t("products.price") }}</p>
                    <i
                      class="fas fa-chevron-down"
                      :class="{ 'arrow-up': openListPrice === true }"
                    ></i>
                  </div>
                  <div class="body-block" v-if="openListPrice">
                    <div class="block-filters__price_block">
                      <input
                        type="number"
                        class="input-i input-i_long input-min"
                        :min="minP"
                        :max="maxP"
                        v-model.number="minPrice"
                        @input="priceInput"
                      />
                      <p>-</p>
                      <input
                        type="number"
                        class="input-i input-i_long"
                        :min="minP"
                        :max="maxP"
                        v-model.number="maxPrice"
                        @input="priceInput"
                      />
                      <div class="block-filters__price_block_btn">
                        <button
                          type="submit"
                          @click="setPrice"
                          class="btn-price"
                        >
                          OK
                        </button>
                      </div>
                    </div>
                    <div class="block-filters__price_range">
                      <!-- range -->
                      <div class="container">
                        <div class="slider-track" ref="sliderTrack"></div>
                        <input
                          type="range"
                          :min="minP"
                          :max="maxP"
                          step="1"
                          v-model.number="minPrice"
                          @input="rangeInput"
                          class="range-min"
                        />
                        <input
                          type="range"
                          :min="minP"
                          :max="maxP"
                          step="1"
                          v-model.number="maxPrice"
                          @input="rangeInput"
                          class="range-max"
                        />
                      </div>
                      <!-- end range -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- end price -->

              <!-- any in stock button-->
              <div class="block-filters">
                <div class="block-filters__price">
                  <div class="block-filters__producer_i">
                    <div class="block-filters__producer_i_check">
                      <li>
                        <input
                          type="checkbox"
                          v-model="anyInStock"
                          id="anyInStockFull"
                          @change="checkAnyInStock"
                        />
                        <label
                          class="item-brand any-in-stock"
                          for="anyInStockFull"
                          :class="{ active: anyInStock === true }"
                        >
                          {{ $t("card.available") }}
                        </label>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end any in stock button -->
            </div>
          </transition>

          <div class="products">
            <div class="products__block">
              <catalog-item
                v-for="(product, index) in this.products"
                :key="index"
                :product_data="product"
                @addToCart="addToCart"
                @addOverview="addOverview"
                @addFavorite="addFavorite"
                @removeFavorite="removeFavorite(product)"
                @openLoginForm="showForm"
              />
            </div>
            <h1 v-if="this.count === 0" class="products__empty">
              {{ $t("products.empty_product") }}
            </h1>
            <b-pagination
              v-if="this.count > 24"
              v-model="page"
              :total-rows="count"
              :per-page="24"
              aria-controls="my-table"
              @change="loadListProduct"
              v-scroll-to="'#top'"
            ></b-pagination>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Sidebar from "@/components/home/sidebar/Sidebar";
import CatalogItem from "@/components/products/Catalog-Item";
import Footer from "@/components/base/Footer";
import { mapGetters } from "vuex";
import Notification from "@/components/messages/Notification";
import axios from "axios";
import Sorting from "@/components/products/Sorting";
import AuthForm from "@/components/auth/AuthForm";
import ViewProduct from "@/mixins/viewedProducts";
import Cart from "@/mixins/cart";
import AnyInStock from "@/mixins/fullSearch/anyInStock";
import GetProductsFilters from "@/mixins/fullSearch/getProductsFilters";
import Pagination from "@/mixins/fullSearch/pagination";
import removeAllCheck from "@/mixins/removeAllCheck";
import Price from "@/mixins/fullSearch/price";
import Sort from "@/mixins/fullSearch/sorting";
import ClickOutside from "vue-click-outside";
import Favorites from "@/mixins/favorites";
import Auth from "@/mixins/auth";
import SidebarMobile from "@/components/home/sidebar-mobile/Sidebar";
import SidebarM from "@/mixins/sidebarMobile";
export default {
  name: "search",
  metaInfo() {
    return {
      title: this.SEARCH_VALUE,
    };
  },
  mixins: [
    ViewProduct,
    Cart,
    AnyInStock,
    GetProductsFilters,
    Pagination,
    removeAllCheck,
    Price,
    Sort,
    Favorites,
    Auth,
    SidebarM,
  ],
  components: {
    Header,
    Sidebar,
    CatalogItem,
    Footer,
    Notification,
    Sorting,
    AuthForm,
    SidebarMobile,
  },
  data: () => {
    return {
      sidebarDropdown: false,
      filterBlock: false,
    };
  },
  computed: {
    ...mapGetters(["SIDEBARS", "SEARCH_VALUE"]),
    // numerals for products
    getTitle() {
      return `${this.count} ${
        this.count % 100 < 11 || this.count % 100 > 19
          ? this.count % 10 != 1
            ? this.count % 10 > 1 && this.count % 10 < 5
              ? this.$t("products.product_1")
              : this.$t("products.product_2")
            : this.$t("products.product")
          : this.$t("products.product_2")
      }`;
    },
  },
  methods: {
    openFilterMobile() {
      this.filterBlock = !this.filterBlock;
    },
    onEnterSearch(value) {
      if (value) {
        axios.get(`/products/search/full/?q=${value}`).then((response) => {
          this.products = response.data.results;
          this.count = response.data.count;
        });
      }
      this.removeAllCheck();
    },
    hide() {
      if (this.sidebarDropdown == true) {
        this.sidebarDropdown = false;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.onEnterSearch(this.SEARCH_VALUE);
      location.reload();
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.products .filters-product .filters-mobile {
  height: auto;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.4);
}
.products .filter-touch {
  display: flex;
}
.products .filters-product .products {
  width: 100%;
}
.mt {
  margin-top: 20px;
}
.dropdown {
  display: none;
}
@media screen and (max-width: 678px) {
  .dropdown {
    display: flex;
  }
}
</style>
