<template>
  <div class="answer">
    <div class="answer__answer-block">
      <div class="answer__answer-block_user">
        <div class="user-time">
          <p class="name">{{ answer_data_item.user.first_name }}</p>
          <p class="name">{{ answer_data_item.user.last_name }}</p>
        </div>
        <p class="date">{{ answer_data_item.created_at }}</p>
      </div>
      <div class="answer__answer-block__answer-block_txt">
        <b>{{ $t("detail_product.answer") }} </b>{{ answer_data_item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "answer",
  props: {
    answer_data_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
