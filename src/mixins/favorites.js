// import axios from "axios";

// const access = this.getUser.access_token;

export default {
  data() {
    return {};
  },
  methods: {
    async addFavorite() {
      // await axios
      //   .post(`http://localhost:3000/liked`, data)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    async removeFavorite() {
      // await axios
      //   .delete(`http://localhost:3000/liked/${product.id}`)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    addLoginForm() {
      this.$emit("addLoginForm");
    },
  },
};
