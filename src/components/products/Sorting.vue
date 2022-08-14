<template>
  <div>
    <nav>
      <ul class="title-block__nav">
        <p>
          <b>{{ $t("products.sorting") }}</b>
        </p>
        <li
          class="item-nav"
          v-for="(sort, index) in sortingList"
          :key="index"
          :class="{ activeSortItem: index === isActiveSortItem }"
        >
          <p
            @click="
              {
                uniqueCheckSort(index), uniqueCheckSortFull(index);
              }
            "
          >
            {{ sort.name }}
          </p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "sorting",
  data() {
    return {
      isActiveSortItem: null,
      sortingList: [
        { id: 1, name: this.$t("products.price_up") },
        { id: 2, name: this.$t("products.price_down") },
        { id: 3, name: this.$t("products.retting") },
        { id: 4, name: this.$t("products.sales") },
      ],
    };
  },
  methods: {
    // products list page
    uniqueCheckSort(index) {
      this.isActiveSortItem = index;
      this.$emit("uniqueCheckSort", index);
    },
    // full search page
    uniqueCheckSortFull(index) {
      this.isActiveSortItem = index;
      this.$emit("uniqueCheckSortFull", index);
    },
  },
};
</script>

<style lang="scss" scoped></style>
