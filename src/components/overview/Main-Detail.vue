<template>
  <div>
    <section class="overview">
      <!-- messages add to cart -->
      <Notification :messages="messages" :timeout="4000" />
      <!-- end messages add to cart -->

      <div class="wrap">
        <!-- step top page -->
        <Step :step_data="products.data" v-if="products.data" />
        <!-- end step top page -->

        <!-- component detail product -->
        <detail-item :detail="products.data" @addToCart="addToCart" />
        <!-- end component detail product -->
      </div>
    </section>

    <section class="tabs" id="elementComment">
      <div class="wrap">
        <div class="tabs__block">
          <!-- tabs buttons -->
          <ul class="nav nav-tabs tabs__block_list">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#description"
                ><i class="far fa-list-alt"></i
                ><span>{{ $t("detail_product.description") }}</span></a
              >
            </li>
            <li class="nav-item" @click="loadCharacteristics">
              <a class="nav-link" data-toggle="tab" href="#characteristics"
                ><i class="fas fa-cog"></i
                ><span>{{ $t("detail_product.characteristic") }}</span></a
              >
            </li>
            <li class="nav-item" @click="getComments">
              <a class="nav-link" data-toggle="tab" href="#opinion"
                ><i class="fas fa-comment-dots"></i
                ><span>{{ $t("detail_product.reviews") }}</span></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#accessories"
                @click="accessories"
                ><i class="fas fa-angle-double-down"></i
                ><span>{{ $t("detail_product.accessories") }}</span></a
              >
            </li>
          </ul>
          <!-- end tabs buttons -->

          <div class="tab-content">
            <!-- Description -->
            <div class="tab-pane fade show active" id="description">
              <Description :desc_item_data="products.data" />
            </div>

            <!-- Characteristics -->
            <div class="tab-pane fade" id="characteristics">
              <Characteristics
                :characteristic_data="characteristics.data"
                :title_data="products.data"
              />
            </div>

            <!-- Reviews -->
            <div class="tab-pane fade" id="opinion">
              <Reviews :reviews_data="allComments" />
            </div>

            <!-- Accessories -->
            <div class="tab-pane fade" id="accessories">
              <div class="tab-plane-accessories">
                <Accessories
                  v-for="(item, i) in accessor"
                  :key="i"
                  :access_data="item"
                  @backToList="backToList(item)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DetailItem from "./detail/Detail-Item";
import Description from "./tabs/Description";
import Characteristics from "./tabs/characteris/Characteristics";
import Reviews from "./tabs/reviews/Reviews";
import Accessories from "./tabs/Accessories";
import { mapActions, mapGetters } from "vuex";
import Notification from "@/components/messages/Notification";
import Step from "./Step.vue";
import axios from "axios";
export default {
  name: "main-detail",
  props: {},
  component: {
    DetailItem,
    Description,
    Characteristics,
    Reviews,
    Accessories,
    Notification,
    Step,
  },
  metaInfo() {
    return {
      title: this.titleDoc + " " + this.$t("detail_product.tab.title"),
    };
  },
  data() {
    return {
      slug: this.$route.params["slug"],
      products: [],
      accessor: [],
      accessoriesPage: [],
      messages: [],
      gallery: [],
      allComments: [],
      titleDoc: "",
      characteristics: [],
      id_product: "",
    };
  },
  created() {
    // detail product
    this.$load(async () => {
      this.products = await this.$api.productDetail.get(
        this.$route.params.slug
      );
      // title
      this.titleDoc = this.products.data.title;
      // array images gallery
      let img = {
        image: this.products.data.image,
      };
      let arr = this.products.data.gallery;
      arr.unshift(img);
      // id product
      this.id_product = this.products.data.id;
    });
  },
  computed: {
    ...mapGetters(["SIDEBARS"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data).then(() => {
        let timeStamp = Date.now();
        this.messages.push({
          name: this.$t("added_product_in_cart"),
          id: timeStamp,
        });
      });
    },
    // back to products list
    backToList(item) {
      this.$router.push({ name: "products", params: { slug: item.slug } });
      localStorage.setItem("pageNumber", 1);
      location.reload();
    },
    // get accessories
    accessories() {
      let prodType = this.products.data.bread_crumbs[0].catalog.slug;

      this.$load(async () => {
        this.accessoriesProduct = await this.$api.accessories
          .get(prodType)
          .then((response) => {
            this.accessor = response.data;
          });
      });
    },
    // get characteristics
    loadCharacteristics() {
      this.$load(async () => {
        this.characteristics = await this.$api.productCharacteristics.get(
          this.id_product
        );
      });
    },
    // getting all comments for this product
    async getComments() {
      await axios
        .get(`product/reviews/${this.id_product}/`)
        .then((response) => {
          this.allComments = response.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
