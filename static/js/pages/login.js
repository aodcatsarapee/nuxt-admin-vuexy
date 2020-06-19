const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  layout: "login",
  middleware: "notAuthenticated",
  data() {
    return {
      user_username: "",
      user_password: "",
    };
  },
  methods: {
    submit() {
      if (this.user_username !== "" && this.user_password !== "") {
        this.$axios
          .$post("login", {
            user_username: this.user_username,
            user_password: this.user_password
          })
          .then(response => {
            if (response.user.user_status_id == 1) {
              const auth = {
                accessToken: response.token
              };
              this.$store.commit("setAuth", auth);
              Cookie.set("auth", auth);
              this.$store.commit("setUser", response.user);
              Cookie.set("user", response.user);
              this.addLogUserLogin("Login")
              this.getAssessControl();
            } else {
              this.openNotificationWithIcon(
                "warning",
                "เเจ้งเตือน",
                "username ถูกระงับโปรดติดต่อผู้ดูเเลระบบ"
              );
            }
          })
          .catch(error => {
            this.openNotificationWithIcon(
              "warning",
              "เเจ้งเตือน",
              "username หรือ password ไม่ถูกต้อง"
            );
          });
      } else {
        this.openNotificationWithIcon(
          "warning",
          "เเจ้งเตือน",
          "การุณากรอก username เเละ password"
        );
      }
    },
    getAssessControl() {
      this.$axios.$get("getassesscontrol").then(response => {
        localStorage.menu = JSON.stringify(response)
        window.location.href = "/";
      });
    }
  }
};
