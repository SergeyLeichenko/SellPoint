<template>
  <div>
    <div class="banner" v-if="banner_data.length === 1">
      <b-carousel
        id="carousel-1"
        class="banner-slider"
        v-model="slide"
        :interval="3000"
        img-width="1000"
        img-height="450"
      >
        <b-carousel-slide v-for="(banner, index) in banner_data" :key="index">
          <template #img>
            <a :href="$router.resolve(`${banner.link}`).href">
              <img
                loading="lazy"
                :src="banner.image"
                class="banner-slider__item"
                width="1000"
                height="450"
                alt=""
              />
            </a>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="banner" v-else>
      <b-carousel
        id="carousel-1"
        class="banner-slider"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        img-width="1000"
        img-height="450"
      >
        <b-carousel-slide v-for="(banner, index) in banner_data" :key="index">
          <template #img>
            <a :href="$router.resolve(`${banner.link}`).href">
              <img
                loading="lazy"
                :src="banner.image"
                class="banner-slider__item"
                width="1000"
                height="450"
                alt=""
              />
            </a>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    banner_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      slide: 0,
    };
  },
  computed: {
    ...mapGetters(["BANNERS"]),
  },
  methods: {
    ...mapActions(["GET_BANNERS_FROM_API"]),
  },
  mounted() {
    this.GET_BANNERS_FROM_API().then((response) => {
      if (response.data) {
        // console.log("Banners");
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
