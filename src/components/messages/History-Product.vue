<template>
  <div class="personal-history__block_history history-product-overview">
    <p class="personal-history__block_history_title">
      {{ $t("messages.not_show_product") }}
    </p>
    <div class="personal-history__block_history_img">
      <img src="@/assets/images/pers-ic3.png" alt="" />
    </div>
    <p class="personal-history__block_history_text">
      {{ $t("messages.let") }}
    </p>
    <div class="personal-history__block_history_btn">
      <router-link to="/" class="go-shop">{{
        $t("messages.start_shopping")
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.history-product-overview {
  background-color: $white;
}
</style>
