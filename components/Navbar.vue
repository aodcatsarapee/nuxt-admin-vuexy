<template>
  <div>
    <div
      class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
      data-scroll-to-active="true"
    >
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
          <li class="nav-item mr-auto">
            <a class="navbar-brand" href="../../../html/ltr/vertical-menu-template/index.html">
              <div class="brand-logo"></div>
              <h2 class="brand-text mb-0">APP NAME</h2>
            </a>
          </li>
          <li class="nav-item nav-toggle">
            <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
              <i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i>
              <i
                class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary"
                data-ticon="icon-disc"
              ></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="shadow-bottom"></div>
      <div class="main-menu-content">
        <ul
          class="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li :class="$store.state.page.group_menu_id == 'home' ? 'active' : ''">
            <nuxt-link to="/">
              <i class="feather icon-home"></i>
              <span class="menu-title">หน้าหลัก</span>
              <!-- <span class="badge badge badge-warning badge-pill float-right">2</span> -->
            </nuxt-link>
          </li>
          <li
            :class="
              $store.state.page.group_menu_id == row.group_menu.group_menu_id
                ? 'nav-item has-sub open'
                : 'nav-item has-sub'
            "
            v-for="(row, index) in dataMenu"
            :key="index"
          >
            <a href="#">
              <i :class="row.group_menu.group_menu_icon"></i>
              <span class="menu-title">{{ row.group_menu.group_menu_name }}</span>
            </a>
            <ul class="menu-content">
              <li
                :class="$store.state.page.menu_id == row_menu.menu_id ? 'active' : ''"
                v-for="(row_menu,index) in row.group_menu.menu"
                :key="index"
              >
                <nuxt-link :to=" '/' + row_menu.menu_link">
                  <i :class="row_menu.menu_icon" />
                  <span class="menu-item">{{row_menu.menu_name }}</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataMenu: []
    };
  },
  mounted() {
    this.dataMenu = JSON.parse(localStorage.menu);
  }
};
</script>
