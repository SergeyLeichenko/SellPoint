<template name="confirm-password">
  <div v-if="this.show">
    <div class="modal-content-cart">
      <div class="modal-wrap">
        <div class="block-confirm">
          <button class="modal-close" @click="closeForm">
            <span>&times;</span>
          </button>
          <div class="tab-body">
            <form @submit.prevent="confirmPassword" @reset="onReset">
              <div class="input-filds">
                <div class="title">
                  <h4>Відновити пароль</h4>
                </div>
                <div class="fild-pass">
                  <input
                    required
                    v-model="password"
                    :type="[showPassword ? 'text' : 'password']"
                    :placeholder="$t('auth.placeholder_pass')"
                  />
                  <span @click="showPassword = !showPassword">
                    <i
                      class="fa"
                      :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
              <div class="btn-enter">
                <button class="enter" type="submit">
                  {{ $t("cabinet.settings.restore") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "confirm-password",
  props: {
    token_data: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      password: "",
      token: this.token_data,
      show: true,
      showPassword: false,
    };
  },
  computed: {},
  methods: {
    confirmPassword() {
      axios
        .post("/auth/password/reset/confirm/", {
          password: this.password,
          token: this.token,
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            alert(this.$t("auth.password_update"));
          }
          this.show = false;
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert(this.$t("cabinet.settings.error_password"));
          }
        });
      this.show = false;
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.email = ""),
        // Trick to reset/clear native browser form validation state
        (this.show = false);
      // console.log(this.email);
      this.$nextTick(() => {
        this.show = true;
      });
    },
    closeForm() {
      this.$emit("closeForm");
    },
  },
};
</script>

<style lang="scss" scoped>
.block-confirm {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  width: 370px;
  padding: 25px 30px;
  background: #fff;
  position: relative;
  border-radius: 10px;
  .title {
    text-align: center;
    margin-bottom: 30px;
  }
  .modal-close {
    position: absolute;
    width: 30px;
    height: 30px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    padding-top: 3px;
    border: 0;
    background: $white;
    border-radius: 50%;
    top: -31px;
    right: -19px;
  }
}
@media screen and(max-width: 435px) {
  .block-confirm {
    width: 320px;
  }
}
@media screen and(max-width: 360px) {
  .block-confirm {
    width: 290px;
  }
}
</style>
