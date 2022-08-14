<template name="credit">
  <div>
    <Header-New />

    <section class="credit">
      <h1 class="credit__title">Кредит</h1>
    </section>

    <Footer />
  </div>
</template>

<script>
import HeaderNew from "@/components/base/HeaderNew";
import Footer from "@/components/base/Footer";
export default {
  name: "credit",
  metaInfo() {
    return {
      title: this.$t("text_credit"),
    };
  },
  components: {
    HeaderNew,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.credit {
  height: 500px;
  &__title {
    text-align: center;
  }
}
</style>
