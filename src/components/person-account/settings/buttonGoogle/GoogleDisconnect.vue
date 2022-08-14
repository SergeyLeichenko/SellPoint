<template>
  <div v-if="account_data.provider === 'google'">
    <div class="google-account">
      <!-- disconnect google account -->
      <div
        class="google-account__block google-account__block-disconnect"
        @click="disconnectSocialGoogle"
      >
        <img
          src="@/assets/images/Google_icon.svg"
          alt="Google icon"
          title="Google"
        />
        <div class="text-link">
          <p class="provider">Google</p>
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
  name: "google-account",
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
      formConnectGoogle: {
        access_token: this.$store.state.access_token_social_google,
        id_token: this.$store.state.id_token_social_google,
      },
      id_provider: this.account_data.id,
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    disconnectSocialGoogle() {
      const access = this.getUser.access_token;
      axios
        .post(
          `profile/auth/social/disconnect/${this.id_provider}/`,
          this.formConnectGoogle,
          {
            headers: {
              Authorization: "Bearer " + access,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          if (response.status === 200) {
            alert(this.$t("cabinet.settings.alert_disconnect"));
            location.reload();
          } else {
            alert(this.$t("cabinet.settings.alert_error"));
          }
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
