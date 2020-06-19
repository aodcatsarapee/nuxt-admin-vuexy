import GroupMenuAddModal from "../../../components/modal/groupmenu_add_modal";
import GroupMenuEditModal from "../../../components/modal/groupmenu_edit_modal";
export default {
  middleware: "authenticated",
  components: {
    GroupMenuAddModal,
    GroupMenuEditModal
  },
  data() {
    return {
      page: {
        group_menu_id: 8,
        menu_id: 25,
        page_title: "จัดการกลุ่มเมนู",
        page_icon: ""
      },
      group_menu_id: "",
      data: [],
      loading: true,
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
      //delete
      modal_delete: {
        visible: false,
      }
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
        .$get("groupmenu/list"
        )
        .then(response => {
          if (response.response == true) {
            this.data = response.data;
            this.loading = false;
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
      this.modal_add.data = [];
      this.modal_add.visible = true;
    },
    modalAdd() {
      if (
        $("#form-groupmenu-add")
          .parsley()
          .validate() === true
      ) {
        this.$axios
          .$post("groupmenu/add",
            {
              group_menu_name: this.modal_add.data.group_menu_name,
              group_menu_icon: this.modal_add.data.group_menu_icon,
              group_menu_sort: this.modal_add.data.group_menu_sort
            }
          )
          .then(response => {
            if (response.response == true) {
              this.openNotificationWithIcon("success", "สำเร็จ", "ดำเนินการเรียบร้อยเเล้ว");
              this.modal_add.visible = false;
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
    modalAddCancel() {
      $("#form-groupmenu-add").parsley().reset();
      this.modal_add.visible = false;
    },
    //Edit
    modalEditShow(row) {
      this.group_menu_id = row.group_menu_id
      this.modal_edit.data = {
        group_menu_name: row.group_menu_name,
        group_menu_icon: row.group_menu_icon,
        group_menu_sort: row.group_menu_sort
      }
      this.modal_edit.visible = true;
    },
    modalEdit() {
      if (
        $("#form-groupmenu-edit")
          .parsley()
          .validate() === true
      ) {
        this.$axios
          .$post("groupmenu/update",
            {
              group_menu_id: this.group_menu_id,
              group_menu_name: this.modal_edit.data.group_menu_name,
              group_menu_icon: this.modal_edit.data.group_menu_icon,
              group_menu_sort: this.modal_edit.data.group_menu_sort
            }
          )
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
      $("#form-groupmenu-edit").parsley().reset();
      this.modal_edit.visible = false;
    },
    //Delete
    modalDeleteShow(row) {
      this.group_menu_id = row.group_menu_id
      this.modal_delete.visible = true;
    },
    modalDelete() {
      if (
        this.group_menu_id !== ""
      ) {
        this.$axios
          .$post("groupmenu/delete",
            {
              group_menu_id: this.group_menu_id,
            }
          )
          .then(response => {
            if (response.response == true) {
              this.openNotificationWithIcon("success", "สำเร็จ", "ดำเนินการเรียบร้อยเเล้ว");
              this.modal_delete.visible = false;
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
    modalDeleteCancel() {
      this.modal_delete.visible = false;
    },
  }
};
