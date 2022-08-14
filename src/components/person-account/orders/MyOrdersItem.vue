<template>
  <div class="personal-history__block">
    <div class="personal-order">
      <div class="personal-order-block">
        <div class="personal-order__time">
          <p class="personal-order__time_date">
            {{ order_data_item.created_at }}
          </p>
          <!-- <p class="personal-order__time_time">{{ item.created_at }}</p> -->
          <p
            class="personal-order__time_where"
            v-if="order_data_item.status === 'New order'"
          >
            {{ $t("cabinet.orders.ordering") }}
          </p>
          <!-- <p class="personal-order__time_made"><i class="far fa-check-circle"></i> виконано</p> -->
        </div>
        <MyProductBlock
          v-for="item in order_data_item.order_items"
          :key="item.id"
          :img_data="item"
        />
        <div class="personal-order__text">
          <div
            class="personal-order__text_block personal-order__text_block-order"
          >
            <div class="personal-order__text_block_first">
              <p>
                {{ $t("cabinet.orders.data") }} {{ order_data_item.created_at }}
              </p>
              <p>
                {{ $t("cabinet.orders.number_order") }} {{ order_data_item.id }}
              </p>
            </div>
            <div class="personal-order__text_block_first">
              <p>
                {{ $t("cabinet.orders.pay") }}
                {{ order_data_item.payment_type }}
              </p>
              <p>
                {{ $t("cabinet.orders.delivery") }}
                {{ order_data_item.delivery_type }}
              </p>
            </div>
            <div class="personal-order__text_block_first">
              <p>
                {{ $t("cabinet.orders.address") }}
                {{ order_data_item.recipient_address }}
              </p>
              <p>
                {{ $t("cabinet.orders.buyer") }} {{ order_data_item.full_name }}
              </p>
            </div>
          </div>
          <div class="personal-order__text_pay">
            <p>
              {{ $t("cabinet.orders.all_total") }}
              <span
                >{{ order_data_item.finally_price }}
                <small>&#8372;</small></span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyProductBlock from "./MyProductBlock.vue";
export default {
  name: "my-orders",
  props: {
    order_data_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    MyProductBlock,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
