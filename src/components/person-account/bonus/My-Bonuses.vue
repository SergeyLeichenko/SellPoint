<template>
  <div>
    <div class="personal-history__title">
      <h2>
        {{ $t("cabinet.bonus.title") }}
      </h2>
    </div>
    <div class="personal-history__block">
      <div class="personal-order">
        <History-Bonus />
      </div>
    </div>
  </div>
</template>

<script>
import HistoryBonus from "@/components/messages/History-Bonus";
export default {
  name: "bonuses",
  components: {
    HistoryBonus,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
