import MenuAddModal from "../../../components/modal/menu_add_modal";
import MenuEditModal from "../../../components/modal/menu_edit_modal";
export default {
  middleware: "authenticated",
  components: {
    MenuAddModal,
    MenuEditModal
  },
  data() {
    return {
      page: {
        group_menu_id: 8,
        menu_id: 25,
        page_title: "จัดการเมนู",
        page_icon: ""
      },
      menu_id: "",
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
    if (this.$route.params.id == "" || this.$route.params.id == null || this.$route.params.id == undefined) {
      this.openNotificationWithIcon("warning", "เเจ้งเตือน", "ไม่สามารถทำรายการนี้ได้");
      this.$router.push("/groupmenu");
    }
    this.checkRole(this.page.menu_id);
    this.setPage(this.page);
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true;
      this.$axios
        .$get("menu/list", {
          params: {
            group_menu_id: this.$route.params.id
          }
        }
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
        $("#form-menu-add")
          .parsley()
          .validate() === true
      ) {
        this.$axios
          .$post("menu/add",
            {
              group_menu_id: this.$route.params.id,
              menu_name: this.modal_add.data.menu_name,
              menu_icon: this.modal_add.data.menu_icon,
              menu_link: this.modal_add.data.menu_link,
              menu_sort: this.modal_add.data.menu_sort
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
      $("#form-menu-add").parsley().reset();
      this.modal_add.visible = false;
    },
    //Edit
    modalEditShow(row) {
      this.menu_id = row.menu_id
      this.modal_edit.data = {
        menu_name: row.menu_name,
        menu_icon: row.menu_icon,
        menu_link: row.menu_link,
        menu_sort: row.menu_sort
      }
      this.modal_edit.visible = true;
    },
    modalEdit() {
      if (
        $("#form-menu-edit")
          .parsley()
          .validate() === true
      ) {
        this.$axios
          .$post("menu/update",
            {
              menu_id: this.menu_id,
              menu_name: this.modal_edit.data.menu_name,
              menu_icon: this.modal_edit.data.menu_icon,
              menu_link: this.modal_edit.data.menu_link,
              menu_sort: this.modal_edit.data.menu_sort
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
      $("#form-menu-edit").parsley().reset();
      this.modal_edit.visible = false;
    },
    //Delete
    modalDeleteShow(row) {
      this.menu_id = row.menu_id
      this.modal_delete.visible = true;
    },
    modalDelete() {
      if (
        this.menu_id !== ""
      ) {
        this.$axios
          .$post("menu/delete",
            {
              menu_id: this.menu_id,
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
