<template name="home">
  <div>
    <Header v-on:event="showSidebar" />
    <section class="sidebar-banner">
      <div class="wrap">
        <div class="sidebar-banner__block">
          <Sidebar
            v-if="sidebarDropdown"
            :sidebar_data="SIDEBARS"
            class="sidebar-desctop"
          />
          <transition name="dropdown">
            <SidebarMobile
              v-if="sidebarUp"
              :sidebar_data="SIDEBARS"
              class="sidebar-mobile"
              @closeCatalog="closeCatalog"
            />
          </transition>
          <Banner :banner_data="BANNERS" />
        </div>
      </div>
    </section>

    <Leaders-Product />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Sidebar from "@/components/home/sidebar/Sidebar";
import SidebarMobile from "@/components/home/sidebar-mobile/Sidebar";
import Banner from "@/components/home/Banner";
import LeadersProduct from "@/components/home/Leaders-Product";
import Footer from "@/components/base/Footer";
import { mapGetters } from "vuex";
import SidebarM from "@/mixins/sidebarMobile";

export default {
  name: "home",
  metaInfo() {
    return {
      title: this.$t("title_document_index"),
    };
  },
  mixins: [SidebarM],
  components: {
    Header,
    Sidebar,
    SidebarMobile,
    Banner,
    LeadersProduct,
    Footer,
  },
  data() {
    return {
      sidebarDropdown: true,
    };
  },
  computed: {
    ...mapGetters(["BANNERS", "SIDEBARS"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
