export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/plugins/fontawesome-free/css/all.min.css" },
      { rel: "stylesheet", href: "/vendors/css/vendors.min.css" },
      { rel: "stylesheet", href: "/vendors/css/ui/prism.min.css" },
      { rel: "stylesheet", href: "/css/bootstrap.css" },
      { rel: "stylesheet", href: "/css/bootstrap-extended.css" },
      { rel: "stylesheet", href: "/css/colors.css" },
      { rel: "stylesheet", href: "/css/components.css" },
      { rel: "stylesheet", href: "/css/themes/dark-layout.css" },
      { rel: "stylesheet", href: "/css/themes/semi-dark-layout.css" },
      { rel: "stylesheet", href: "/css/core/menu/menu-types/vertical-menu.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/css/parsley.min.css" },
      { rel: "stylesheet", href: "/plugins/nestable/nestable.css" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap"
      }
    ],
    script: [
      { src: "/vendors/js/vendors.min.js", body: true },
      { src: "/vendors/js/forms/select/select2.full.min.js", body: true },
      { src: "/vendors/js/ui/prism.min.js", body: true },
      { src: "/js/core/app-menu.js", body: true },
      { src: "/js/core/app.js", body: true },
      { src: "/js/parsley.min.js", body: true },
      { src: "/plugins/nestable/jquery.nestable.js", body: true }
    ],
    bodyAttrs: {
      class:
        "vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static",
      "data-open": "click",
      "data-menu": "vertical-menu-modern",
      "data-col": "2-columns"
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#7F74F1" },
  /*
   ** Global CSS
   */
  css: ["ant-design-vue/dist/antd.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/axios", "@/plugins/antd-ui", "@/plugins/helpers.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/components"],
  components: true,
  /*
   ** set URl Axios
   */
  axios: { baseURL: "https://young-beach-50104.herokuapp.com/" },
  /*
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
};
