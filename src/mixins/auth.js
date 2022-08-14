import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      showModalForm: false,
    };
  },
  created() {
    this.setUser(JSON.parse(localStorage.getItem("user")));
  },
  computed: {
    ...mapGetters({
      getUser: "user/getUser",
    }),
  },
  methods: {
    ...mapActions({
      setUser: "user/setUser",
      deleteUser: "user/deleteUser",
    }),
    showForm() {
      this.showModalForm = true;
    },
    closeModalForm() {
      this.showModalForm = false;
    },
  },
};
