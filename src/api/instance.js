import axios from "axios";

const lang = localStorage.getItem("lang") || "uk";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL + lang,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Accept-Language": lang,
  },
});

export default instance;
