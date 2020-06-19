const Cookie = process.client ? require("js-cookie") : undefined;
import config from "../../../data/config.json";
export default {
  middleware: "authenticated",
  data() {
    return {
      base_url: config.base_url,
      page: {
        group_menu_id: "",
        menu_id: "",
        page_title: "ประวัติตัวส่วนตัว",
        page_icon: "fa fa-home"
      },
      user_image: config.base_url + 'assets/upload/user/' + this.$store.state.user.user_image,
      data_user: {
        user_fullname: this.$store.state.user.user_fullname,
        user_tel: this.$store.state.user.user_tel,
        user_email: this.$store.state.user.user_email,
        user_address: this.$store.state.user.user_address
      },
      data_password: {
        user_password: "",
        user_password_new: "",
        user_password_confirm: ""
      }
    };
  },
  beforeMount() {
    this.setPage(this.page);
  },
  methods: {
    submit() {
      if (
        $("#form-user")
          .parsley()
          .validate() === true
      ) {
        this.$axios
          .$post("updateprofile", this.data_user)
          .then(response => {
            if (response.response == true) {
              this.openNotificationWithIcon(
                "success",
                "สำเร็จ",
                "ดำเนินการเรียบร้อยเเล้ว"
              );
              this.$store.commit("setUser", response.data);
              Cookie.set("user", response.data);
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            } else {
              this.logout();
            }
          })
          .catch(() => {
            this.openNotificationWithIcon("error", "ผิดพลาด", "500");
          });
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.user_image = URL.createObjectURL(file);
      let formData = new FormData();
      formData.append("user_image", file);
      this.$axios
        .$post("uploadprofile", formData)
        .then(response => {
          if (response.response == true) {
            if (response.data.length == 0) {
              this.openNotificationWithIcon(
                "error",
                "ผิดพลาด",
                "ไม่สามารถอัปโหลดไฟล์ได้โปรดลองใหม่อีกครั้ง"
              );
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            } else {
              this.openNotificationWithIcon(
                "success",
                "สำเร็จ",
                "ดำเนินการเรียบร้อยเเล้ว"
              );
              this.$store.commit("setUser", response.data);
              Cookie.set("user", response.data);
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            }
          } else {
            this.logout();
          }
        })
        .catch(() => {
          this.openNotificationWithIcon("error", "ผิดพลาด", "500");
        });
    },
    submiChangePasword() {
      if (
        $("#form-change-password")
          .parsley()
          .validate() === true
      ) {
        this.$axios
          .$post("updatepassword", this.data_password)
          .then(response => {
            if (response.response == true) {
              console.log(response);
              if (response.status === 1) {
                this.openNotificationWithIcon(
                  "success",
                  "สำเร็จ",
                  response.message
                );
                this.data_password.user_password = "";
                this.data_password.user_password_new = "";
                this.data_password.user_password_confirm = "";
              } else {
                this.openNotificationWithIcon(
                  "warning",
                  "เเจ้งเตือน",
                  response.message
                );
              }
            } else {
              this.logout();
            }
          })
          .catch(() => {
            this.openNotificationWithIcon("error", "ผิดพลาด", "500");
          });
      }
    }
  }
};
