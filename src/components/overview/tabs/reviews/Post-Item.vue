<template>
  <div>
    <form v-if="closeWriteComment">
      <div class="comment-write">
        <!-- ratting icons -->
        <div class="rating-w">
          <div class="rating-item" @mouseout="mouseOver = null">
            <image-rating
              :src="src"
              v-model="form.rating"
              :item-size="20"
              :spacing="52"
              :max-rating="5"
              :show-rating="false"
              @current-rating="mouseOver = $event"
            ></image-rating>
            <div class="text-r-block">
              <p
                class="text-r-block__text"
                v-for="itemText in $t('detail_product.ratingItems')"
                :key="itemText.id"
              >
                {{ itemText.title }}
              </p>
            </div>
          </div>
        </div>
        <!-- end ratting icons -->

        <!-- text fields -->
        <div class="filds">
          <div class="fild">
            <p>{{ $t("detail_product.what_do_you_think") }}</p>
            <textarea cols="30" rows="10" v-model="form.text"></textarea>
          </div>
          <div class="fild">
            <p>
              <b>{{ $t("detail_product.benefits") }}</b>
              {{ $t("detail_product.max_characters") }}
            </p>
            <input type="text" v-model="form.plus" />
          </div>
          <div class="fild">
            <p>
              <b>{{ $t("detail_product.disadvantages") }}</b>
              {{ $t("detail_product.max_characters") }}
            </p>
            <input type="text" v-model="form.minus" />
          </div>
        </div>
        <!-- end text fields -->

        <!-- field download images -->
        <div class="add-files">
          <div class="text-block">
            <div class="add-text">
              <p class="title">
                <b>{{ $t("detail_product.photo") }} </b
                >{{ $t("detail_product.optional") }}
              </p>
            </div>
          </div>
          <div class="form_files">
            <div class="form_files__download">
              <img
                src="@/assets/images/download-image.svg"
                alt="download image"
              />
            </div>
            <div class="form_files__select">
              <input
                type="file"
                id="files"
                @change="onFileChange"
                accept="image/*"
                multiple="multiple"
              />
              <span
                >{{ $t("detail_product.drag") }}<br />
                {{ $t("detail_product.or") }}<br
              /></span>
              <label for="files">{{ $t("detail_product.download") }}</label>
            </div>
          </div>
        </div>
        <!-- end field download images -->

        <!-- show images before send -->
        <div class="image-show" v-if="form.photos.length">
          <div
            class="image-show__block"
            v-for="(img, i) in this.form.photos"
            :key="i"
          >
            <div class="images">
              <img :src="img.photo" />
            </div>
            <button @click="removeImage(i)" class="image-show__block_btn">
              Видалити
            </button>
          </div>
        </div>
        <!-- end show images before send -->

        <div class="two-btn">
          <button
            class="keep-com com"
            type="submit"
            @click.prevent="onCreatePost"
          >
            {{ $t("detail_product.leave_a_review") }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { ImageRating } from "vue-rate-it";
export default {
  name: "post",
  components: {
    ImageRating,
  },
  data() {
    return {
      mouseOver: null,
      src: require("@/assets/images/pointer.png"),
      form: {
        text: "",
        plus: "",
        minus: "",
        product: this.$store.state.id_product,
        rating: 0,
        photos: [],
      },
      post: [],
      closeWriteComment: true,
      image_list: [],
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    // send posts
    async onCreatePost() {
      this.closeWriteComment = false;
      let formData = new FormData();
      const access = this.getUser.access_token;

      formData.append("text", this.form.text);
      formData.append("minus", this.form.minus);
      formData.append("plus", this.form.plus);
      formData.append("product", this.form.product);
      formData.append("rating", this.form.rating);
      formData.append("photos", this.form.photos);
      axios
        .post(`reviews/`, formData, {
          headers: {
            Authorization: "Bearer " + access,
            "Content-Type": "multipart/form-data;",
          },
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            location.reload();
          }
        })
        .catch((error) => {
          if (error.response.data.text) {
            alert(this.$t("detail_product.alert_field_empty"));
            location.reload();
          }
        });
    },
    // onFileChange(e) {
    //   let files = e.target.files || e.dataTransfer.files;
    //   if (!files.length) return;
    //   this.createImage(files[0]);
    // },
    // createImage(file) {
    //   let reader = new FileReader();

    //   reader.onload = (e) => {
    //     let image = e.target.result;

    //     this.form.photos.push({ photo: image });
    //   };
    //   reader.readAsDataURL(file);
    //   // console.log(this.form);
    // },
    onFileChange(event) {
      let input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while (count--) {
          const reader = new FileReader();
          reader.onload = (e) => {
            let img = {
              photo: e.target.result,
            };
            this.form.photos.push(img);
          };
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
      console.log(this.form);
    },
    removeImage(i) {
      this.form.photos.splice(i, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="file"] {
  display: none;
}
</style>
