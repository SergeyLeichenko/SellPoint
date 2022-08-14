<template name="colors-item">
  <div>
    <a
      class="colors-size"
      href=""
      @click="showAddColor"
      :class="{
        active:
          colors_data_item.slug == this.slug ||
          colors_data_item.slug == this.result_slug,
      }"
      ><p
        v-html="colors_data_item.version_color.color"
        class="color"
        :class="{
          notActive: this.colors_data_item.status === '5 Not In Stock',
        }"
      >
        {{ colors_data_item.version_color.color }}
      </p>
      <!-- <p
        class="color-name"
        :class="{
          activeName:
            colors_data_item.slug == this.slug ||
            colors_data_item.slug == this.result_slug,
        }"
      >
        {{ colors_data_item.version_color.name }}
      </p> -->
    </a>
  </div>
</template>

<script>
export default {
  name: "colors-item",
  props: {
    colors_data_item: {
      type: Object,
      default() {
        return {};
      },
    },
    result_slug: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  created() {},
  methods: {
    showAddColor() {
      this.$router.push({
        name: "product",
        params: { slug: this.colors_data_item.slug },
      });
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.colors-size:hover {
  .color-name {
    display: block;
  }
}
.color-name {
  display: none;
  position: absolute;
  bottom: -30px;
  width: max-content;
  background-color: $white;
  border: 1px solid $active-dots;
  border-radius: 5px;
  padding: 0 5px;
  z-index: 2;
}
.activeName {
  display: block;
  z-index: 1;
}
</style>
