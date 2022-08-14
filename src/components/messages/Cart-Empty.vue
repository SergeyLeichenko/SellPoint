<template>
  <div class="cart-empty">
    <div class="personal-history__block_history">
      <div class="personal-history__block_history_img">
        <img src="@/assets/images/pers-ic3.png" alt="bag" />
      </div>
      <p class="personal-history__block_history_text">
        {{ $t("messages.let") }}
      </p>
      <div class="personal-history__block_history_btn">
        <a href="/" class="go-shop" @click="closeCart">{{
          $t("messages.start_shopping")
        }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart-empty",
  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.personal-history {
  padding: 40px 0;
  width: 100%;
  margin-left: 10px;
  &__block {
    background-color: $white;
    margin-bottom: 30px;
    &_history {
      text-align: center;
      padding: 40px 10px 40px 10px;
      &_text {
        margin: 15px 0;
        font-weight: 300;
      }
      &_btn {
        width: 270px;
        padding: 8px 0;
        background-color: $pink;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        margin: auto;
        .go-shop {
          color: $white;
          font-size: 20px;
          font-weight: 900;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            color: $white;
          }
        }
      }
    }
  }
}
</style>
