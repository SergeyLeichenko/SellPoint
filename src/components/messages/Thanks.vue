<template>
  <div class="thanks-design">
    <div class="personal-history__block_history">
      <p class="personal-history__block_history_title thanks-design__title">
        {{ $t("messages.thanks") }}
      </p>
      <p class="thanks-design__subtitle">
        {{ $t("messages.our_menedg") }}<br />
        {{ $t("messages.minuts") }}
      </p>
      <div class="personal-history__block_history_img">
        <img src="@/assets/images/thanks-img.svg" alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.thanks-design {
  max-width: 400px;
  margin: auto;
  text-align: center;
  padding-top: 20px;
  &__title {
    font-size: 20px;
    font-weight: 900;
  }
  &__subtitle {
    margin: 15px 0 50px 0;
  }
  .personal-history__block_history_img {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
