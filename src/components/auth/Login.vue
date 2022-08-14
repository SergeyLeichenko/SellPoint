<template>
  <div class="tab-body">
    <form @submit.prevent="signIn">
      <div class="input-filds">
        <input
          required
          type="text"
          :placeholder="$t('auth.placeholder_phone_email')"
          v-model.trim="phone"
          @blur="$v.email.$touch()"
          :class="{ invalid: $v.email.$error }"
        />
        <small class="invalid" v-if="!$v.email.email">
          {{ $t("auth.valid_email") }}</small
        >
        <div class="fild-pass" novalidate>
          <input
            :type="[showPassword ? 'text' : 'password']"
            :placeholder="$t('auth.placeholder_pass')"
            class="inputPass_1"
            v-model.trim="password"
            @blur="$v.password.$touch()"
            :class="{ invalid: $v.password.$error }"
          />
          <span @click="showPassword = !showPassword">
            <i
              class="fa"
              :class="[showPassword ? 'fa-eye eye_1' : 'fa-eye-slash eye_1']"
              aria-hidden="true"
            ></i>
          </span>
        </div>
        <small class="invalid" v-if="!$v.password.minLength">
          {{ $t("auth.valid_password_1") }}
          {{ $v.password.$params.minLength.min }}
          {{ $t("auth.valid_password_2") }} {{ password.length }}</small
        >
      </div>
      <div class="remember">
        <div class="remember__me">
          <input type="checkbox" class="check-me" id="check-me" />
          <label for="check-me">{{ $t("auth.remember") }}</label>
        </div>
        <div class="remind">
          <p v-b-modal.modal-3>{{ $t("auth.remind_password") }}</p>
        </div>
      </div>
      <div class="btn-enter">
        <button
          type="submit"
          class="enter"
          :disabled="submitLogin"
          v-if="this.phone && this.password"
        >
          {{ $t("auth.log_in") }}
        </button>
        <button type="submit" class="logIn" :disabled="submitLogin" v-else>
          {{ $t("auth.log_in") }}
        </button>
      </div>
    </form>
    <!-- <div class="social-registr">
      <p>{{ $t("auth.log_in_user") }}</p>
      <div class="social-registr-block">
        <form @click="loginWithFacebook">
          <div class="facebook-icon">
            <router-link to="">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C19.3598 0 24.9242 5.59751 24.9242 12.5C24.9242 19.4025 19.3598 25 12.5 25C5.64022 25 0.0758057 19.4025 0.0758057 12.5C0.0758057 5.59751 5.64022 0 12.5 0Z"
                  fill="white"
                />
                <path
                  d="M12.4975 0C19.398 0 24.995 5.63033 24.995 12.5739C24.995 18.869 20.392 24.0808 14.3876 25V16.2672H17.5324L18.0131 12.5739H14.3632V10.2101C14.3632 9.14314 14.6565 8.40446 16.1881 8.40446H18.1353V5.09685C17.1902 4.99015 16.2451 4.94091 15.3001 4.94911C12.4975 4.94911 10.583 6.67269 10.583 9.84078V12.5821H7.40564V16.2754H10.5993V25C4.59492 24.0808 0 18.869 0 12.5739C0 5.63033 5.597 0 12.4975 0Z"
                  fill="#1877F2"
                />
              </svg>
            </router-link>
          </div>
        </form>
        <form @click="loginWithGoogle">
          <div class="google-icon">
            <router-link to="">
              <svg
                width="25"
                height="25"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.20076 20.1676C1.16059 18.2377 0.570312 16.0296 0.570312 13.6831C0.570312 11.4145 1.12221 9.27462 2.09984 7.39064H2.10072L6.5567 11.0402C6.27243 11.8685 6.1177 12.7579 6.1177 13.6834C6.11798 14.6881 6.29972 15.6503 6.6333 16.5383L2.20076 20.1679V20.1676Z"
                  fill="#FBBB00"
                />
                <path
                  d="M27.6894 11.127C27.8466 11.9544 27.9283 12.8095 27.9283 13.6829C27.9283 14.6625 27.8252 15.6181 27.6291 16.5397C26.9631 19.6767 25.2231 22.4152 22.8128 24.3533L22.8119 24.3525L18.3567 20.7042C19.9559 19.7657 21.206 18.2974 21.8644 16.5397H14.5498V11.127H21.9712H27.6891H27.6894Z"
                  fill="#518EF8"
                />
                <path
                  d="M22.8119 24.3527L22.8127 24.3535C20.4686 26.238 17.4906 27.3659 14.2489 27.3659C9.03982 27.3659 4.51095 24.4535 2.20068 20.1676L6.63357 16.5379C7.7887 19.6219 10.7627 21.8168 14.2489 21.8168C15.7478 21.8168 17.1517 21.4118 18.3565 20.7041L22.8116 24.3527H22.8119Z"
                  fill="#28B446"
                />
                <path
                  d="M22.9803 3.15022L18.5492 6.77897C17.3022 5.99944 15.8284 5.54907 14.2492 5.54907C10.6838 5.54907 7.65396 7.8451 6.55686 11.0396L2.10087 7.39023H2.1001C4.37655 2.99998 8.96267 1.52588e-05 14.2492 1.52588e-05C17.5681 1.52588e-05 20.6114 1.18281 22.9803 3.15022Z"
                  fill="#F14336"
                />
              </svg>
            </router-link>
          </div>
        </form>
      </div>
    </div> -->
  </div>
