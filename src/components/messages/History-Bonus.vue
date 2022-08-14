<template>
  <div>
    <div class="my-reviews personal-history__block_history">
      <p class="personal-history__block_history_title">
        {{ $t("messages.bonus_title") }}
      </p>
      <div class="personal-history__block_history_img">
        <img src="@/assets/images/pers-ic1.png" alt="" />
      </div>
      <p class="personal-history__block_history_text">
        {{ $t("messages.bonus_text") }}
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
