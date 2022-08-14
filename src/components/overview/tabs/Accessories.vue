<template>
  <div class="body-access">
    <div class="accessories__block">
      <ul class="accessories__block_list">
        <li class="accessories__block_list_item">
          <button type="submit" @click="$emit('backToList')">
            {{ access_data.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "accessories",
  props: {
    access_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
