<template>
  <div class="app-content content">
    
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">
                ติดต่อเรา
              </h2>
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/">หน้าหลัก</nuxt-link>
                  </li>
                  <li class="breadcrumb-item active">ติดต่อเรา</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <section id="description" class="card">
          <div class="card-header">
            <h4 class="card-title">Description</h4>
          </div>
          <div class="card-content">
            <div class="card-body">
              <div class="card-text">
                <button class="btn btn-outline-primary">ทดสอบ</button>
                <p>
                  The floating navigation layout has a fixed navigation and
                  floating navbar menu and footer. Only navigation section and
                  navbar menu is fixed to user. Navbar Wrapper has specing from
                  all sides. In this page you can experience it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: {
        group_menu_id: "contact",
        menu_id: "",
        page_title: "หน้าหลัก",
        page_icon: "fa fa-home"
      }
    };
  },
  mounted() {
    this.$store.commit("setPage", this.page);
  }
};
</script>