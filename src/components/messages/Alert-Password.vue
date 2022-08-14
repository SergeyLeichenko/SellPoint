<template>
  <div class="alert">
    <div class="alert__block">
      <p class="alert__block_text">{{ $t("messages.password_save") }}</p>
      <a class="alert__block_btn" href="#" @click="closeAlert">OK</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert",
  methods: {
    closeAlert() {
      this.$emit("closeAlert");
    },
  },
};
</script>

<style lang="scss" scoped>
// .alert {
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 2;
//   display: flex;
//   justify-content: center;
//   background-color: #00000065;
//   &__block {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     background-color: $white;
//     height: 200px;
//     width: 500px;
//     margin-top: 10%;
//     padding: 20px 0;
//     border-radius: 20px;
//     &_text {
//       font-size: 28px;
//     }
//     &_btn {
//       width: 50%;
//     }
//   }
// }
</style>
