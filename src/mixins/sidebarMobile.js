import ClickOutside from "vue-click-outside";

export default {
  data: () => {
    return {
      sidebarUp: false,
    };
  },
  methods: {
    showSidebar() {
      this.sidebarDropdown = !this.sidebarDropdown;
      this.sidebarUp = !this.sidebarUp;
    },
    closeCatalog() {
      this.sidebarUp = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
