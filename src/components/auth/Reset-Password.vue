<template name="reset-password">
  <div>
    <b-modal
      id="modal-3"
      title="Відновити пароль"
      :hide-footer="true"
      v-if="show"
    >
      <div class="tab-body">
        <form @submit.prevent="resetPassword" @reset="onReset">
          <div class="input-filds">
            <div class="fild-pass">
              <input
                type="email"
                required
                v-model="email"
                placeholder="Введіть email"
              />
            </div>
          </div>
          <div class="btn-enter">
            <button class="enter" type="submit">
              {{ $t("cabinet.settings.restore") }}
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "reset-password",
  data() {
    return {
      email: "",
      show: true,
    };
  },
  computed: {},
  methods: {
    resetPassword() {
      axios
        .post("/auth/password/reset/", { email: this.email })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            alert(this.$t("auth.sms_send_email") + " " + this.email);
          }
          // console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
      this.show = false;
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.email = ""),
        // Trick to reset/clear native browser form validation state
        (this.show = false);
      console.log(this.email);
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
