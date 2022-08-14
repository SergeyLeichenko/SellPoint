<template>
  <div class="personal-history">
    <div class="personal-history__title">
      <h2>{{ $t("cabinet.reviews.title") }}</h2>
    </div>
    <div class="personal-history__block">
      <div class="personal-order">
        <HistoryReview v-if="!review_data.length" />
        <MyOverwievItem
          v-for="item in review_data"
          :key="item.id"
          :overwiev_data_item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HistoryReview from "@/components/messages/History-Review.vue";
import MyOverwievItem from "./MyOverwiev-Item.vue";
export default {
  components: { MyOverwievItem, HistoryReview },
  name: "overwiev",
  props: {
    review_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
