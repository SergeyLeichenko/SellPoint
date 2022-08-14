<template name="overview">
  <div>
    <Header v-on:event="showSidebar" />
    <section class="sidebar-banner">
      <div class="wrap">
        <div class="sidebar-banner__block sidebar-banner__block-absol">
          <Sidebar v-if="sidebarDropdown" :sidebar_data="SIDEBARS" />
        </div>
      </div>
    </section>

    <Main-Detail />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Sidebar from "@/components/home/sidebar/Sidebar";
import MainDetail from "@/components/overview/Main-Detail";
import Footer from "@/components/base/Footer";
import { mapGetters } from "vuex";
export default {
  name: "overview",
  components: {
    Header,
    Sidebar,
    MainDetail,
    Footer,
  },
  data() {
    return {
      sidebarDropdown: false,
    };
  },
  computed: {
    ...mapGetters(["SIDEBARS"]),
  },
  methods: {
    showSidebar() {
      this.sidebarDropdown = !this.sidebarDropdown;
    },
  },
};
</script>

<style lang="scss" scoped></style>
