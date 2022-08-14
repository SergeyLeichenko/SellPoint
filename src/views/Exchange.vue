<template name="exchanges">
  <div>
    <Header-New />

    <section class="about">
      <div class="wrap">
        <div class="about__title">
          <h2 class="about__title_title">{{ $t("exchanges.title") }}</h2>
        </div>
        <div
          class="about__text text_mt"
          v-for="item in $t('exchanges.textListExchange')"
          :key="item.id"
        >
          <p class="about__text_text">{{ item.text }}</p>
        </div>

        <div class="about__text block-up">
          <div class="about__text_title">
            <b>{{ $t("exchanges.title_prod") }}</b>
          </div>
          <p
            class="about__text_text"
            v-for="item in $t('exchanges.text_prod')"
            :key="item.id"
          >
            {{ item.text }}
          </p>
        </div>

        <div class="about__text">
          <p class="about__text_text">
            {{ $t("exchanges.text_depen") }}
          </p>
          <ul>
            <li v-for="item in $t('exchanges.textListExgange')" :key="item.id">
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>

        <div class="about__text">
          <p
            class="about__text_text"
            v-for="item in $t('exchanges.text_prod_2')"
            :key="item.id"
          >
            {{ item.text }}
          </p>
        </div>

        <div class="about__text">
          <div class="about__text_title">
            <b>{{ $t("exchanges.title_prod") }}</b>
          </div>
          <p class="about__text_text">
            {{ $t("exchanges.text_stat") }}
          </p>
          <ul>
            <li
              v-for="item in $t('exchanges.textListExgange_2')"
              :key="item.id"
            >
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>

        <div class="about__text">
          <p
            class="about__text_text"
            v-for="item in $t('exchanges.text_prod_3')"
            :key="item.id"
          >
            {{ item.text }}
          </p>
        </div>

        <div class="about__text">
          <div class="about__text_title">
            <b>{{ $t("exchanges.title_card") }}</b>
          </div>
          <p
            class="about__text_text"
            v-for="item in $t('exchanges.text_prod_4')"
            :key="item.id"
          >
            {{ item.text }}
          </p>
          <p class="about__text_text">
            {{ $t("exchanges.text_callback") }}
            <span class="text-blue">{{
              $t("exchanges.text_statement_1")
            }}</span>
            {{ $t("exchanges.text_statement_2") }}
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
  name: "exchanges",
  metaInfo() {
    return {
      title: this.$t("exchanges.title"),
    };
  },
  components: {
    HeaderNew,
    Footer,
  },
  data() {
    return {
      sidebarDropdown: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_about-us.scss";
.text_mt {
  margin-bottom: 0;
}
.block-up {
  margin-top: 30px;
}
.text-blue {
  color: $bg-blue;
  display: contents;
}
</style>
