<template>
  <div v-if="show">
    <b-modal id="modal-1" title="Редагування даних" :hide-footer="true">
      <!-- @reset="onReset" -->
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-1"
          :label="$t('cabinet.settings.sur_name')"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            :model="form.last_name"
            type="text"
            :placeholder="full_filds.last_name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          :label="$t('cabinet.settings.first_name')"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.first_name"
            type="text"
            :placeholder="full_filds.first_name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          :label="$t('cabinet.settings.middle_name')"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="form.middle_name"
            type="text"
            :placeholder="full_filds.middle_name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          :label="$t('cabinet.settings.phone')"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="form.phone"
            type="tel"
            :placeholder="full_filds.phone"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          :label="$t('cabinet.settings.sex')"
          label-for="input-5"
        >
          <b-form-select
            id="input-5"
            v-model="form.gender"
            :options="genders"
            type="text"
            :placeholder="full_filds.gender"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          :label="$t('cabinet.settings.lenguage')"
          label-for="input-6"
        >
          <b-form-select
            id="input-6"
            v-model="form.language"
            :options="languages"
            type="text"
            :placeholder="full_filds.language"
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-7" label="e-mail:" label-for="input-7">
          <b-form-input
            id="input-7"
            v-model="form.email"
            type="email"
            :placeholder="full_filds.email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-8"
          :label="$t('cabinet.settings.address')"
          label-for="input-8"
        >
          <b-form-input
            id="input-8"
            v-model="form.delivery_address"
            type="text"
            :placeholder="full_filds.delivery_address"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">{{
          $t("cabinet.settings.save_btn")
        }}</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "form-update",
  props: {
    full_filds: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      form: {
        last_name: this.full_filds.last_name,
        first_name: this.full_filds.first_name,
        middle_name: this.full_filds.middle_name,
        phone: this.full_filds.phone,
        gender: this.full_filds.gender,
        language: this.full_filds.language,
        email: this.full_filds.email,
      },
      genders: [
        this.$t("cabinet.settings.genders_male"),
        this.$t("cabinet.settings.genders_female"),
      ],
      languages: [
        this.$t("cabinet.settings.lang_ua"),
        this.$t("cabinet.settings.lang_ru"),
        this.$t("cabinet.settings.lang_en"),
      ],
      show: true,
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    onSubmit() {
      if (this.form === "") {
        console.log("empty");
      } else if (this.form != "") {
        const access = this.getUser.access_token;
        axios.patch("user/", this.form, {
          headers: {
            Authorization: "Bearer " + access,
          },
        });
        this.show = false;
        location.reload();
      }
      alert("Дані оновлено!");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 16px;
}
.form-control {
  border: 0;
  border-bottom: 1px solid $active-dots;
  border-radius: 0;
  outline: none;
}
.modal_content {
  border-radius: 20px !important;
}
.btn-primary {
  display: block;
  margin-left: auto;
  width: 150px;
  height: 40px;
}
.custom-select {
  border: 0;
  border-bottom: 1px solid $active-dots;
  border-radius: 0;
  outline: none;
}
</style>
