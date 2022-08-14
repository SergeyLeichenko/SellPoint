<template>
  <div>
    <div class="personal-history__block_history">
      <p class="personal-history__block_history_title">
        {{ $t("messages.history_title") }}
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
