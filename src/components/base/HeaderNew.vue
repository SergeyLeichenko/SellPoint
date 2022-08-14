<template>
  <div>
    <header class="header" id="top">
      <div class="header-first">
        <div class="wrap">
          <div class="header__block">
            <div class="header__block_logo">
              <div class="logo">
                <li @click="removeActiveLink">
                  <a :href="$router.resolve({ name: 'home' }).href">
                    <img
                      src="@/assets/images/SellPoint_logo.png"
                      alt="Інтернет-магазин"
                    />
                  </a>
                </li>
              </div>
            </div>
            <Nav />
            <Language />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Language from "@/components/home/Lang";
import Nav from "@/components/home/NavBar";
export default {
  name: "",
  components: {
    Nav,
    Language,
  },
  methods: {
    removeActiveLink() {
      if (localStorage.getItem("activeLink")) {
        localStorage.removeItem("activeLink");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
