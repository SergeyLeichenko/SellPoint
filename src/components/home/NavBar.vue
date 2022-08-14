<template name="navbar">
  <div class="header__block_nav" @click="removeAllCheck">
    <ul class="menu-top">
      <li
        class="menu-top_links"
        v-for="(link, i) in this.navigations"
        :key="i"
        :class="{ activeLink: i === isActive }"
        @click="activeLink(i)"
      >
        <router-link :to="{ name: `${link.link}` }" tag="a">{{
          link.name
        }}</router-link>
      </li>

      <div class="select">
        <i class="fas fa-phone"></i>
        <a class="phone" href="tel:0 800 216 317">0 800 216 317</a>
      </div>
    </ul>
  </div>
</template>

<script>
import removeAllCheck from "@/mixins/removeAllCheck";
export default {
  name: "NavBar",
  mixins: [removeAllCheck],
  data() {
    const lang = localStorage.getItem("lang") || "uk";
    return {
      locale: lang,
      navigations: [
        { id: 1, name: this.$t("text_about_us"), link: "about-us" },
        { id: 2, name: this.$t("text_exchange"), link: "exchange" },
        { id: 3, name: this.$t("text_contact"), link: "contacts" },
        // { id: 4, name: this.$t("text_credit"), link: "credit" },
        { id: 5, name: this.$t("text_delivery"), link: "delivery" },
        { id: 6, name: this.$t("text_cooperation"), link: "cooperation" },
      ],
      isActive: false,
    };
  },
  methods: {
    activeLink(i) {
      sessionStorage.setItem("activeLink", JSON.stringify(i));
    },
  },
  mounted() {
    // active link menu top
    if (sessionStorage.getItem("activeLink")) {
      try {
        this.isActive = JSON.parse(sessionStorage.getItem("activeLink"));
      } catch (e) {
        sessionStorage.removeItem("activeLink");
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
