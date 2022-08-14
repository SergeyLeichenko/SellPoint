<template>
  <div class="widg-prod__param">
    <p>
      {{ param_data.short_description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "mini-paramether",
  props: {
    param_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
