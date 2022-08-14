<template>
  <div class="wrap-submenuItems">
    <div
      class="submenuItems__block"
      v-for="item in sidebar_data_item.categories"
      :key="item.id"
    >
      <a class="submenuItems__block_title">
        {{ item.name }}
      </a>
      <Sidebar-Product-Type :sidebar_data_type="item" />
    </div>
  </div>
</template>

<script>
import SidebarProductType from "./Sidebar-Product-Type.vue";
export default {
  name: "sidebar-item",
  components: {
    SidebarProductType,
  },
  props: {
    sidebar_data_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      slug: this.$route.params["slug"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
