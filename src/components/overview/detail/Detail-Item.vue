<template>
  <div>
    <div class="overview-block">
      <div class="overview-block__images">
        <div class="top-panel" v-if="detail.gallery">
          <div class="top-panel__images-gallery">
            <div class="gallery">
              <figure class="gallery__item">
                <img
                  :src="detail.gallery[selectedImage].image"
                  class="gallery__img"
                  @click="openSlider"
                />
              </figure>
            </div>
            <!-- slider all screen -->
            <Slider
              :slider_data="detail"
              @closeSlider="closeSlider"
              v-if="hideSlider"
            />
          </div>

          <span class="action" v-if="detail.on_sale">{{
            $t("card.action")
          }}</span>
        </div>
        <div
          class="bottom-panel"
          v-if="detail.gallery && detail.gallery.length > 1"
        >
          <div class="bottom-panel__block">
            <div class="image__list">
              <ul>
                <li v-for="(image, index) in detail.gallery" :key="index">
                  <img
                    @mouseenter="updateImage(index)"
                    :src="image.image"
                    :class="`list__img ${
                      index === selectedImage ? 'active' : ''
                    }`"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="overview-block__view">
        <div class="title">
          <h2>
            {{ detail.title }}
          </h2>
        </div>
        <div class="rating">
          <div class="stock">
            <div class="stock__btn">
              <p
                class="stock-green w-stock"
                v-if="detail.status === '2 In stock'"
              >
                {{ $t("card.available") }} <i class="fas fa-check"></i>
              </p>
              <p
                class="stock-pink w-stock"
                v-if="detail.status === '4 Under the order'"
              >
                {{ $t("card.under") }}<i class="fas fa-edit"></i>
              </p>
              <p class="stock-pink w-stock" v-if="detail.status === '3 Ends'">
                {{ $t("card.ends") }}<i class="fas fa-battery-quarter"></i>
              </p>
              <p
                class="stock-grey w-stock"
                v-if="detail.status === '5 Not In Stock'"
              >
                {{ $t("card.not_available") }}<i class="fas fa-times"></i>
              </p>
              <p
                class="stock-blue w-stock"
                v-if="detail.status === '1 Ready to ship'"
              >
                {{ $t("card.ready") }}<i class="fas fa-truck"></i>
              </p>
              <p
                class="stock-orange w-stock"
                v-if="detail.status === '2 Is expected'"
              >
                {{ $t("card.expected") }}<i class="far fa-clock"></i>
              </p>
              <!-- <a
                href="#"
                class="stock-pink w-stock"
                v-if="detail.status === 'New product'"
                >{{ $t("card.novelty") }}</a
              >
              <a
                href="#"
                class="stock-pink w-stock"
                v-if="detail.status === 'Sales'"
                >{{ $t("card.promotional") }}</a
              >
              <a
                href="#"
                class="stock-pink w-stock"
                v-if="detail.status === 'Sale leader'"
                >{{ $t("card.sales") }}</a
              > -->
              <span class="cod-product">Код: {{ detail.id }}</span>
            </div>
            <div class="like-comment">
              <div class="like">
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-up"></i>
                <div class="pointer-checked">
                  <img
                    :src="src"
                    v-for="img in detail.avg_rating"
                    :key="img"
                    class="pointer-up"
                  />
                </div>
              </div>
              <!-- <div class="link-comment">
                <a href="" v-scroll-to="'#elementComment'"
                  >залишити відгук та оцінити</a
                >
              </div> -->
            </div>
          </div>
        </div>
        <div class="characteristics">
          <div class="charact-row">
            <p class="mr-row">
              {{ detail.short_description }}
            </p>
          </div>
          <div class="characteristics__all">
            <a href="" class="open-all" v-scroll-to="'#elementComment'">{{
              $t("detail_product.all_characteristic")
            }}</a>
            <div class="characteristics__all_gb">
              <ul class="characteristics__all_gb_block">
                <li
                  class="characteristics__all_gb_block_list"
                  v-for="(color, index) in detail.versions"
                  :key="index"
                >
                  <ColorsItem
                    v-for="(col, index) in color.version_product"
                    :key="index"
                    :colors_data_item="col"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="price">
          <div class="price__old" v-if="detail.event === 'Sales'">
            <p>
              <del>{{ detail.price | toFix | formattedPrice }} &#8372;</del>
              {{ $t("products.sales") }}
              {{ detail.difference | toFix | formattedPrice }} &#8372;
            </p>
          </div>
          <div class="price__new">
            <p class="price-text" v-if="detail.event === 'Sales'">
              {{ detail.actual_price | toFix | formattedPrice }}
              <span>&#8372;</span>
            </p>
            <p class="price-text" v-else-if="detail.actual_price > 0">
              {{ detail.actual_price | toFix | formattedPrice }}
              <span>&#8372;</span>
            </p>
            <p class="price-text" v-else>
              <span class="new-price-text">{{
                $t("detail_product.text-price")
              }}</span>
            </p>
            <div
              class="in-cart-none"
              v-if="
                detail.status === '2 Is expected' ||
                detail.status === '5 Not In Stock'
              "
            ></div>
            <div class="btn-pay-block" v-else>
              <button class="in-cart" @click="addToCart">
                <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9801 17.2406L14.8845 5.05284C14.8446 4.71649 14.5658 4.45928 14.2271 4.45928H11.9562V3.45023C11.9562 1.55085 10.4024 0.00759888 8.49005 0.00759888C6.5777 0.00759888 5.02392 1.55085 5.02392 3.45023V4.45928H2.753C2.41436 4.45928 2.13547 4.71649 2.09563 5.05284L0.980093 17.2999C0.960173 17.478 1.01993 17.656 1.13946 17.7945C1.25898 17.933 1.43826 18.0122 1.61754 18.0122H15.3028C15.6614 18.0122 15.9602 17.7154 15.9602 17.3593C15.9602 17.3197 15.9602 17.2801 15.9602 17.2603L15.9801 17.2406ZM6.31874 3.43045C6.31874 2.24333 7.29483 1.27386 8.49005 1.27386C9.68527 1.27386 10.6614 2.24333 10.6614 3.43045V4.4395H6.33866V3.43045H6.31874ZM2.3546 16.6866L3.35061 5.74532H5.02392V6.89287C5.02392 7.249 5.32272 7.54578 5.68129 7.54578C6.03985 7.54578 6.33866 7.249 6.33866 6.89287V5.74532H10.6614V6.89287C10.6614 7.249 10.9602 7.54578 11.3187 7.54578C11.6773 7.54578 11.9761 7.249 11.9761 6.89287V5.74532H13.6494L14.6454 16.6866H2.37452H2.3546Z"
                    fill="white"
                  />
                </svg>
                {{ $t("detail_product.in_basket") }}
              </button>
              <button class="btn-pay in-cart" @click="openDesign">
                {{ $t("cart.no_register") }}
              </button>
            </div>
          </div>
        </div>
        <div class="credit">
          <!-- <div class="block">
            <img src="@/assets/images/creditIcon.svg" alt="" />
            <p class="text"><span>в кредит:</span> від 942 &#8372; / міс.</p>
          </div> -->
          <div class="guarantor">
            <div class="block">
              <img src="@/assets/images/garantIcon.svg" alt="" />
              <p class="text">
                {{ $t("detail_product.warranty") }}
                <span>{{ detail.warranty }}</span>
                {{ $t("detail_product.mounth") }}
              </p>
            </div>
          </div>
        </div>
        <div class="take-in">
          <!-- <TakeIn :product_regions="detail.bread_crumbs" /> -->
        </div>
      </div>
      <div class="modal-content-form" v-if="design">
        <div class="modal-wrap">
          <div class="content-form">
            <No-Register @closeModal="closeModal" :id_product="detail.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TakeIn from "../TakeIn";
import toFix from "@/filters/toFix";
import formattedPrice from "@/filters/price-format";
import ColorsItem from "./colors/Colors-Item";
import Slider from "./slider/Slider";
import NoRegister from "@/components/home/No-Register";
export default {
  name: "detail-item",
  component: {
    // TakeIn,
    ColorsItem,
    Slider,
    NoRegister,
  },
  props: {
    detail: {
      type: Object,
      default() {
        return {};
      },
    },
    versions_status: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    toFix,
    formattedPrice,
  },
  data() {
    return {
      src: require("@/assets/images/pointer.svg"),
      sliderShow: true,
      hideSlider: false,
      selectedImage: 0,
      design: false,
    };
  },
  created() {},
  methods: {
    addToCart() {
      // this.$emit("addToCart", this.detail);
      this.$emit(
        "addToCart",
        this.detail,
        this.$set(this.detail, "quantity", 1),
        this.$set(this.detail, "product", this.detail.id)
      );
    },
    updateImage(index = 0) {
      if (index === -1) {
        this.selectedImage = this.detail.gallery.length - 1;
        return;
      }
      if (index === this.detail.gallery.length) {
        this.selectedImage = 0;
        return;
      }
      this.selectedImage = index;
    },
    closeSlider() {
      this.hideSlider = false;
    },
    openSlider() {
      this.hideSlider = true;
    },
    openDesign() {
      this.design = true;
    },
    closeModal() {
      this.design = false;
    },
  },
  mounted() {
    // window.$(".overview-block").css("background", "lime");
  },
};
</script>

<style lang="scss" scoped>
.active {
  border: 1px solid;
}
.none {
  display: none;
}
</style>
