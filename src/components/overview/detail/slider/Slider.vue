<template name="slider">
  <div>
    <div class="slider">
      <div class="slider__block">
        <div class="cl-btn-2" @click="closeSlider">
          <div>
            <div class="leftright"></div>
            <div class="rightleft"></div>
            <span class="close-btn">{{ $t("close_btn_slider") }}</span>
          </div>
        </div>
        <div class="slider__block_wrap">
          <div class="gallery-s">
            <figure class="gallery-s__item">
              <!-- <img
                :src="slider_data.image"
                class="gallery-s__img"
                v-if="!selectedImage"
              /> -->
              <img
                :src="slider_data.gallery[selectedImage].image"
                class="gallery-s__img"
              />
            </figure>
          </div>
          <span
            class="prev"
            @click="updateImage(selectedImage - 1)"
            v-if="selectedImage >= 1"
          ></span>
          <span class="next" @click="updateImage(selectedImage + 1)"></span>
          <!-- <div class="image-s__list" v-if="slider_data.gallery.length > 1">
            <ul>
              <li v-for="(image, index) in slider_data.gallery" :key="index">
                <img
                  @click="updateImage(index)"
                  :src="image.image"
                  :class="`list-s__img ${
                    index === selectedImage ? 'active' : ''
                  }`"
                  class="img-row"
                />
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",
  props: {
    slider_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      selectedImage: 0,
    };
  },
  methods: {
    updateImage(index = 0) {
      if (index === -1) {
        this.selectedImage = this.slider_data.gallery.length - 1;
        return;
      }
      if (index === this.slider_data.gallery.length) {
        this.selectedImage = 0;
        return;
      }
      this.selectedImage = index;
    },
    closeSlider() {
      this.$emit("closeSlider");
    },
  },
};
</script>

<style lang="scss" scoped>
.arrowNone {
  display: none;
}
</style>
