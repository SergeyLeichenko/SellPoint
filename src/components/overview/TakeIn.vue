<template>
  <div class="take-in">
    <div class="form-city">
      <div class="select-box">
        <p>
          <b>{{ $t("detail_product.get_in") }}</b>
        </p>

        <!-- regions list -->
        <b-form-select size="sm" v-model="city" @change="selectCity">
          <template slot="first">
            <option :value="null">
              {{ $t("detail_product.selected_city") }}
            </option>
          </template>
          <option
            v-for="(item, index) in regions"
            :key="index"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </b-form-select>
        <!-- end regions list -->
      </div>
    </div>
    <div class="take-in__list">
      <TakeInList
        v-for="item in deliveries_list"
        :key="item.id"
        :takeIn_data_item="item"
      />
    </div>
  </div>
</template>

<script>
import TakeInList from "./Take-In-List";
export default {
  name: "take-in",
  props: {
    product_regions: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    TakeInList,
  },
  data() {
    return {
      deliveries_list: [],
      city: null,
      regions: [],
    };
  },
  created() {
    // regions
    this.$load(async () => {
      let categorySlug = this.product_regions[1].category.slug;
      if (categorySlug) {
        await this.$api.regions.get(categorySlug).then((response) => {
          this.regions = response.data;
        });
      }
    });
  },
  methods: {
    selectCity() {
      this.$load(async () => {
        let categorySlug = this.product_regions[1].category.slug;
        this.deliveries = await this.$api.delivery
          .get(categorySlug, this.city)
          .then((response) => {
            this.deliveries_list = response.data;
            // console.log(response);
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
