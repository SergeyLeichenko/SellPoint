<template>
  <div>
    <div class="google-account">
      <!-- connect google account -->
      <div
        class="google-account__block google-account__block-connect"
        @click="connectSocialGoogle"
      >
        <img
          src="@/assets/images/Google_icon.svg"
          alt="Google icon"
          title="Google"
        />
        <div class="text-link">
          <p class="provider">Google</p>
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
  name: "google-account",
  data() {
    return {
      googleForm: {
        access_token: "",
        id_token: "",
      },
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    connectSocialGoogle() {
      const access = this.getUser.access_token;
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          // console.log(GoogleUser);
          this.googleForm.access_token = GoogleUser.wc.access_token;
          this.googleForm.id_token = GoogleUser.wc.id_token;
          this.$store.state.id_token_social_google = GoogleUser.wc.id_token;
          this.$store.state.access_token_social_google =
            GoogleUser.wc.access_token;
          axios
            .post("profile/auth/connect/google/", this.googleForm, {
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
        })
        .catch((error) => {
          if (error.error) {
            alert(this.$t("auth.user_close_popup_g"));
          } else {
            alert(this.$t("auth.g_technical_problem"));
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
