<template>
  <div v-if="account_data.provider === 'facebook'">
    <div class="google-account">
      <!-- disconnect facebook account -->
      <div
        class="google-account__block google-account__block-disconnect"
        @click="disconnectSocialFacebook"
      >
        <img
          src="@/assets/images/Facebook_icon.png"
          alt="Facebook icon"
          title="Facebook"
        />
        <div class="text-link">
          <p class="provider">Facebook</p>
          <p class="connect">{{ $t("cabinet.settings.text_disconnect_g") }}</p>
        </div>
      </div>
    </div>
    <p class="connect-text">
      {{ $t("cabinet.settings.connect_text") }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "facebook-account",
  props: {
    account_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      formConnectFacebook: {
        access_token: this.$store.state.access_token_social_facebook,
      },
      id_provider: this.account_data.id,
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    disconnectSocialFacebook() {
      const access = this.getUser.access_token;
      axios
        .post(
          `profile/auth/social/disconnect/${this.id_provider}/`,
          this.formConnectFacebook,
          {
            headers: {
              Authorization: "Bearer " + access,
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert(this.$t("cabinet.settings.alert_disconnect"));
            location.reload();
          } else {
            alert(this.$t("cabinet.settings.alert_error"));
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.connect-text {
  color: $red;
}
</style>