</template>

<script>
import { email, minLength } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "login",
  components: {},
  data() {
    return {
      phone: "",
      password: "",
      showPassword: false,
      googleForm: {
        access_token: "",
        id_token: "",
      },
      facebookForm: {
        access_token: "",
      },
      profile: {},
    };
  },
  validations: {
    email: { email },
    password: { minLength: minLength(6) },
  },
  computed: {
    submitLogin() {
      return this.$v.email.$invalid || this.$v.password.$invalid;
    },
  },
  created() {},
  methods: {
    signIn() {
      this.$api.auth
        .signIn({
          phone: this.phone,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          this.$store.dispatch("user/setUser", response.data);
          if (response.status === 200 || response.status === 201) {
            location.reload();
          }
        })
        .catch((error) => {
          if (error.response.data.password || error.response.data.phone) {
            alert(this.$t("auth.pass_empty"));
          } else if (error.response.status === 401) {
            alert(this.$t("auth.not_user"));
          } else if (error.response.data.email) {
            alert(this.$t("auth.error_email_user"));
          }
        });
    },
    // google auth
    loginWithGoogle() {
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          const objUser = GoogleUser.Cc;
          // console.log(objUser);

          this.googleForm.access_token = objUser.access_token;
          this.googleForm.id_token = objUser.id_token;
          this.$store.state.id_token_social_google = objUser.id_token;
          this.$store.state.access_token_social_google = objUser.access_token;
          axios.post("auth/google/", this.googleForm).then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data));
            this.$store.dispatch("user/setUser", response.data);
            if (response.status === 200 || response.status === 201) {
              location.reload();
            }
          });
        })
        .catch((error) => {
          if (error.error) {
            alert(this.$t("auth.user_close_popup_g"));
          } else {
            alert(this.$t("auth.g_technical_problem"));
          }
        });
    },
    // facebook auth
    getProfile() {
      let vm = this;
      window.FB.api("/me?fields=id,last_name,first_name", function (response) {
        vm.$set(vm, "profile", response);
      });
    },
    loginWithFacebook() {
      let vm = this;
      window.FB.login(
        function (response) {
          vm.statusChangeCallback(response);
        },
        {
          scope: "email, public_profile",
          return_scopes: true,
        }
      );
    },
    // logout() {
    //   let vm = this;
    //   window.FB.logout(function (response) {
    //     vm.statusChangeCallback(response);
    //   });
    // },
    statusChangeCallback(response) {
      let vm = this;
      if (response.status === "connected") {
        vm.facebookForm.access_token = response.authResponse.accessToken;
        vm.$store.state.access_token_social_facebook =
          response.authResponse.accessToken;
        axios.post("auth/facebook/", this.facebookForm).then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          this.$store.dispatch("user/setUser", response.data);
          if (response.status === 200 || response.status === 201) {
            location.reload();
          }
        });
        vm.getProfile();
      } else if (response.status === "not_authorized") {
        alert(this.$t("auth.not_authorized_fb"));
      } else if (response.status === "unknown") {
        vm.profile = {};
      } else {
        // vm.authorized = false;
      }
    },
    // end facebook auth
  },
  mounted() {
    (function (d) {
      let js,
        id = "facebook-jssdk";
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement("script");
      js.id = id;
      js.async = true;
      js.src = "https://connect.facebook.net/en_US/all.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document);
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.VUE_APP_FACEBOOK_ID,
        // autoLogAppEvents: true,
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });
      // Get FB Login Status
      // window.FB.getLoginStatus((response) => {
      //   vm.statusChangeCallback(response);
      // });
    };
  },
};
</script>

<style lang="scss" scoped>
.logIn {
  background-color: $pink;
  color: $white;
  font-weight: 900;
  opacity: 0.4;
  width: 300px;
  padding: 10px 10px;
  border-radius: 15px;
  align-items: center;
  font-size: 20px;
  border: 0;
  outline: none;
  margin: auto;
  display: block;
}
</style>
