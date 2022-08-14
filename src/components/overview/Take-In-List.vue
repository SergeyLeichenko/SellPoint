<template>
  <div>
    <div class="item">
      <p>
        <img :src="takeIn_data_item.logo" />
        <span>{{ takeIn_data_item.name }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    takeIn_data_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
