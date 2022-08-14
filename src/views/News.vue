<template name="news">
  <div>
    <Header-New />

    <section class="contact">
      <h1 class="contact__title">{{ $t("news_page.title") }}</h1>
    </section>

    <Footer />
  </div>
</template>

<script>
import HeaderNew from "@/components/base/HeaderNew";
import Footer from "@/components/base/Footer";
export default {
  name: "news",
  metaInfo() {
    return {
      title: this.$t("news_page.title"),
    };
  },
  components: {
    HeaderNew,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  height: 500px;
  &__title {
    text-align: center;
  }
}
</style>
