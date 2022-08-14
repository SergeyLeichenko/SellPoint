<template>
  <div class="alert">
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
        <a class="btn" href="" @click="closeAlertCreated">OK</a>
      </div>
    </div>
    <!-- <p class="alert__block_text">{{ data_messages }}</p> -->
  </div>
</template>

<script>
export default {
  name: "alert",
  // props: {
  //   data_messages: {
  //     type: Object,
  //     default() {
  //       return {};
  //     },
  //   },
  // },
  methods: {
    closeAlertCreated() {
      this.$emit("closeAlertCreated");
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  background-color: #00000065;
  .thanks-design {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    background-color: $white;
    height: 450px;
    width: 500px;
    margin-top: 10%;
    padding: 20px 0;
    border-radius: 20px;
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
    .btn {
      width: 50%;
      background-color: $bg-blue;
      color: $white;
      border-radius: 3px;
      padding: 5px 15px;
      text-decoration: none;
      margin-top: 30px;
      &:hover {
        color: $white;
        text-decoration: none;
      }
    }
  }
}
</style>
