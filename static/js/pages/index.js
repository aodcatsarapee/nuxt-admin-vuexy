export default {
  middleware: "authenticated",
  data() {
    return {
      page: {
        group_menu_id: "home",
        menu_id: "",
        page_title: "หน้าหลัก",
        page_icon: "fa fa-home"
      }
    };
  },
  beforeMount() {
    this.setPage(this.page);
  }
};
