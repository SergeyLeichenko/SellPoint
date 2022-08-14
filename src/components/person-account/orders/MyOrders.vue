<template>
  <div>
    <div class="personal-history__title">
      <h2>
        {{ $t("cabinet.title_my_orders") }}
      </h2>
    </div>
    <div class="personal-history__block">
      <div class="personal-order">
        <History-Orders v-if="!order_data.length" />

        <MyOrdersItem
          v-for="item in order_data"
          :key="item.id"
          :order_data_item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyOrdersItem from "./MyOrdersItem";
import HistoryOrders from "@/components/messages/History-Orders";
export default {
  name: "my-orders",
  components: {
    MyOrdersItem,
    HistoryOrders,
  },
  props: {
    order_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
