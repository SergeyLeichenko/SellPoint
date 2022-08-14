<template>
  <div>
    <div class="tabs__body">
      <div class="list">
        <div class="list__title">
          <h3><span>Характеристики:</span> {{ this.title_data.title }}</h3>
        </div>
        <div
          class="list__block"
          v-for="(item, index) in characteristic_data"
          :key="index"
        >
          <div class="title">
            <div class="title">
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div class="list-items">
            <ul>
              <li v-for="(n, index) in item.attributes" :key="index">
                <p class="list-left">{{ n.name }}</p>
                <p
                  class="list-right"
                  v-for="(v, index) in n.values"
                  :key="index"
                >
                  {{ v.value }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "characteristic",
  props: {
    characteristic_data: {
      type: Array,
      default() {
        return [];
      },
    },
    title_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
