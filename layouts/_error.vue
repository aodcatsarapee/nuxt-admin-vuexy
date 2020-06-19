<template>
  <nuxt />
</template>
<script>
import config from "../data/config.json";
export default {
  head() {
    return {
      title: config.app_title + " | " + "404 Page not found",
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
      link: [{ rel: "stylesheet", href: "css/pages/error.css" }]
    };
  }
};
</script>
