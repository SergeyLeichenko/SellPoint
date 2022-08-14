module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/main.scss";`,
      },
    },
  },
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: "uk",
      fallbackLocale: "uk",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  transpileDependencies: ["vue-meta"],
  // devServer: {
  //   open: process.platform === "darwin",
  //   host: "0.0.0.0",
  //   port: 8085, // CHANGE YOUR PORT HERE!
  //   https: true,
  //   hotOnly: false,
  // },
};
