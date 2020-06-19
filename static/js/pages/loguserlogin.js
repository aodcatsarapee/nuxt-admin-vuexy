export default {
  middleware: "authenticated",
  data() {
    return {
      loading: true,
      search: "",
      search_date: "",
      currentPage: 1,
      count: 0,
      limit: 20,
      offset: 0,
      data: [],
      page: {
        group_menu_id: 9,
        menu_id: 32,
        page_title: "ประวัติผู้ใช้งาน",
        page_icon: ""
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
    onChange(pageNumber) {
      let total = (pageNumber - 1) * this.limit;
      this.offset = total;
      this.currentPage = pageNumber;
      this.getData();
    },
    getFirstPage() {
      this.currentPage = 1;
      this.count = 0;
      this.limit = 20;
      this.offset = 0;
      this.getData();
    },
    getDate(date, dateString) {
      this.search_date = dateString
      console.log(date, dateString);
      this.getFirstPage()
    },
    getData() {
      this.loading = true;
      this.$axios
        .$get("log/getloguserlogin", {
          params: {
            search: this.search,
            searchdate: this.search_date,
            limit: this.limit,
            offset: this.offset,
          }
        })
        .then(response => {
          if (response.response == true) {
            this.count = response.count;
            this.data = response.data;
            console.log(this.data)
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
    }
  }
}
