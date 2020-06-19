import Vue from "vue";
const Cookie = process.client ? require("js-cookie") : undefined;
Vue.mixin({
  methods: {
    setPage(data) {
      this.$store.commit("setPage", data);
      Cookie.set("page", data);
    },
    checkRole(menu_id) {
      this.$axios
        .$post("checkrole", { menu_id: menu_id })
        .then(response => {
          if (response.response == true) {
            if (response.data.length === 0) {
              this.openNotificationWithIcon(
                "warning",
                "เเจ้งเตือน",
                "ไม่มีสิทธิเข้าถึงเมนูนี้"
              );
              this.$router.push("/");
            }
          } else {
            this.logout()
          }
        })
        .catch(error => {
          this.openNotificationWithIcon("danger", "ผิดพลาด", error);
        });
    },
    logout() {
      Cookie.set("auth", null);
      Cookie.set("user", null);
      localStorage.menu = [];
      this.addLogUserLogin("Logout")
      window.location.href = "login";
    },
    addLogUserLogin(text) {
      this.$axios.$post("systemlog/addloguserlogin", {
        user_id: this.$store.state.user.user_id,
        log_text: text,
        agent: navigator.userAgent
      })
    },
    openNotificationWithIcon(type, text_title, text_description) {
      this.$notification[type]({
        duration: 3,
        message: text_title,
        description: text_description
      });
    }
  }
});
