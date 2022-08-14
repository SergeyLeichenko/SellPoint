<template>
  <div>
    <div class="tabs__body">
      <div class="text">
        <p v-html="desc_item_data.description">
          {{ desc_item_data.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "description",
  data() {
    return {};
  },
  props: {
    desc_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
