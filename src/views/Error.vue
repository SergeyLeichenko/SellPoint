<template name="error-page">
  <div>
    <Header v-on:event="showSidebar" />
    <section class="sidebar-banner">
      <div class="wrap">
        <div class="sidebar-banner__block">
          <Sidebar
            v-if="sidebarUp"
            :sidebar_data="SIDEBARS"
            class="sidebar-mobile"
          />
        </div>
      </div>
    </section>

    <section class="error">
      <div class="wrap">
        <div class="error__block">
          <div class="error__block_img">
            <img src="@/assets/images/error-404.svg" alt="error 404" />
          </div>
          <div class="error__block_content">
            <h3 class="error__block_content_title">
              {{ $t("error.title") }}
            </h3>
            <p class="error__block_content_text">
              {{ $t("error.subtitle") }}
            </p>
            <p class="error__block_content_text-link">
              {{ $t("error.link-text_1") }}
              <a :href="$router.resolve({ name: 'home' }).href">{{
                $t("error.link-text_2")
              }}</a>
              {{ $t("error.link-text_3") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Sidebar from "@/components/home/sidebar/Sidebar";
import Footer from "@/components/base/Footer";
import { mapGetters } from "vuex";

export default {
  name: "error-page",
  metaInfo() {
    return {
      title: "404 Not Found - " + this.$t("title_document_index"),
    };
  },
  data() {
    return {
      sidebarUp: false,
    };
  },
  components: {
    Header,
    Sidebar,
    Footer,
  },
  computed: {
    ...mapGetters(["SIDEBARS"]),
  },
  methods: {
    showSidebar() {
      this.sidebarUp = !this.sidebarUp;
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  &__block {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 7px solid #f0f0f0;
    margin: 16px auto;
    &_img {
      margin: 35px 0 20px 0;
    }
    &_content {
      margin-bottom: 35px;
      text-align: center;
      &_text {
        font-size: 16px;
        margin: 20px 0 15px 0;
      }
      &_text-link {
        a {
          color: $bg-blue;
          font-weight: 700;
          &:hover {
            color: $pink;
          }
        }
      }
    }
  }
}
</style>
