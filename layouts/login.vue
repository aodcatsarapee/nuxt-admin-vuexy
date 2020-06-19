<template>
  <div class="login-page">
    <nuxt />
  </div>
</template>
<script>
import config from "../data/config.json";
export default {
  head() {
    return {
      title: config.app_title + " | " + "เข้าสู่ระบบ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: config.app_description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: config.app_keyword
        },
        {
          hid: "author",
          name: "author",
          content: config.app_author
        }
      ],
      link: [
        { rel: "stylesheet", href: "css/core/colors/palette-gradient.css" },
        { rel: "stylesheet", href: "css/pages/authentication.css" }
      ]
    };
  }
};
</script>
