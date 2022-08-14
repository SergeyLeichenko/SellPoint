<template>
  <div class="tabs__body">
    <button class="commets-btn" v-if="commentBtn" @click="showCommentWrite">
      {{ $t("detail_product.leave_a_review") }}
    </button>

    <!-- modal login -->
    <div class="modal-content-form" v-if="showModalForm">
      <AuthForm @showModalForm="showModalForm = false" />
    </div>
    <!-- end modal login -->

    <Post-Item v-if="commentWrite" />
    <Post-Details
      v-for="(item, index) in reviews_data"
      :key="index"
      :post_data="item"
    />
  </div>
</template>

<script>
import PostItem from "./Post-Item";
import PostDetails from "./Post-Details.vue";
import { mapGetters } from "vuex";
import AuthForm from "@/components/auth/AuthForm";
import Auth from "@/mixins/auth";
export default {
  name: "reviews",
  props: {
    reviews_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mixins: [Auth],
  components: {
    PostItem,
    PostDetails,
    AuthForm,
  },
  data() {
    return {
      commentBtn: true,
      commentWrite: false,
      products: [],
    };
  },
  created() {},
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    showCommentWrite() {
      this.commentBtn = false;
      if (!this.getUser) {
        this.showModalForm = true;
        this.commentBtn = true;
      } else {
        this.commentWrite = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
