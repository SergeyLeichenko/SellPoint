<template name="cooperation">
  <div>
    <Header-New />

    <section class="about">
      <div class="wrap">
        <div class="about__title">
          <h2 class="about__title_title">{{ $t("cooperation_page.title") }}</h2>
        </div>
        <div class="about__text">
          <p class="about__text_text">
            {{ $t("cooperation_page.text") }}
          </p>
          <p class="about__text_text">
            {{ $t("cooperation_page.text_1") }}
          </p>
        </div>
        <div class="about__text">
          <div class="about__text_title mb">
            {{ $t("cooperation_page.listGroupOnSite_title") }}
          </div>
          <ul>
            <li
              v-for="item in $t('cooperation_page.listGroupOnSite')"
              :key="item.id"
            >
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
        <div class="about__text">
          <div class="about__text_title mb">
            {{ $t("cooperation_page.listGroupNotSite_title") }}
          </div>
          <ul>
            <li
              v-for="item in $t('cooperation_page.listGroupNotSite')"
              :key="item.id"
            >
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
        <div class="about__text">
          <p class="about__text_text">
            {{ $t("cooperation_page.propos") }}
            <span>office@sellpoint.com.ua</span>
          </p>
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
  name: "cooperation",
  metaInfo() {
    return {
      title: this.$t("cooperation_page.title"),
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
</style>
