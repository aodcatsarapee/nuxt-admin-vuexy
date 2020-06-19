export default {
  middleware: "authenticated",
  data() {
    return {
      page: {
        group_menu_id: 8,
        menu_id: 25,
        page_title: "จัดการกลุ่มเมนู",
        page_icon: ""
      },
      loading: true,
      data: [],
      data_eidt: []
    };
  },
  beforeMount() {
    this.checkRole(this.page.menu_id);
    this.setPage(this.page);
  },
  mounted() {
    this.sort()
    this.getData()
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
    editSort(list) {
      this.$axios
        .$post("groupmenu/sort", { list: list })
        .then(response => {
          if (response.response == true) {
            this.openNotificationWithIcon("success", "สำเร็จ", "ดำเนินการเรียบร้อยเเล้ว");
          } else {
            this.logout();
          }
        })
        .catch(() => {
          this.openNotificationWithIcon("error", "ผิดพลาด", "500");
        });
    },
    sort() {
      let _this = this
      let updateOutput = function (e) {
        let list = e.length ? e : $(e.target), output = list.data('output');
        _this.editSort(list.nestable('serialize'))
      }
      $('#sort_groupmenu').nestable({
        group: 1,
        maxDepth: 1
      }).on('change', updateOutput);
    }
  }
};
