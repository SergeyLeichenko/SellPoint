<template>
  <div class="header__block_lang">
    <ul class="lang">
      <li
        class="lang__item"
        v-for="(lang, i) in languages"
        :key="i"
        :class="{ activeLang: i === isActiveLang }"
        @click="changeLang(i)"
      >
        <p>{{ lang }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "language",
  data() {
    const lang = localStorage.getItem("lang") || "uk";
    return {
      languages: ["ua", "ru"],
      lang: lang,
      isActiveLang: false,
    };
  },
  methods: {
    changeLang(i) {
      if (i === 0) {
        localStorage.setItem("lang", "uk");
        localStorage.setItem("activeLang", JSON.stringify(i));

        this.isActiveLang = i;
        window.location.reload();
      } else if (i === 1) {
        localStorage.setItem("activeLang", JSON.stringify(i));
        localStorage.setItem("lang", "ru");

        this.isActiveLang = i;
        window.location.reload();
      }
    },
  },
  mounted() {
    if (localStorage.getItem("activeLang")) {
      try {
        this.isActiveLang = JSON.parse(localStorage.getItem("activeLang"));
      } catch (e) {
        localStorage.removeItem("activeLang");
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
