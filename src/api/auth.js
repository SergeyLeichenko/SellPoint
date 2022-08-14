export default function (instance) {
  return {
    signIn(payload) {
      return instance.post("/auth/login/", payload);
    },
    signUp(payload) {
      return instance.post("/auth/signup/", payload);
    },
    logout() {
      return instance.post("/auth/logout/");
    },
  };
}
