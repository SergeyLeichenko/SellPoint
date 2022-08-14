<template name="sidebar">
  <div class="sidebar">
    <div class="accordion-menu">
      <div class="logo-top">
        <p class="catalog-title">{{ $t("catalog") }}</p>
        <i class="fas fa-times" @click="$emit('closeCatalog')"></i>
      </div>
      <ul>
        <li
          v-for="(link, index) in sidebar_data"
          :key="link.id"
          @click="faqTrigger(index)"
          :class="{ 'lb_ext-active': currentFaq === index }"
        >
          <!-- v-click-outside="hide" -->
          <div class="dropdownlink">
            <p class="icon-catalog"><img :src="link.logo" /></p>
            <p>{{ link.name }}</p>
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              :class="{ 'arrow_box--open': currentFaq === index }"
            ></i>
          </div>
          <transition name="dropdown">
            <ul class="submenuItems scroll" v-show="currentFaq === index">
              <span class="arrow-left" @click="!currentFaq"></span>
              <SidebarCategories :sidebar_data_item="link" />
            </ul>
          </transition>
        </li>
      </ul>

      <li class="navig-block-down dropdownlink">
        <Nav />

        <Language />
      </li>
    </div>
  </div>
</template>

<script>
import Language from "@/components/home/Lang";
import Nav from "@/components/home/NavBar";
import SidebarCategories from "./Sidebar-Categories";
import { mapActions, mapGetters } from "vuex";
// import ClickOutside from "vue-click-outside";
export default {
  name: "sidebar",
  components: {
    Nav,
    SidebarCategories,
    Language,
  },
  props: {
    sidebar_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentFaq: -10,
    };
  },
  computed: {
    ...mapGetters(["SIDEBARS"]),
  },
  methods: {
    ...mapActions(["GET_SIDEBARS_FROM_API"]),
    faqTrigger(newFaq) {
      if (newFaq === this.currentFaq) {
        this.currentFaq = -10;
      } else {
        this.currentFaq = newFaq;
      }
    },
    // hide() {
    //   this.currentFaq = false;
    // },
  },
  mounted() {
    this.GET_SIDEBARS_FROM_API().then((response) => {
      if (response.data) {
        // console.log("SIDEBARS");
      }
    });
  },
  // directives: {
  //   ClickOutside,
  // },
};
</script>

<style lang="scss" scoped>
.sidebar {
  .accordion-menu {
    .logo-top {
      display: flex;
      background-color: $pink;
      height: 50px;
      justify-content: space-around;
      align-items: center;
      .fa-times {
        color: $white;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
      }
      .catalog-title {
        color: $white;
        font-size: 18px;
        font-weight: 700;
      }
    }
    .submenuItems {
      height: 100vh;
      overflow-y: scroll;
      left: 0;
      .arrow-left {
        clip-path: polygon(
          40% 10%,
          40% 40%,
          100% 40%,
          100% 60%,
          40% 60%,
          40% 90%,
          9% 50%
        );
        display: block;
        background: $black;
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-bottom: 15px;
      }
    }
  }
}

.arrow_box--open {
  transform: rotateZ(-180deg);
  transform-origin: 50% 50%;
}

@keyframes accordeonAni {
  0% {
    max-height: 0;
  }
}

.faq-fade {
  &-enter {
    max-height: 0;
    display: block;
  }
  &-enter-active {
    animation: accordeonAni 100ms ease-out;
    overflow: hidden;
  }
  &-leave {
    display: block;
  }
  &-leave-to {
    display: block;
  }
  &-leave-active {
    animation: accordeonAni 100ms ease-out;
    animation-direction: reverse;
    overflow: hidden;
  }
}
</style>
