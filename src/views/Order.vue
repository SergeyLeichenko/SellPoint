<template name="Order">
  <div class="cart-bg">
    <!-- header -->
    <Header v-on:event="showSidebar" v-click-outside="hide" />

    <section class="sidebar-banner">
      <div class="wrap">
        <div class="sidebar-banner__block sidebar-banner__block-absol">
          <Sidebar v-if="sidebarDropdown" :sidebar_data="SIDEBARS" />
        </div>
      </div>
    </section>
    <!-- end header -->

    <section class="tabs-user">
      <div class="wrap">
        <h1 class="title">{{ $t("order.title") }}</h1>
        <form @submit.prevent="submitOrder" novalidate>
          <div class="tabs-block">
            <div class="container-block container-block-cart">
              <div class="buyer-section">
                <!--user form-->
                <div class="second-buyer">
                  <div class="buyer-title">
                    <p class="buyer-title__text">
                      {{ $t("order.title_item_1") }}
                    </p>
                  </div>
                  <div class="who">
                    <div class="another-block">
                      <phone-mask-input
                        type="tel"
                        placeholder="+38(__)XXX-XXXX"
                        v-model="form.buyer_phone"
                        autocomplete="tel"
                        autoDetectCountry
                        @blur="$v.form.buyer_phone.$touch()"
                        :class="{
                          invalid: $v.form.buyer_phone.$error,
                        }"
                      />
                      <small
                        class="invalid"
                        v-if="!$v.form.buyer_phone.minLength"
                        >{{ $t("order.form.valid_phone") }}
                        {{ $v.form.buyer_phone.$params.minLength.min }}
                        {{ $t("auth.sumbol") }}</small
                      >
                      <input
                        type="text"
                        :placeholder="$t('auth.placeholder_name')"
                        v-model.trim="form.buyer_first_name"
                        @blur="$v.form.buyer_first_name.$touch()"
                        :class="{
                          invalid: $v.form.buyer_first_name.$error,
                        }"
                      />
                      <small
                        class="invalid"
                        v-if="!$v.form.buyer_first_name.minLength"
                        >{{ $t("auth.valid_name") }}
                        {{ $v.form.buyer_first_name.$params.minLength.min }}
                        {{ $t("auth.sumbol") }}</small
                      >
                      <input
                        type="text"
                        :placeholder="$t('auth.placeholder_surname')"
                        v-model.trim="form.buyer_last_name"
                        @blur="$v.form.buyer_last_name.$touch()"
                        :class="{ invalid: $v.form.buyer_last_name.$error }"
                      />
                      <small
                        class="invalid"
                        v-if="!$v.form.buyer_last_name.minLength"
                        >{{ $t("auth.valid_surname") }}
                        {{ $v.form.buyer_last_name.$params.minLength.min }}
                        {{ $t("auth.sumbol") }}</small
                      >
                      <input
                        type="text"
                        :placeholder="$t('order.form.middle_name')"
                        v-model.trim="form.buyer_middle_name"
                        @blur="$v.form.buyer_middle_name.$touch()"
                        :class="{ invalid: $v.form.buyer_middle_name.$error }"
                      />
                      <small
                        class="invalid"
                        v-if="!$v.form.buyer_middle_name.minLength"
                        >{{ $t("order.form.valid_middle_name") }}
                        {{ $v.form.buyer_middle_name.$params.minLength.min }}
                        {{ $t("auth.sumbol") }}</small
                      >
                    </div>
                  </div>
                  <div class="buyer-title">
                    <p class="buyer-title__text">
                      {{ $t("order.title_item_2") }}
                    </p>
                  </div>
                  <!-- delivery -->
                  <div class="department-block">
                    <div class="department-block__name">
                      <!-- department new post -->
                      <div class="department">
                        <div class="new post-block" @click="showCity">
                          <div class="new post">
                            <input
                              type="radio"
                              class="new-post-btn"
                              id="new-post-btn"
                              name="r-post"
                              v-model="form.delivery_type"
                              value="У відділення Нової Пошти"
                            />
                            <label for="new-post-btn" class="post-width">{{
                              $t("order.delivery_np.title")
                            }}</label>
                            <p class="sub-text">
                              {{ $t("order.delivery_np.text") }}
                            </p>
                          </div>
                        </div>
                        <!-- np cities -->
                        <div class="drop-text" v-if="openCity">
                          <p>{{ $t("order.np.selected_cities") }}</p>
                          <div class="autocomplete">
                            <input
                              type="search"
                              v-model="form.buyer_shipment_city"
                              @input="debouncedOnChange"
                              :placeholder="$t('search')"
                              id="search_np"
                              ref="vendors"
                            />
                            <transition name="fade">
                              <ul class="list-group" v-if="showCities">
                                <li
                                  v-for="(item, id) in npCities"
                                  :key="id"
                                  :value="item.name"
                                  @click="selectedCity(item)"
                                  class="autocomplete-li"
                                >
                                  <a>{{ item.name }}</a>
                                </li>
                              </ul>
                            </transition>
                          </div>
                        </div>
                        <!-- np department -->
                        <div class="dropdown-where" v-if="openCity">
                          <p>{{ $t("order.np.selected_delivery") }}</p>
                          <div class="autocomplete">
                            <input
                              type="search"
                              v-model="department_address"
                              :placeholder="$t('search')"
                              id="search_np_department"
                              ref="vendors"
                            />
                            <transition name="fade">
                              <ul class="list-group" v-if="showDepart">
                                <li
                                  v-for="(item, i) in searchDepartment"
                                  :key="i"
                                  @click="selectedDepartment(item)"
                                  class="autocomplete-li"
                                >
                                  <a>{{ item.address }}</a>
                                </li>
                              </ul>
                            </transition>
                          </div>
                          <router-link to="" class="show-map">{{
                            $t("order.show_map")
                          }}</router-link>
                        </div>
                      </div>

                      <!-- department sellpoint -->
                      <div class="department depart">
                        <div class="take-btn post-block" @click="closeCity">
                          <input
                            type="radio"
                            class="radio-btn"
                            id="radio-btn"
                            name="r-post"
                            checked
                            v-model="form.delivery_type"
                            value="Самовивіз з магазину SellPoint"
                          />
                          <label for="radio-btn">{{
                            $t("order.sell.title")
                          }}</label>
                          <p class="sub-text">{{ $t("order.sell.text") }}</p>
                        </div>
                      </div>

                      <!-- department courier -->
                      <div class="department depart">
                        <div
                          class="courier post-block courier-open"
                          @click="closeCity"
                        >
                          <div class="courier post">
                            <input
                              type="radio"
                              class="courier-post-btn"
                              id="courier-post-btn"
                              name="r-post"
                              v-model="form.delivery_type"
                              value="Кур'єром"
                              @click="courierSelected"
                            />
                            <label for="courier-post-btn" class="post-width">{{
                              $t("order.courer.title")
                            }}</label>
                            <p class="sub-text">
                              {{ $t("order.courer.text") }}
                            </p>
                          </div>
                        </div>
                        <div
                          class="dropdown-where_courer"
                          v-if="inputAddressCourer"
                        >
                          <div>
                            <input
                              type="text"
                              required
                              v-model="form.address"
                              :placeholder="$t('order.courer.placeholder_text')"
                            />
                          </div>
                        </div>
                      </div>

                      <!-- department express courier -->
                      <div class="department depart">
                        <div
                          class="expres-courier post-block"
                          @click="closeCity"
                        >
                          <div class="courier post">
                            <input
                              type="radio"
                              class="expres-courier-btn"
                              id="expres-courier-btn"
                              name="r-post"
                              v-model="form.delivery_type"
                              value="Експрес доставка"
                              @click="expressCourierSelected"
                            />
                            <label
                              for="expres-courier-btn"
                              class="post-width"
                              >{{ $t("order.expressCourer.title") }}</label
                            >
                            <p class="sub-text">
                              {{ $t("order.expressCourer.text") }}
                            </p>
                          </div>
                        </div>
                        <div
                          class="dropdown-where_courer"
                          v-if="inputAddressExpressCourer"
                        >
                          <div>
                            <input
                              type="text"
                              required
                              :placeholder="$t('order.courer.placeholder_text')"
                              v-model="form.address"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="three-buyer">
                  <div class="buyer-title">
                    <p class="buyer-title__text">
                      {{ $t("order.title_item_3") }}
                    </p>
                  </div>

                  <!-- pay -->
                  <div class="buy-block">
                    <!-- <div class="buy-block__system" @click="showBankCard">
                      <input
                        type="radio"
                        id="card-online"
                        name="card-1"
                        v-model="form.payment_type"
                        :value="$t('order.label.cardOnline')"
                      />
                      <label for="card-online">{{
                        $t("order.label.cardOnline")
                      }}</label>
                    </div> -->
                    <div class="bank-card" v-if="bankCard">
                      <div class="bank-card__title">
                        <div class="name">
                          <p>Bank</p>
                        </div>
                        <div class="logo">
                          <img src="@/assets/images/VISA.svg" alt="visa" />
                          <img
                            src="@/assets/images/MasterCard.svg"
                            alt="master-card"
                          />
                        </div>
                      </div>
                      <div class="bank-card__number">
                        <p class="text">Card number</p>
                        <input
                          type="number"
                          placeholder="XXXX XXXX XXXX XXXX"
                          v-model="formCard.card_number"
                          maxlength="16"
                          oninput="javascript: if (this.value.length >
                                    this.maxLength) this.value = this.value.slice(0,
                                    this.maxLength);"
                        />
                      </div>
                      <div class="bank-card__date">
                        <div class="date-block">
                          <div class="date">
                            <p>Expiration date</p>
                            <div class="date-i">
                              <select
                                v-model="formCard.card_month"
                                class="select-month"
                                :style="{ color: 'white' }"
                              >
                                <option
                                  v-for="n in options_month"
                                  :key="n.value"
                                  :value="n.value"
                                  :style="{ color: 'black' }"
                                >
                                  {{ n.text }}
                                </option>
                              </select>

                              <!-- <input
                                type="number"
                                placeholder="MM"
                                v-model="formCard.card_month"
                                maxlength="2"
                                oninput="javascript: if (this.value.length >
                                        this.maxLength) this.value = this.value.slice(0,
                                        this.maxLength);"
                              /> -->
                              <span>/</span>
                              <!-- <input
                                type="number"
                                placeholder="YY"
                                v-model="formCard.card_year"
                                maxlength="2"
                                oninput="javascript: if (this.value.length >
                                        this.maxLength) this.value = this.value.slice(0,
                                        this.maxLength);"
                              /> -->
                              <select
                                v-model="formCard.card_year"
                                class="select-month select-year"
                                :style="{ color: 'white' }"
                              >
                                <option
                                  v-for="n in options_year"
                                  :key="n.value"
                                  :value="n.value"
                                  :style="{ color: 'black' }"
                                >
                                  {{ n.year }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="cvv-block">
                          <p>CVV</p>
                          <input
                            type="number"
                            v-model="formCard.card_cvv"
                            maxlength="3"
                            oninput="javascript: if (this.value.length >
                                        this.maxLength) this.value = this.value.slice(0,
                                        this.maxLength);"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- <div class="buy-block__system" @click="btnPrivatPayClose">
                      <input
                        type="radio"
                        id="google-pay"
                        name="card-1"
                        v-model="form.payment_type"
                        :value="label.google"
                      />
                      <label for="google-pay">{{ label.google }}</label>
                    </div>
                    <div class="buy-block__system" @click="btnPrivatPayClose">
                      <input
                        type="radio"
                        id="apple-pay"
                        name="card-1"
                        v-model="form.payment_type"
                        :value="label.apple"
                      />
                      <label for="apple-pay">{{ label.apple }}</label>
                    </div>
                    <div class="buy-block__system" @click="btnPrivatPayOpen">
                      <input
                        type="radio"
                        id="privat-pay"
                        name="card-1"
                        v-model="form.payment_type"
                        :value="label.privat"
                      />
                      <label for="privat-pay">{{ label.privat }}</label>
                    </div> -->
                    <div class="buy-block__system" @click="btnPrivatPayClose">
                      <input
                        type="radio"
                        id="obtaining"
                        name="card-1"
                        v-model="form.payment_type"
                        value="При отриманні"
                      />
                      <label for="obtaining">{{
                        $t("order.label.upon_receipt")
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cart-block-order">
                <Order-Cart :cart="CART" @clearAll="submitOrder" />
              </div>
            </div>

            <!-- alert created order -->
            <Alert-Created
              v-if="alertCreated"
              :data_messages="this.masseges"
              @closeAlertCreated="closeAlertCreated"
            />

            <!-- modal login -->
            <div class="modal-content-form" v-if="showModalForm">
              <AuthForm @showModalForm="showModalForm = false" />
            </div>
            <!-- end modal login -->

            <!-- button order -->
            <div class="draw-up" v-if="!btnPrivat">
              <div class="draw-up__btn" v-if="isDisabled">
                <button type="submit" class="logIn" :disabled="isDisabled">
                  {{ $t("order.confirm_order") }}
                </button>
              </div>
              <div class="draw-up__btn" v-else>
                <button type="submit" class="btn-order" :disabled="isDisabled">
                  {{ $t("order.confirm_order") }}
                </button>
              </div>
            </div>

            <!-- button privat pay -->
            <div class="privat-form" v-if="btnPrivat">
              <button type="submit" :disabled="isDisabled">
                <img src="//static.liqpay.ua/buttons/p1ru.radius.png" />
              </button>
            </div>

            <!-- call me checkbox -->
            <!-- <div class="call-me-check">
              <input
                type="checkbox"
                class="call-me-check-i"
                id="call-me-check-not"
                v-model="form.call_me"
              />
              <label for="call-me-check-not">
                <p class="not-call-me">
                  {{ $t("cart.do_not_call") }}
                </p>
              </label>
            </div> -->
          </div>
        </form>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
const lang = localStorage.getItem("lang") || "uk";
const BASE_URL = process.env.VUE_APP_BASE_URL + lang;
import Header from "@/components/base/Header";
import OrderCart from "@/components/order/OrderCart";
import Footer from "@/components/base/Footer";
import { mapGetters, mapActions } from "vuex";
import { minLength } from "vuelidate/lib/validators";
import axios from "axios";
import PhoneMaskInput from "vue-phone-mask-input";
import AlertCreated from "@/components/messages/Alert-Created";
import _debounce from "lodash.debounce";
import Sidebar from "@/components/home/sidebar/Sidebar";
import AuthForm from "@/components/auth/AuthForm";
import ClickOutside from "vue-click-outside";
import Auth from "@/mixins/auth";

export default {
  name: "Order",
  mixins: [Auth],
  metaInfo() {
    return {
      title: this.$t("order_doc_title"),
    };
  },
  components: {
    Header,
    OrderCart,
    Footer,
    PhoneMaskInput,
    AlertCreated,
    Sidebar,
    AuthForm,
  },
  data() {
    return {
      form: {
        buyer_phone: "",
        buyer_first_name: "",
        buyer_last_name: "",
        buyer_middle_name: "",
        delivery_type: "",
        buyer_shipment_city: "",
        buyer_shipment_department: "",
        address: "",
        payment_type: "",
        order_items: this.$store.state.cart,
        call_me: false,
      },
      formCard: {
        card_number: "",
        card_month: "01",
        card_year: "2019",
        card_cvv: "",
        order_id: "",
      },
      bankCard: false,
      label: {
        google: "Google Pay",
        apple: "Apple Pay",
        privat: "Privat Pay",
      },
      openCity: false,
      np_department: [],
      btnPrivat: false,
      orderId: { order_id: "" },
      dataPrivatPay: "",
      options_month: [
        { value: "01", text: "01" },
        { value: "02", text: "02" },
        { value: "03", text: "03" },
        { value: "04", text: "04" },
        { value: "05", text: "05" },
        { value: "06", text: "06" },
        { value: "07", text: "07" },
        { value: "08", text: "08" },
        { value: "09", text: "09" },
        { value: "10", text: "10" },
        { value: "11", text: "11" },
        { value: "12", text: "12" },
      ],
      options_year: [
        { value: "2019", year: "2019" },
        { value: "2020", year: "2020" },
        { value: "2021", year: "2021" },
        { value: "2022", year: "2022" },
        { value: "2023", year: "2023" },
        { value: "2024", year: "2024" },
        { value: "2025", year: "2025" },
        { value: "2026", year: "2026" },
        { value: "2027", year: "2027" },
        { value: "2028", year: "2028" },
        { value: "2029", year: "2029" },
      ],
      alertCreated: false,
      masseges: {},
      npCities: [],
      showCities: true,
      showDepart: true,
      department_address: "",
      inputAddressCourer: false,
      inputAddressExpressCourer: false,
      sidebarDropdown: false,
    };
  },
  validations: {
    form: {
      buyer_phone: { minLength: minLength(13) },
      buyer_first_name: { minLength: minLength(2) },
      buyer_last_name: { minLength: minLength(2) },
      buyer_middle_name: { minLength: minLength(2) },
    },
  },
  computed: {
    ...mapGetters(["CART", "PRODUCT_ID", "SIDEBARS"]),
    ...mapGetters({
      getUser: "user/getUser",
      getId: "ORDERS_PRODUCT_ID",
    }),
    // credit card
    selectedText() {
      return (
        (this.options_month.find((n) => n.value == this.select) || {}).text ||
        ""
      );
    },
    // button disabled
    isDisabled() {
      return (
        this.form.buyer_phone.length < 13 ||
        this.form.buyer_first_name === "" ||
        this.form.buyer_last_name === "" ||
        this.form.buyer_middle_name === "" ||
        (this.form.delivery_type === "" &&
          this.form.buyer_shipment_city === "" &&
          this.form.buyer_shipment_department === "" &&
          this.form.address === "") ||
        this.form.payment_type === "" ||
        !this.CART.length
      );
    },
    // search np cities
    debouncedOnChange() {
      return _debounce(this.searchHandler, 700);
    },
    // search np department
    searchDepartment() {
      return this.np_department.filter((elem) => {
        return elem.address
          .toLowerCase()
          .includes(this.department_address.toLowerCase());
      });
    },
  },
  methods: {
    ...mapActions(["CLEAR_ALL_IN_CART"]),
    async submitOrder() {
      if (!this.getUser) {
        this.showModalForm = true;
      } else {
        const access = this.getUser.access_token;
        if (this.btnPrivat == true) {
          axios
            .post(`${BASE_URL}/orders/create/`, this.form, {
              headers: {
                Authorization: "Bearer " + access,
              },
              Accept: "application/json",
            })
            .then((response) => {
              if (response.status === 200 || response.status === 201) {
                this.alertCreated = true;
              }
              this.masseges = response.data;
              this.orderId.order_id = response.data.id;
              axios
                .post(`${BASE_URL}/payments/privat/`, this.orderId, {
                  headers: {
                    Authorization: "Bearer " + access,
                  },
                  Accept: "application/json",
                })
                .then((response) => {
                  this.masseges = response.data;
                  this.dataPrivatPay = response.data.data;
                  window.location.replace(
                    "https://www.liqpay.ua/api/3/checkout/?data=" +
                      this.dataPrivatPay
                  );
                })
                .catch((error) => {
                  if (
                    error.response.data.buyer_first_name ||
                    error.response.data.buyer_last_name ||
                    error.response.data.buyer_middle_name
                  ) {
                    alert(this.$t("order.alert_ua_letters"));
                  } else if (error.response.data.buyer_phone) {
                    alert(this.$t("order.alert_format_number"));
                  }
                });
            })
            .catch((error) => {
              if (
                error.response.data.buyer_first_name ||
                error.response.data.buyer_last_name ||
                error.response.data.buyer_middle_name
              ) {
                alert(this.$t("order.alert_ua_letters"));
              } else if (error.response.data.buyer_phone) {
                alert(this.$t("order.alert_format_number"));
              }
            });
        } else {
          axios
            .post(`${BASE_URL}/orders/create/`, this.form, {
              headers: {
                Authorization: "Bearer " + access,
              },
              Accept: "application/json",
            })
            .then((response) => {
              if (response.status === 200 || response.status === 201) {
                this.alertCreated = true;
              }
              this.masseges = response.data;
              // this.formCard.order_id = response.data.id;
              // axios.post(`${BASE_URL}/payments/card/`, this.formCard, {
              //   headers: {
              //     Authorization: "Bearer " + access,
              //   },
              //   Accept: "application/json",
              // });
            })
            .catch((error) => {
              if (
                error.response.data.buyer_first_name ||
                error.response.data.buyer_last_name ||
                error.response.data.buyer_middle_name
              ) {
                alert(this.$t("order.alert_ua_letters"));
              } else if (error.response.data.buyer_phone) {
                alert(this.$t("order.alert_format_number"));
              }
            });
        }
      }
    },

    showBankCard() {
      this.bankCard = true;
      this.btnPrivat = false;
    },

    // search np cities
    searchHandler() {
      if (this.form.buyer_shipment_city.length > 0) {
        axios
          .get(`deliveries/cities/?search=${this.form.buyer_shipment_city}`)
          .then((response) => {
            this.npCities = response.data.results;
          });
      }
    },

    showCity() {
      this.openCity = true;
    },

    closeCity() {
      this.openCity = false;
      this.form.buyer_shipment_city = "";
      this.department_address = "";
      this.showCities = true;
      this.showDepart = true;
      this.form.address = "";
    },

    btnPrivatPayOpen() {
      this.btnPrivat = true;
      this.bankCard = false;
    },

    btnPrivatPayClose() {
      this.btnPrivat = false;
      this.bankCard = false;
    },

    closeAlertCreated() {
      this.$router.push({ name: "home" });
      this.CLEAR_ALL_IN_CART();
      location.reload();
    },

    // selected cities
    selectedCity(item) {
      this.$load(async () => {
        await this.$api.npDepartment.get(item.id).then((response) => {
          this.form.buyer_shipment_city = item.name;
          this.np_department = response.data;
        });
      });
      this.showCities = this.showCities ? false : true;
    },

    // selected department
    selectedDepartment(item) {
      this.form.buyer_shipment_department = item.id;
      this.showDepart = this.showDepart ? false : true;
      this.department_address = item.address;
    },

    // expressCourierSelected
    expressCourierSelected() {
      this.inputAddressExpressCourer = true;
      this.inputAddressCourer = false;
      this.form.address = "";
    },

    // courierSelected
    courierSelected() {
      this.inputAddressCourer = true;
      this.inputAddressExpressCourer = false;
      this.form.address = "";
    },

    // show sidebar
    showSidebar() {
      this.sidebarDropdown = !this.sidebarDropdown;
    },
    hide() {
      if (this.sidebarDropdown == true) {
        this.sidebarDropdown = false;
      }
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.btn-order {
  width: 270px;
  height: 40px;
  background: $pink;
  border-radius: 15px;
  border: 0;
  display: block;
  color: $white;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  font-weight: 900;
  margin: auto;
}
.privat-form {
  margin: auto;
  width: 200px;
  button {
    border: 0;
    outline: none;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[type="number"] {
  -moz-appearance: textfield;
}
.select-month {
  border: 0;
  border-bottom: 1px solid $active-dots;
  background: transparent;
  outline: none;
  width: 50px;
  font-size: 18px;
}
.select-year {
  width: 80px;
}
.white {
  color: $white;
}
.black {
  color: $black;
}
.mb-3 {
  border: 0;
  border-bottom: 1px solid $active-dots;
  outline: none;
  width: 100%;
}
.invalid {
  color: $red;
}
.logIn {
  width: 270px;
  height: 40px;
  background: $pink;
  border-radius: 15px;
  border: 0;
  display: block;
  color: $white;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  font-weight: 900;
  margin: auto;
  opacity: 0.4;
}
</style>
