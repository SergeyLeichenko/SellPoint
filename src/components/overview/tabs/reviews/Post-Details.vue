<template>
  <div>
    <!-- getting a comment -->
    <div class="post">
      <div class="comments-block">
        <div class="comment">
          <div class="comment__user-name">
            <div class="comment__user-name_user-time">
              <p class="name">{{ post_data.user.first_name }}</p>
              <p class="name">{{ post_data.user.last_name }}</p>
            </div>
            <p class="date">{{ post_data.created_at }}</p>
          </div>
          <div class="date-like">
            <div class="like">
              <i class="fas fa-thumbs-up"></i>
              <i class="fas fa-thumbs-up"></i>
              <i class="fas fa-thumbs-up"></i>
              <i class="fas fa-thumbs-up"></i>
              <i class="fas fa-thumbs-up"></i>
              <div class="pointer-checked">
                <img
                  :src="src"
                  v-for="img in post_data.rating"
                  :key="img"
                  class="pointer-up"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="comment-text">
          <p>{{ post_data.text }}</p>
        </div>
        <div class="limitations">
          <p>
            <b>{{ $t("detail_product.benefits") }} </b>{{ post_data.plus }}
          </p>
          <p>
            <b>{{ $t("detail_product.disadvantages") }} </b
            >{{ post_data.minus }}
          </p>
        </div>
        <!-- end getting a comment -->

        <!-- answer the comment -->
        <div class="answer-btn">
          <button @click="showAnswer">
            {{ $t("detail_product.answering") }}
          </button>
        </div>
        <div class="answer-block" v-if="answer">
          <form @submit.prevent="answerPost">
            <div class="fild-ans">
              <p>{{ $t("detail_product.comment") }}</p>
              <textarea
                cols="30"
                rows="10"
                v-model="formAnswer.text"
              ></textarea>
            </div>
            <div class="fild-ans-btn">
              <button id="close-i" class="close-i" @click="closeAnswer">
                {{ $t("detail_product.cancel") }}
              </button>
              <button type="submit">{{ $t("detail_product.add") }}</button>
            </div>
          </form>
        </div>
        <!-- end answer the comment -->

        <AnswerReview
          v-for="(item, index) in post_data.children"
          :key="index"
          :answer_data_item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AnswerReview from "./Answer-Rewiev.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "review-item",
  props: {
    post_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    AnswerReview,
  },
  data() {
    return {
      answer: false,
      src: require("@/assets/images/pointer.svg"),
      formAnswer: {
        text: "",
        parent: "",
        product: this.$store.state.id_product,
      },
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    showAnswer() {
      this.answer = true;
      this.formAnswer.parent = this.post_data.id;
    },
    closeAnswer() {
      this.answer = false;
    },
    async answerPost() {
      this.answer = false;
      let formData = new FormData();
      const access = this.getUser.access_token;

      formData.append("text", this.formAnswer.text);
      formData.append("parent", this.formAnswer.parent);
      formData.append("product", this.formAnswer.product);

      axios.post(`reviews/`, formData, {
        headers: {
          Authorization: "Bearer " + access,
          Accept: "application/json",
          "Content-Type": "multipart/form-data;",
        },
      });
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
