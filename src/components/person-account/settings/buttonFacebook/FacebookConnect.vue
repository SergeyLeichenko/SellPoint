<template name="facebook-account">
  <div>
    <div class="google-account">
      <!-- connect facebook account -->
      <div
        class="google-account__block google-account__block-connect"
        @click="connectSocialFacebook"
      >
        <img
          src="@/assets/images/Facebook_icon.png"
          alt="Facebook icon"
          title="Facebook"
          class="facebook"
        />
        <div class="text-link">
          <p class="provider">Facebook</p>
          <p class="connect">{{ $t("cabinet.settings.text_connect_g") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "facebook-account",
  data() {
    return {
      facebookForm: {
        access_token: "",
      },
      profile: {},
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    // facebook auth
    getProfile() {
      let vm = this;
      window.FB.api("/me?fields=id,last_name,first_name", function (response) {
        vm.$set(vm, "profile", response);
      });
    },
    connectSocialFacebook() {
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
    statusChangeCallback(response) {
      let vm = this;
      const access = this.getUser.access_token;
      if (response.status === "connected") {
        vm.facebookForm.access_token = response.authResponse.accessToken;
        vm.$store.state.access_token_social_facebook =
          response.authResponse.accessToken;
        axios
          .post("profile/auth/connect/facebook/", this.facebookForm, {
            headers: {
              Authorization: "Bearer " + access,
            },
          })
          .then((response) => {
            if (response.status === 200 || response.status === 201) {
              alert(this.$t("cabinet.settings.alert_connect_social"));
              location.reload();
              localStorage.setItem("user", JSON.stringify(response.data));
              this.$store.dispatch("user/setUser", response.data);
            }
          })
          .catch((error) => {
            console.log(error.response);
            if (error.response.status === 400) {
              alert(this.$t("cabinet.settings.alert_error_connect_social"));
            }
          });
        // console.log(response);
        vm.getProfile();
      } else if (response.status === "not_authorized") {
        alert(this.$t("auth.not_authorized_fb"));
      } else if (response.status === "unknown") {
        vm.profile = {};
        // console.log(response);
      } else {
        // vm.authorized = false;
      }
    },
    // end facebook auth
  },
};
</script>

<style lang="scss" scoped></style>
