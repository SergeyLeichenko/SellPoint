<template v-if="getUser" name="cabinet">
  <div>
    <Header v-on:event="showSidebar" />
    <section class="sidebar-banner">
      <div class="wrap">
        <div class="sidebar-banner__block sidebar-banner__block-absol">
          <Sidebar v-if="sidebarDropdown" :sidebar_data="SIDEBARS" />
        </div>
      </div>
    </section>

    <section class="account">
      <div class="wrap">
        <div class="account-block">
          <div class="personal-sidebar">
            <h1 class="personal-sidebar__title">
              {{ $t("cabinet.title") }}
            </h1>
            <div class="personal-sidebar__block">
              <p class="personal-sidebar__block_name" v-if="getUser">
                {{ getUser.first_name || getUser.user.first_name }}<br />{{
                  getUser.last_name || getUser.user.last_name
                }}
              </p>
              <ul class="personal-sidebar__block_list">
                <li
                  class="item"
                  v-for="(item, i) in listItem"
                  :key="i"
                  :class="{ activeListLink: i === active }"
                  @click="makeActive(i)"
                >
                  <div class="item-link">
                    <p v-html="item.icon"></p>
                    {{ item.name }}
                    <!-- <span
                      class="item-link__number"
                      v-if="
                        item.name === $t('cabinet.sidebar.favorite') &&
                        FAVORITE.length
                      "
                      >{{ FAVORITE.length }}</span
                    > -->
                  </div>
                </li>
                <li class="item" @click="onAuthBtnClick">
                  <a href="" class="item-link"
                    ><i class="fas fa-sign-out-alt"></i
                    >{{ $t("cabinet.sidebar.logout") }}</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="personal-history">
            <div class="orders-item">
              <!-- order -->
              <div class="myOrderBlock">
                <MyOrders v-if="showListPage" :order_data="orders" />
                <div class="products__btn" v-if="showListPage">
                  <div class="products__btn_number">
                    <b-pagination
                      v-if="this.count > 24"
                      :model="pages"
                      :total-rows="count"
                      :per-page="24"
                      aria-controls="my-table"
                      @change="openList"
                    ></b-pagination>
                  </div>
                </div>
              </div>
              <!-- end order -->

              <!-- favorite products -->
              <!-- <Favorite v-if="showFavorite" /> -->
              <!-- end favorite products -->

              <!-- overwiew products -->
              <MyProduct v-if="showProductPage" />
              <!-- end overwiew products -->

              <!-- bonuses -->
              <!-- <MyBonuses v-if="showBonuses" /> -->
              <!-- end bonuses -->

              <!-- reviews -->
              <MyOverwiev v-if="showReviewPage" :review_data="reviews" />
              <!-- end reviews -->

              <!-- settings -->
              <MySetting v-if="showSetting" :setting_data_item="settings" />
              <!-- end settings -->

              <!-- mailings -->
              <div class="personal-history" v-if="showMailings">
                <div class="personal-history__title">
                  <h2>{{ $t("cabinet.mailings.title") }}</h2>
                </div>
                <div class="personal-history__block">
                  <div class="personal-order">
                    <!-- <HistoryMailings v-if="mailings_data.length" /> -->
                    <div class="personal-order__email">
                      <div class="personal-order__email_me">
                        <h2 class="personal-order__email_me_title">
                          {{ $t("cabinet.mailings.mailings_me") }}
                        </h2>
                        <div class="form-block">
                          <div class="form-block_check" @change="sendMailings">
                            <input
                              type="checkbox"
                              id="action"
                              v-model="formLetter.sale"
                            />
                            <label for="action">{{
                              $t("cabinet.mailings.action")
                            }}</label>
                            <p class="subtext">
                              {{ $t("cabinet.mailings.proposition") }}
                            </p>
                          </div>
                          <div class="form-block_check" @change="sendMailings">
                            <input
                              type="checkbox"
                              id="recomend"
                              v-model="formLetter.personal_rec"
                            />
                            <label for="recomend">{{
                              $t("cabinet.mailings.personal")
                            }}</label>
                            <p class="subtext">
                              {{ $t("cabinet.mailings.offer") }}
                            </p>
                          </div>
                          <div class="form-block_check" @change="sendMailings">
                            <input
                              type="checkbox"
                              id="week"
                              v-model="formLetter.weak_rec"
                            />
                            <label for="week">{{
                              $t("cabinet.mailings.new_product")
                            }}</label>
                            <p class="subtext">
                              {{ $t("cabinet.mailings.new_sale") }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="personal-order__email_me">
                        <h2 class="personal-order__email_me_title">
                          {{ $t("cabinet.mailings.chanel_mailings") }}
                        </h2>
                        <form class="form-block">
                          <div class="form-block__chanels">
                            <div
                              class="form-block_check"
                              @change="sendMailings"
                            >
                              <input
                                type="checkbox"
                                id="email"
                                checked
                                name="chanl"
                                v-model="formLetter.email"
                              />
                              <label for="email" class="label">email</label>
                            </div>
                            <div
                              class="form-block_check"
                              @change="sendMailings"
                            >
                              <input
                                type="checkbox"
                                id="viber"
                                name="chanl"
                                v-model="formLetter.viber"
                              />
                              <label for="viber" class="label">viber</label>
                            </div>
                            <div
                              class="form-block_check"
                              @change="sendMailings"
                            >
                              <input
                                type="checkbox"
                                id="sms"
                                name="chanl"
                                v-model="formLetter.sms"
                              />
                              <label for="sms" class="label">sms</label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end mailings -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
const lang = localStorage.getItem("lang") || "uk";
const BASE_URL = process.env.VUE_APP_BASE_URL + lang;
import Header from "@/components/base/Header";
import Sidebar from "@/components/home/sidebar/Sidebar";
import MyOrders from "@/components/person-account/orders/MyOrders";
import MyProduct from "@/components/person-account/product_show/MyProduct";
// import MyBonuses from "@/components/person-account/bonus/My-Bonuses";
import MyOverwiev from "@/components/person-account/review_user/MyOverwiev";
import MySetting from "@/components/person-account/settings/MySetting";
// import Favorite from "@/components/person-account/liked/Favorite";
import Footer from "@/components/base/Footer";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "cabinet",
  metaInfo() {
    return {
      title: this.$t("cabinet_doc_title"),
    };
  },
  components: {
    Header,
    Sidebar,
    MyOrders,
    MyProduct,
    // MyBonuses,
    MyOverwiev,
    MySetting,
    Footer,
    // Favorite,
  },
  data() {
    return {
      listItem: [
        {
          id: 1,
          name: this.$t("cabinet.title_my_orders"),
          icon: `<i class="far fa-clock"></i>`,
        },
        // {
        //   id: 2,
        //   name: this.$t("cabinet.sidebar.favorite"),
        //   icon: `<i class="far fa-heart"></i>`,
        // },
        {
          id: 2,
          name: this.$t("cabinet.sidebar.show"),
          icon: `<i class="far fa-eye"></i>`,
        },
        // {
        //   id: 3,
        //   name: this.$t("cabinet.sidebar.bonuces"),
        //   icon: `<i class="far fa-gem"></i>`,
        // },
        {
          id: 3,
          name: this.$t("cabinet.sidebar.reviews"),
          icon: `<i class="far fa-comment-dots"></i>`,
        },
        {
          id: 4,
          name: this.$t("cabinet.sidebar.mailings"),
          icon: `<i class="far fa-bell"></i>`,
        },
        {
          id: 5,
          name: this.$t("cabinet.sidebar.settings"),
          icon: `<i class="fas fa-cog"></i>`,
        },
      ],
      sidebarDropdown: false,
      showListPage: null,
      showProductPage: null,
      // showBonuses: null,
      showReviewPage: null,
      showSetting: null,
      showMailings: null,
      // showFavorite: null,
      reviews: [],
      orders: [],
      settings: {},
      mailings: [],
      formLetter: {
        sale: true,
        personal_rec: true,
        weak_rec: true,
        email: true,
        viber: true,
        sms: true,
      },
      pages: 1,
      count: "",
      active: false,
    };
  },
  created() {
    if (this.count > 24) {
      this.openList(this.pages);
    } else {
      this.openList();
    }
  },
  computed: {
    ...mapGetters(["SIDEBARS", "FAVORITE"]),
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    ...mapActions({
      setUser: "user/setUser",
      deleteUser: "user/deleteUser",
    }),
    onAuthBtnClick() {
      if (this.getUser) {
        this.$api.auth.logout();
        localStorage.removeItem("user");
        this.deleteUser();
        this.$router.push({ name: "home" });
        location.reload();
      } else {
        // this.isAuthModalOpen = true;
      }
    },
    showSidebar() {
      this.sidebarDropdown = !this.sidebarDropdown;
    },
    // my orders
    async openList(pageNumber) {
      this.showListPage = true;
      const access = this.getUser.access_token;
      if (this.count > 24) {
        await fetch(`${BASE_URL}/profile/history/order/?page=${pageNumber}`, {
          headers: {
            Authorization: "Bearer " + access,
          },
          Accept: "application/json",
        })
          .then((response) => response.json())
          .then((response) => {
            this.count = response.count;
            this.orders = response.results;
          });
      } else {
        await fetch(`${BASE_URL}/profile/history/order/`, {
          headers: {
            Authorization: "Bearer " + access,
          },
          Accept: "application/json",
        })
          .then((response) => response.json())
          .then((response) => {
            this.count = response.count;
            this.orders = response.results;
          });
      }
    },
    // reviews and appeals
    openShowReview() {
      const access = this.getUser.access_token;
      axios
        .get("/profile/history/reviews/", {
          headers: {
            Authorization: "Bearer " + access,
          },
          Accept: "application/json",
        })
        .then((response) => (this.reviews = response.data));
    },
    // settings
    openShowSetting() {
      const access = this.getUser.access_token;
      axios
        .get("user/", {
          headers: {
            Authorization: "Bearer " + access,
          },
          Accept: "application/json",
        })
        .then((response) => (this.settings = response.data));
    },
    // send mailings
    sendMailings() {
      const access = this.getUser.access_token;
      axios.patch("profile/spam/", this.formLetter, {
        headers: {
          Authorization: "Bearer " + access,
        },
        Accept: "application/json",
      });
      if (history.pushState) {
        var baseUrl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname;
        var newUrl = baseUrl + "?tyapk=awesome";
        history.pushState(null, null, newUrl);
      } else {
        console.warn("History API не поддерживает ваш браузер");
      }
    },
    // active button
    makeActive(i) {
      this.active = i;
      switch (i) {
        case 0:
          // my orders
          this.openList();
          this.showProductPage = false;
          this.showReviewPage = false;
          this.showSetting = false;
          this.showMailings = false;
          // this.showBonuses = false;
          // this.showFavorite = false;
          break;
        // favorite products
        // case 1:
        //   this.showFavorite = true;
        //   this.showProductPage = false;
        //   this.showListPage = false;
        //   this.showReviewPage = false;
        //   this.showSetting = false;
        //   this.showMailings = false;
        //   this.showBonuses = false;
        //   break;
        case 1:
          // reviewed products
          this.showProductPage = true;
          this.showListPage = false;
          this.showReviewPage = false;
          this.showSetting = false;
          this.showMailings = false;
          // this.showBonuses = false;
          // this.showFavorite = false;
          break;
        // bonuses
        // case 2:
        //   this.showBonuses = true;
        //   this.showListPage = false;
        //   this.showProductPage = false;
        //   this.showReviewPage = false;
        //   this.showSetting = false;
        //   this.showMailings = false;
        // this.showFavorite = false;
        // break;
        //reviews and appeals
        case 2:
          this.openShowReview();
          this.showProductPage = false;
          this.showListPage = false;
          this.showReviewPage = true;
          this.showSetting = false;
          this.showMailings = false;
          this.showBonuses = false;
          // this.showFavorite = false;
          break;
        // mailings
        case 3:
          this.showMailings = true;
          this.showSetting = false;
          this.showProductPage = false;
          this.showListPage = false;
          this.showReviewPage = false;
          // this.showBonuses = false;
          // this.showFavorite = false;
          break;
        // settings
        case 4:
          this.openShowSetting();
          this.showSetting = true;
          this.showProductPage = false;
          this.showListPage = false;
          this.showReviewPage = false;
          this.showMailings = false;
          // this.showBonuses = false;
          // this.showFavorite = false;
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
