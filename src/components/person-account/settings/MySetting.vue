<template>
  <div>
    <div class="personal-history">
      <div class="personal-history__title">
        <!-- <h2>Профіль та налаштування</h2> -->
        <h2>{{ $t("cabinet.sidebar.settings") }}</h2>
      </div>
      <div class="personal-history__block">
        <div class="personal-order">
          <div class="personal-order__title">
            <p>{{ $t("cabinet.settings.data") }}</p>
          </div>

          <div class="personal-order__data">
            <div class="personal-order__data_icon">
              <img src="@/assets/images/user-grey.svg" />
            </div>
            <div class="personal-order__data_block">
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p>
                    <b>{{ $t("cabinet.settings.sur_name") }}</b>
                  </p>
                  <p>{{ setting_data_item.last_name }}</p>
                </div>
              </div>
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p>
                    <b>{{ $t("cabinet.settings.first_name") }}</b>
                  </p>
                  <p>{{ setting_data_item.first_name }}</p>
                </div>
              </div>
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p>
                    <b>{{ $t("cabinet.settings.middle_name") }}</b>
                  </p>
                  <p>{{ setting_data_item.middle_name }}</p>
                </div>
              </div>
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p>
                    <b>{{ $t("cabinet.settings.sex") }}</b>
                  </p>
                  <p>{{ setting_data_item.gender }}</p>
                </div>
              </div>
              <!-- <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p><b>Дата народження</b></p>
                  <p></p>
                </div>
              </div> -->
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p>
                    <b>{{ $t("cabinet.settings.lenguage") }}</b>
                  </p>
                  <p>{{ setting_data_item.language }}</p>
                </div>
              </div>
            </div>
            <div class="personal-order__data_icon" v-b-modal.modal-1>
              <img src="@/assets/images/remove-grey.svg" />
            </div>
          </div>

          <FormUpdate :full_filds="setting_data_item" />

          <div class="personal-order__data">
            <div class="personal-order__data_icon">
              <img src="@/assets/images/phone-grey.svg" />
            </div>
            <div class="personal-order__data_block">
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p>
                    <b>{{ $t("cabinet.settings.phone") }}</b>
                  </p>
                  <p v-if="this.setting_data_item.phone == null">
                    {{ $t("cabinet.settings.added_phone") }}
                  </p>
                  <p>
                    {{ setting_data_item.phone }}
                  </p>
                </div>
              </div>
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p><b>e-mail:</b></p>
                  <p>{{ setting_data_item.email }}</p>
                </div>
              </div>
            </div>
            <div class="personal-order__data_icon" v-b-modal.modal-1>
              <img src="@/assets/images/remove-grey.svg" />
            </div>
          </div>

          <div class="personal-order__data">
            <div class="personal-order__data_icon">
              <img src="@/assets/images/point-grey.svg" />
            </div>
            <div class="personal-order__data_block">
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p>
                    <b>{{ $t("cabinet.settings.address") }}</b>
                  </p>
                  <p>{{ setting_data_item.delivery_address }}</p>
                </div>
              </div>
            </div>
            <div class="personal-order__data_icon" v-b-modal.modal-1>
              <img src="@/assets/images/remove-grey.svg" />
            </div>
          </div>

          <!-- facebook buttons -->
          <div class="personal-order__data">
            <div class="personal-order__data_icon">
              <img src="@/assets/images/facebook-grey.svg" />
            </div>
            <div class="personal-order__data_block">
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p>
                    <b>{{ $t("cabinet.settings.connect_fb") }}</b>
                  </p>
                </div>

                <FacebookConnect
                  v-if="
                    !accountsGoogleList.length || this.provider === 'google'
                  "
                />

                <div class="btn-disconnect" v-if="accountsGoogleList.length">
                  <FacebookDisconnect
                    v-for="item in accountsGoogleList"
                    :key="item.id"
                    :account_data="item"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- end facebook buttons -->

          <!-- google buttons -->
          <div class="personal-order__data">
            <div class="personal-order__data_icon">
              <img src="@/assets/images/google-grey.svg" />
            </div>
            <div class="personal-order__data_block">
              <div class="personal-order__data_block_surname">
                <div class="surname">
                  <p>
                    <b>{{ $t("cabinet.settings.connect_g") }}</b>
                  </p>
                </div>

                <GoogleConnect
                  v-if="
                    !accountsGoogleList.length || this.provider === 'facebook'
                  "
                />

                <div class="btn-disconnect" v-if="accountsGoogleList.length">
                  <GoogleDisconnect
                    v-for="item in accountsGoogleList"
                    :key="item.id"
                    :account_data="item"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- end google buttons -->

          <!-- changes password -->
          <div class="personal-order__data">
            <div class="personal-order__data_icon">
              <img src="@/assets/images/key-grey.svg" />
            </div>
            <div class="personal-order__data_block">
              <div class="personal-order__data_block_surname">
                <div class="surname edit-pass" v-b-modal.modal-2>
                  <!-- change password -->
                  <p>{{ $t("cabinet.settings.change_password") }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- end changes password -->

          <NewPassword />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormUpdate from "./Form-Update.vue";
import NewPassword from "./NewPassword.vue";
import { mapGetters } from "vuex";
import axios from "axios";
import GoogleConnect from "./buttonGoogle/GoogleConnect.vue";
import GoogleDisconnect from "./buttonGoogle/GoogleDisconnect.vue";
import FacebookConnect from "./buttonFacebook/FacebookConnect.vue";
import FacebookDisconnect from "./buttonFacebook/FacebookDisconnect.vue";
export default {
  name: "setting-item",
  data() {
    return {
      accountsGoogleList: [],
      provider: "",
    };
  },
  props: {
    setting_data_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    FormUpdate,
    NewPassword,
    GoogleConnect,
    GoogleDisconnect,
    FacebookConnect,
    FacebookDisconnect,
  },
  created() {
    this.accountsSocialGoogle();
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    accountsSocialGoogle() {
      const access = this.getUser.access_token;
      axios
        .get(`profile/auth/social/accounts/`, {
          headers: {
            Authorization: "Bearer " + access,
          },
        })
        .then((response) => {
          this.accountsGoogleList = response.data;
          for (let i = 0; i < response.data.length; i++) {
            this.provider = response.data[i].provider;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.fa-trash-alt {
  color: $active-dots;
}
</style>
