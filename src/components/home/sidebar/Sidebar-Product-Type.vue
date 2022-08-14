<template>
  <div>
    <a
      v-for="item in sidebar_data_type.product_types"
      :key="item.id"
      class="submenuItems__block_link"
      :href="
        $router.resolve({ name: 'products', params: { slug: item.slug } }).href
      "
    >
      <p @click="removeAllCheck">{{ item.name }}</p>
    </a>
  </div>
</template>

<script>
import removeAllCheck from "@/mixins/removeAllCheck";
export default {
  name: "sidebar-product-type",
  props: {
    sidebar_data_type: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mixins: [removeAllCheck],
  data() {
    return {
      slug: this.$route.params["slug"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
