<template name="about-us">
  <div>
    <Header-New />

    <section class="about">
      <div class="wrap">
        <div class="about__title">
          <h2 class="about__title_title">{{ $t("about_us_page.title") }}</h2>
        </div>
        <div
          class="about__text"
          v-for="item in $t('about_us_page.textList')"
          :key="item.id"
        >
          <div class="about__text_title">{{ item.title }}</div>
          <p class="about__text_text">{{ item.text_1 }}</p>
          <p class="about__text_text">{{ item.text_2 }}</p>
          <p class="about__text_text">{{ item.text_3 }}</p>
          <p class="about__text_text">{{ item.text_4 }}</p>
        </div>
        <div class="about__text">
          <div class="about__text_title">
            {{ $t("about_us_page.title_assortment") }}
          </div>
          <ul>
            <li v-for="item in $t('about_us_page.listItems')" :key="item.id">
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
        <div class="about__text">
          <div class="about__text_title">
            {{ $t("about_us_page.title_plus") }}
          </div>
          <ul>
            <li v-for="item in $t('about_us_page.listPlus')" :key="item.id">
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
        <div class="about__text">
          <div class="about__text_title">
            {{ $t("about_us_page.title_pay") }}
          </div>
          <p class="about__text_text">{{ $t("about_us_page.text_pay_1") }}</p>
          <p class="about__text_text">{{ $t("about_us_page.text_pay_2") }}</p>
          <ul>
            <li v-for="item in $t('about_us_page.listPay')" :key="item.id">
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
        <div class="about__text">
          <div class="about__text_title">
            {{ $t("about_us_page.title_delivery") }}
          </div>
          <p class="about__text_text">
            {{ $t("about_us_page.text_delivery_1") }}
          </p>
          <p class="about__text_text">
            {{ $t("about_us_page.text_delivery_2") }}
          </p>
          <ul>
            <li v-for="item in $t('about_us_page.listDelivery')" :key="item.id">
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
          <p class="about__text_text">
            {{ $t("about_us_page.text_delivery_3") }}
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
  name: "about-us",
  metaInfo() {
    return {
      title: this.$t("about_us_page.title"),
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
