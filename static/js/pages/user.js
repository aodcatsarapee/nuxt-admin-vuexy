import UserAddModal from "../../../components/modal/user_add_modal";
import UserEditModal from "../../../components/modal/user_edit_modal";
import UserChangePasswordModal from "../../../components/modal/user_change_password_modal";
import config from "../../../data/config.json";
export default {
  middleware: "authenticated",
  components: {
    UserAddModal,
    UserEditModal,
    UserChangePasswordModal
  },
  data() {
    return {
      base_url: config.base_url,
      page: {
        group_menu_id: 8,
        menu_id: 23,
        page_title: "จัดการผู้ใช้งาน",
        page_icon: ""
      },
      loading: true,
      search: "",
      currentPage: 1,
      count: 0,
      limit: 10,
      offset: 0,
      user_status_id: "",
      role_id: "",
      data: [],
      data_role: [],
      //add
      modal_add: {
        visible: false,
        data: []
      },
      //edit
      modal_edit: {
        visible: false,
        data: []
      },
      //change password
      modal_change_password: {
        visible: false,
        data: []
      }
    };
  },
  beforeMount() {
    this.checkRole(this.page.menu_id);
    this.setPage(this.page);
  },
  mounted() {
    this.getDataRole();
    this.getData();
  },
  methods: {
    onChange(pageNumber) {
      let total = (pageNumber - 1) * this.limit;
      this.offset = total;
      this.currentPage = pageNumber;
      this.getData();
    },
    getFirstPage() {
      this.currentPage = 1;
      this.count = 0;
      this.limit = 10;
      this.offset = 0;
      this.getData();
    },
    getData() {
      this.loading = true;
      this.$axios
        .$get("getuser", {
          params: {
            search: this.search,
            limit: this.limit,
            offset: this.offset,
            user_status_id: this.user_status_id,
            role_id: this.role_id
          }
        })
        .then(response => {
          if (response.response == true) {
            this.count = response.count;
            this.data = response.data;
            if (this.data.length == 0) {
              this.getFirstPage()
            }
            this.loading = false;
          } else {
            this.logout();
          }
        })
        .catch(() => {
          this.openNotificationWithIcon("error", "ผิดพลาด", "500");
        });
    },
    getDataRole() {
      this.loading = true;
      this.$axios
        .$get("getrole"
        )
        .then(response => {
          if (response.response == true) {
            this.data_role = response.data;
          } else {
            this.logout();
          }
        })
        .catch(() => {
          this.openNotificationWithIcon("error", "ผิดพลาด", "500");
        });
    },
    //Add
    modalAddShow() {
      this.modal_add.visible = true;
      this.modal_add.data = {
        user_username: "",
        user_password: "",
        user_fullname: "",
        user_email: "",
        user_tel: "",
        user_address: "",
        user_image: "",
        user_image_peview: this.base_url + "assets/upload/user/" + "none.png",
        role_id: "",
      };
    },
    modalAdd() {
      if (
        $("#form-user")
          .parsley()
          .validate() === true
      ) {
        let formData = new FormData();
        formData.append("user_username", this.modal_add.data.user_username);
        formData.append("user_password", this.modal_add.data.user_password);
        formData.append("user_fullname", this.modal_add.data.user_fullname);
        formData.append("user_email", this.modal_add.data.user_email);
        formData.append("user_tel", this.modal_add.data.user_tel);
        formData.append("user_address", this.modal_add.data.user_address);
        formData.append("user_image", this.modal_add.data.user_image);
        formData.append("role_id", this.modal_add.data.role_id);
        this.$axios
          .$get("checkusername", { params: { user_username: this.modal_add.data.user_username } }
          )
          .then(response => {
            if (response.response == true) {
              if (response.status === 1) {
                this.$axios
                  .$post("adduser", formData)
                  .then(response => {
                    if (response.response == true) {
                      this.openNotificationWithIcon("success", "สำเร็จ", "ดำเนินการเรียบร้อยเเล้ว");
                      this.modal_add.visible = false;
                      this.getFirstPage();
                    } else {
                      this.logout();
                    }
                  })
                  .catch(() => {
                    this.openNotificationWithIcon("error", "ผิดพลาด", "500");
                  });
              } else {
                this.openNotificationWithIcon("warning", "เเจ้งเตือน", response.message);
              }
            } else {
              this.logout();
            }
          })
          .catch(() => {
            this.openNotificationWithIcon("error", "ผิดพลาด", "500");
          });
      }
    },
    modalAddCancel() {
      $("#form-user").parsley().reset()
      this.modal_add.visible = false;
    },
    //Edit
    modalEditShow(row) {
      this.modal_edit.data = {
        user_id: row.user_id,
        user_username: row.user_username,
        user_fullname: row.user_fullname,
        user_email: row.user_email,
        user_tel: row.user_tel,
        user_address: row.user_address,
        user_image_peview: this.base_url + "assets/upload/user/" + row.user_image,
        user_status_id: row.user_status_id,
        role_id: row.role_id,
      }
      this.modal_edit.visible = true;
    },
    modalEdit() {
      if (
        $("#form-user-edit").parsley().validate() === true) {
        let formData = new FormData();
        formData.append("user_id", this.modal_edit.data.user_id);
        formData.append("user_fullname", this.modal_edit.data.user_fullname);
        formData.append("user_email", this.modal_edit.data.user_email);
        formData.append("user_tel", this.modal_edit.data.user_tel);
        formData.append("user_address", this.modal_edit.data.user_address);
        formData.append("user_image", this.modal_edit.data.user_image_edit);
        formData.append("user_status_id", this.modal_edit.data.user_status_id);
        formData.append("role_id", this.modal_edit.data.role_id);
        this.$axios.$post("updateuser", formData)
          .then(response => {
            if (response.response == true) {
              this.openNotificationWithIcon("success", "สำเร็จ", "ดำเนินการเรียบร้อยเเล้ว");
              this.modal_edit.visible = false;
              this.getData()
            } else {
              this.logout();
            }
          })
          .catch(() => {
            this.openNotificationWithIcon("error", "ผิดพลาด", "500");
          });
      }
    },
    modalEditCancel() {
      $("#form-user-edit").parsley().reset()
      this.modal_edit.visible = false;
    },
    // Change Password
    modalChangePasswordShow(row) {
      this.modal_change_password.data = {
        user_id: row.user_id,
        user_password_new: "",
        user_password_confirm: "",
      }
      this.modal_change_password.visible = true;
    },
    modalChangePassword() {
      if (
        $("#form-user-change-password").parsley().validate() === true) {
        this.$axios.$post("updateuserpassword", this.modal_change_password.data)
          .then(response => {
            if (response.response == true) {
              if (response.status === 1) {
                this.openNotificationWithIcon("success", "สำเร็จ", response.message);
                this.modal_change_password.visible = false;
                this.getData()
              } else {
                this.openNotificationWithIcon("warning", "เเจ้งเตือน", response.message
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
    },
    modalChangePasswordCancel() {
      $("#form-user-change-password").parsley().reset()
      this.modal_change_password.visible = false;
    }
  }
};




