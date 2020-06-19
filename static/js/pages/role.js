import RoleManageModal from "../../../components/modal/role_manage_modal";
export default {
  middleware: "authenticated",
  components: {
    RoleManageModal
  },
  data() {
    return {
      page: {
        group_menu_id: 8,
        menu_id: 24,
        page_title: "จัดการสิทธิ์",
        page_icon: ""
      },
      loading: true,
      visible: false,
      role_id: "",
      data_role: [],
      data_menu: []
    };
  },
  beforeMount() {
    this.checkRole(this.page.menu_id);
    this.setPage(this.page);
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      this.$axios
        .$get("role/getlistrole"
        )
        .then(response => {
          if (response.response == true) {
            this.data_role = response.data;
            this.loading = false;
          } else {
            this.logout();
          }
        })
        .catch(() => {
          this.openNotificationWithIcon("error", "ผิดพลาด", "500");
        });
    },
    modalManageShow(row) {
      this.visible = true;
      this.role_id = row.role_id
      this.getListMemu()
    },
    modalManageCancel() {
      this.visible = false;
    },
    getListMemu() {
      this.$axios
        .$get("role/getlistmenu", {
          params: {
            role_id: this.role_id
          }
        })
        .then(response => {
          if (response.response == true) {
            this.data_menu = response.data.sort((a, b) => parseInt(a.group_menu_id) - parseInt(b.group_menu_id))
            this.data_menu.sort((a, b) => parseInt(a.menu_id) - parseInt(b.menu_id))
          } else {
            this.logout();
          }
        })
        .catch(() => {
          this.openNotificationWithIcon("error", "ผิดพลาด", "500");
        });
    },
    updateRole(menu_id) {
      // console.log(this.role_id + " " + menu_id)
      this.$axios
        .$post("role/updatemapmenurole", {
          role_id: this.role_id,
          menu_id: menu_id
        })
        .then(response => {
          if (response.response == true) {
            this.getListMemu()
          } else {
            this.logout();
          }
        })
        .catch(() => {
          this.openNotificationWithIcon("error", "ผิดพลาด", "500");
        });
    }
  },
};