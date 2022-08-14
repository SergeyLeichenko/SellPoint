import { setStore, getStore } from "@/config/utils";

const user = getStore("user");

export default {
  state: {
    loginUser: user, //google auth
  },
  getters: {
    //google auth
    getLoginUserInfo(state) {
      return state.loginUser;
    },
  },
  mutations: {
    //google auth
    setLoginUser(state, user) {
      state.loginUser = user;
      setStore("user", user);
    },
  },
};
