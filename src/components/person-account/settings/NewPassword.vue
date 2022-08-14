<template>
  <div>
    <AlertPassword v-if="alert" @closeAlert="closeAlert" />
    <b-modal
      id="modal-2"
      :title="$t('cabinet.settings.change_password')"
      :hide-footer="true"
      v-if="show"
    >
      <div class="tab-body">
        <form @submit.prevent="onSubmit" @reset="onReset">
          <div class="input-filds">
            <div class="fild-pass">
              <input
                :type="[showPassword ? 'text' : 'password']"
                v-model="form.new_password1"
                :placeholder="$t('auth.placeholder_pass')"
                @blur="$v.new_password1.$touch()"
                :class="{ invalid: $v.new_password1.$error }"
                required
              />
              <span @click="showPassword = !showPassword">
                <i
                  class="fa"
                  :class="[
                    showPassword ? 'fa-eye eye_1' : 'fa-eye-slash eye_1',
                  ]"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <small class="invalid" v-if="!$v.new_password1.minLength">
              {{ $t("auth.valid_password_1") }}
              {{ $v.new_password1.$params.minLength.min }}
              {{ $t("auth.valid_password_2") }}
              {{ new_password1.length }}</small
            >
            <div class="fild-pass">
              <input
                :type="[showPassword ? 'text' : 'password']"
                v-model="form.new_password2"
                :placeholder="$t('auth.placeholder_pass_confirm')"
                @blur="$v.new_password2.$touch()"
                :class="{ invalid: $v.new_password2.$error }"
                required
              />
              <span @click="showPassword = !showPassword">
                <i
                  class="fa"
                  :class="[
                    showPassword ? 'fa-eye eye_1' : 'fa-eye-slash eye_1',
                  ]"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <small class="invalid" v-if="!$v.new_password2.sameAsPassword">
              {{ $t("auth.passwords_do_not_match") }}</small
            >
          </div>
          <div class="btn-enter">
            <button class="enter" type="submit" :disabled="submitLogin">
              {{ $t("cabinet.settings.save_btn") }}
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import { minLength, sameAs } from "vuelidate/lib/validators";
import AlertPassword from "@/components/messages/Alert-Password";
export default {
  components: {
    AlertPassword,
  },
  data() {
    return {
      form: {
        new_password1: "",
        new_password2: "",
      },
      show: true,
      alert: false,
      showPassword: false,
    };
  },
  validations: {
    new_password1: { minLength: minLength(6) },
    new_password2: { sameAsPassword: sameAs("new_password1") },
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
    submitLogin() {
      return this.$v.new_password1.$invalid || this.$v.new_password2.$invalid;
    },
  },
  methods: {
    onSubmit() {
      if (this.new_password1 === "" || this.new_password2 === "") {
        alert("Заповніть поля!");
      } else {
        const access = this.getUser.access_token;
        axios
          .post("auth/password/change/", this.form, {
            headers: {
              Authorization: "Bearer " + access,
            },
          })
          .then((response) => {
            if (response.status === 200 || response.status === 201) {
              this.alert = true;
              this.show = false;
              location.reload();
            }
          })
          .catch((error) => {
            this.show = false;
            if (error.response.data.new_password2) {
              alert(this.$t("cabinet.settings.error_password"));
              location.reload();
            }
          });
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.form.new_password1 = ""),
        (this.form.new_password1 = ""),
        // Trick to reset/clear native browser form validation state
        (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    },
    closeAlert() {
      this.alert = false;
      location.reload();
    },
  },
};
</script>
<style lang="scss" scoped>
.form-control {
  border: 0;
  border-bottom: 1px solid $active-dots;
  border-radius: 0;
  outline: none;
}
.btn-primary {
  display: block;
  margin-left: auto;
  width: 150px;
  height: 40px;
}
</style>
