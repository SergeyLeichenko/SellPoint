<template name="sidebar">
  <div class="sidebar">
    <div class="accordion-menu accordion-menu-absol">
      <ul>
        <li
          v-for="(link, index) in sidebar_data"
          :key="link.id"
          @mouseenter="faqTrigger(index)"
          @mouseleave="faqTrigger(index)"
          :class="{ 'lb_ext-active': currentFaq === index }"
        >
          <div class="dropdownlink">
            <p class="icon-catalog"><img :src="link.logo" /></p>
            <p>{{ link.name }}</p>
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              :class="{ 'arrow_box--open': currentFaq === index }"
            ></i>
          </div>
          <transition
            :before-enter="beforeEnterFaq"
            :enter="enterFaq"
            mode="out-in"
            name="faq-fade"
          >
            <ul class="submenuItems" v-show="currentFaq === index">
              <SidebarCategories :sidebar_data_item="link" />
            </ul>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SidebarCategories from "./Sidebar-Categories";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "sidebar",
  components: {
    SidebarCategories,
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
    beforeEnterFaq(_t) {
      _t.style.display = "block";
      _t.style.maxHeight = null;
      _t.myHeight = _t.offsetHeight;
      _t.style.maxHeight = 0;
      _t.style.display = null;
    },
    enterFaq(_t) {
      _t.style.maxHeight = _t.myHeight + "px";
    },
  },
  mounted() {
    this.GET_SIDEBARS_FROM_API().then((response) => {
      if (response.data) {
        // console.log("SIDEBARS");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
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
