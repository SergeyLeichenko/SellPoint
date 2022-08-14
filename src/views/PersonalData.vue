<template name="personal-data">
  <div>
    <Header-New />

    <section class="about">
      <div class="wrap">
        <div class="about__title">
          <h2 class="about__title_title">{{ $t("title_personal_data") }}</h2>
        </div>
        <div class="about__text">
          <p class="about__text_text">{{ $t("personal_data.text_1") }}</p>
        </div>
        <div class="about__text">
          <div class="about__text_title mb">
            {{ $t("personal_data.title_consent") }}
          </div>
          <p class="about__text_text">
            {{ $t("personal_data.text_2") }}
          </p>
        </div>
        <div class="about__text">
          <p class="about__text_text">{{ $t("personal_data.text_3") }}</p>
        </div>
        <div class="about__text">
          <p class="about__text_text">{{ $t("personal_data.text_4") }}</p>
          <ul>
            <li v-for="item in $t('personal_data.listItems')" :key="item.id">
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
        <div class="about__text">
          <div class="about__text_title mb">
            {{ $t("personal_data.title_meta") }}
          </div>
          <ul>
            <li
              v-for="item in $t('personal_data.listItemsMeta')"
              :key="item.id"
            >
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
        <div class="about__text">
          <p class="about__text_text">{{ $t("personal_data.text_5") }}</p>
        </div>
        <div class="about__text">
          <div class="about__text_title mb">
            {{ $t("personal_data.title_right") }}
          </div>
          <ul>
            <li
              v-for="item in $t('personal_data.listItemsData')"
              :key="item.id"
            >
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
        <div class="about__text">
          <p class="about__text_text">{{ $t("personal_data.text_6") }}</p>
        </div>
        <div class="about__text">
          <p class="about__text_text">{{ $t("personal_data.text_7") }}</p>
        </div>
        <div class="about__text">
          <p class="about__text_text">{{ $t("personal_data.text_8") }}</p>
        </div>
        <div class="about__text">
          <p class="about__text_text">{{ $t("personal_data.text_9") }}</p>
        </div>
        <div class="about__text">
          <p class="about__text_text">{{ $t("personal_data.text_10") }}</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import HeaderNew from "@/components/base/HeaderNew";
import Footer from "@/components/base/Footer";
export default {
  name: "personal-data",
  metaInfo() {
    return {
      title: this.$t("title_personal_data"),
    };
  },
  components: {
    HeaderNew,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_about-us.scss";
.contact {
  height: 500px;
  &__title {
    text-align: center;
  }
}
</style>
