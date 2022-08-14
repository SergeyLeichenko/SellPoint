<template>
  <div class="no-register">
    <button class="close-btn" @click="closeModal">
      <span>&times;</span>
    </button>
    <div class="personal-history__block_history" v-if="formDesign">
      <p class="personal-history__block_history_title">
        {{ $t("no_registration.title") }}
      </p>
      <p class="personal-history__block_history_text">
        {{ $t("no_registration.call") }}
      </p>
      <form @submit.prevent="submitForm" novalidate>
        <div class="input-filds">
          <p class="input-group">
            <phone-mask-input
              type="tel"
              placeholder="+38(__)XXX-XXXX"
              v-model="form.buyer_phone"
              autocomplete="tel"
              autoDetectCountry
            />
            <small class="invalid mb" v-if="form.buyer_phone.length < 13">{{
              $t("no_registration.number_phone")
            }}</small>
          </p>
          <p class="input-group">
            <input
              type="text"
              placeholder="Ім’я (тільки кирилицею)"
              v-model.trim="form.buyer_first_name"
              @blur="$v.form.buyer_first_name.$touch()"
              :class="{ invalid: $v.form.buyer_first_name.$error }"
            />
            <small class="invalid" v-if="!$v.form.buyer_first_name.minLength"
              >{{ $t("no_registration.require_name") }}
              {{ $v.form.buyer_first_name.$params.minLength.min }}
              {{ $t("no_registration.characters") }}</small
            >
            <small
              class="invalid"
              v-else-if="!$v.form.buyer_first_name.required"
              >{{ $t("no_registration.input_name") }}</small
            >
          </p>
        </div>
        <div class="personal-history__block_history_btn">
          <button type="submit" class="go-shop" :disabled="goBuy">
            {{ $t("enter") }}
          </button>
        </div>
      </form>
    </div>
    <Thanks v-if="thanks" />
  </div>
</template>

<script>
const lang = localStorage.getItem("lang") || "uk";
const BASE_URL = process.env.VUE_APP_BASE_URL + lang;
import { required, minLength } from "vuelidate/lib/validators";
import Thanks from "@/components/messages/Thanks";
import PhoneMaskInput from "vue-phone-mask-input";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "no-register-modal",
  components: {
    Thanks,
    PhoneMaskInput,
  },
  props: {
    id_product: {
      type: Number,
    },
  },
  data() {
    return {
      form: {
        buyer_phone: "",
        buyer_first_name: "",
        express_order_items: [{ product: this.id_product, quantity: 1 }],
      },
      thanks: false,
      formDesign: true,
    };
  },
  computed: {
    goBuy() {
      return (
        this.$v.form.buyer_phone.$invalid ||
        this.$v.form.buyer_first_name.$invalid
      );
    },
    ...mapGetters(["CART"]),
  },
  validations: {
    form: {
      buyer_phone: { required },
      buyer_first_name: { minLength: minLength(2), required },
    },
  },
  methods: {
    ...mapActions(["CLEAR_ALL_IN_CART"]),
    submitForm(index) {
      axios
        .post(`${BASE_URL}/orders/express/create/`, this.form, {
          Accept: "application/json",
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            this.thanks = true;
            this.formDesign = false;
            this.CLEAR_ALL_IN_CART(index);
          }
        })
        .catch((error) => {
          if (
            error.response.data.buyer_first_name &&
            error.response.status === 400
          ) {
            alert(this.$t("auth.placeholder_name"));
          } else if (
            error.response.data.buyer_phone &&
            error.response.status === 400
          ) {
            alert(this.$t("no_registration.not_corect_phone"));
          }
        });
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.no-register {
  max-width: 400px;
  margin: auto;
  padding: 0 15px 30px 15px;
  .close-btn {
    position: absolute;
    top: -30px;
    right: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 700;
    border: none;
    background: white;
    border-radius: 50%;
    padding-top: 2px;
  }
}
.invalid {
  margin-top: -27px;
  color: $red;
}
.mb {
  margin-top: -10px;
}
.personal-history__block_history {
  &_title {
    font-size: 20px;
    font-weight: 900;
    text-align: center;
  }
  &_text {
    text-align: center;
    margin: 15px 0 60px 0;
    font-weight: 300;
    font-size: 14px;
  }
  .input-filds {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  input {
    border: 0;
    outline: none;
    border-bottom: 1px solid $active-dots;
    width: 100%;
    &::placeholder {
      font-size: 14px;
      color: $active-dots;
    }
    &:nth-child(1) {
      margin-bottom: 30px;
    }
  }
  p {
    line-height: 1.6em;
    margin-top: 17px;
  }
  &_btn {
    width: 270px;
    padding: 8px 0;
    background-color: $pink;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin: auto;
    .go-shop {
      color: $white;
      font-size: 20px;
      font-weight: 900;
      text-decoration: none;
      outline: none;
      background-color: transparent;
      border: 0;
    }
  }
}
</style>
