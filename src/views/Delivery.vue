<template name="delivery">
  <div>
    <Header-New />

    <section class="about">
      <div class="wrap">
        <div class="about__title">
          <h2 class="about__title_title">{{ $t("delivery.title") }}</h2>
        </div>
        <div
          class="about__text text_mt"
          v-for="item in $t('delivery.textList')"
          :key="item.id"
        >
          <p class="about__text_text">{{ item.text }}</p>
        </div>

        <div class="about__text block-up">
          <div class="about__text_title">{{ $t("delivery.title_inCash") }}</div>
          <ul>
            <li v-for="item in $t('delivery.inCash')" :key="item.id">
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>

        <div class="about__text">
          <div class="about__text_title">{{ $t("delivery.title_curier") }}</div>
          <p class="about__text_text">{{ $t("delivery.text_curier") }}</p>
        </div>

        <div class="about__text">
          <div class="about__text_title">
            {{ $t("delivery.title_card_map") }}
          </div>
          <p
            class="about__text_text"
            v-for="item in $t('delivery.textMaps')"
            :key="item.id"
          >
            {{ item.text }}
          </p>
        </div>

        <div class="about__text">
          <div class="about__text_title">
            {{ $t("delivery.title_accounting") }}
          </div>
          <ul>
            <li v-for="item in $t('delivery.accountingList')" :key="item.id">
              <p class="about__text_text">{{ item.text }}</p>
            </li>
          </ul>
        </div>

        <div class="about__text">
          <div class="about__text_title">
            {{ $t("delivery.title_postpay") }}
          </div>
          <p
            class="about__text_text"
            v-for="item in $t('delivery.textPostpay')"
            :key="item.id"
          >
            {{ item.text }}
          </p>
        </div>

        <div class="about__text">
          <div class="about__text_title">
            {{ $t("delivery.title_delivery") }}
          </div>
          <p
            class="about__text_text"
            v-for="item in $t('delivery.textDelivery')"
            :key="item.id"
          >
            {{ item.text }}
          </p>
        </div>

        <div class="about__text">
          <div class="about__text_title">
            <b>{{ $t("delivery.title_price") }}</b>
          </div>
          <ul>
            <li>
              <p class="about__text_text">
                {{ $t("delivery.new_post") }}
                <a href="https://novaposhta.ua/delivery"
                  >https://novaposhta.ua/delivery</a
                >
              </p>
            </li>
            <li>
              <p class="about__text_text">
                {{ $t("delivery.coruer_sellpoint") }}
              </p>
            </li>
          </ul>
        </div>

        <div class="about__text">
          <div class="about__text_title">
            <b>{{ $t("delivery.title_importantly") }}</b>
          </div>
          <p
            class="about__text_text"
            v-for="item in $t('delivery.textImportantly')"
            :key="item.id"
          >
            {{ item.text }}
          </p>
          <p class="about__text_text">
            {{ $t("delivery.details") }}
            <router-link :to="{ name: 'exchange' }" class="text-blue">{{
              $t("delivery.exchange")
            }}</router-link>
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
  name: "delivery",
  metaInfo() {
    return {
      title: this.$t("delivery.title"),
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
</style>
