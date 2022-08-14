<template>
  <div>
    <div class="personal-order__list">
      <div class="personal-order__list_item">
        <!-- images block -->
        <div class="personal-order__list_item_img">
          <div class="personal-order__list_item_img_images-block">
            <img :src="img_data.product.image" :alt="img_data.product.title" />
          </div>
          <p class="title">{{ img_data.product.title }}</p>
        </div>
        <!-- end images block -->

        <div class="personal-order__list_item_price">
          <p>
            {{ img_data.product.price }}
            <span class="sans">&#8372;</span>
          </p>
          <p>{{ img_data.quantity }} шт.</p>
          <p>{{ img_data.cost }} <span class="sans">&#8372;</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
