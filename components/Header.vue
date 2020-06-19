<template>
  <nav
    class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow"
  >
    <div class="navbar-wrapper">
      <div class="navbar-container content">
        <div class="navbar-collapse" id="navbar-mobile">
          <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
            <ul class="nav navbar-nav">
              <li class="nav-item mobile-menu d-xl-none mr-auto">
                <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                  <i class="ficon feather icon-menu"></i>
                </a>
              </li>
            </ul>
            <ul class="nav navbar-nav bookmark-icons">
              <li class="nav-item d-none d-lg-block">
                <a
                  class="nav-link"
                  href="sk-layout-2-columns.html"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="2-Columns"
                >
                  <i class="ficon feather icon-sidebar"></i>
                </a>
              </li>
            </ul>
            <ul class="nav navbar-nav">
              <li class="nav-item d-none d-lg-block">
                <a class="nav-link bookmark-star">
                  <i class="ficon feather icon-star warning"></i>
                </a>
                <div class="bookmark-input search-input">
                  <div class="bookmark-input-icon">
                    <i class="feather icon-search primary"></i>
                  </div>
                  <input
                    class="form-control input"
                    type="text"
                    placeholder="Explore Vuexy..."
                    tabindex="0"
                    data-search="starter-list"
                  />
                  <ul class="search-list"></ul>
                </div>
              </li>
            </ul>
          </div>
          <ul class="nav navbar-nav float-right">
            <li class="nav-item d-none d-lg-block">
              <a class="nav-link nav-link-expand">
                <i class="ficon feather icon-maximize"></i>
              </a>
            </li>
            <!--  <li class="dropdown dropdown-notification nav-item">
              <a class="nav-link nav-link-label" href="#" data-toggle="dropdown">
                <i class="ficon feather icon-bell"></i>
                <span class="badge badge-pill badge-primary badge-up">5</span>
              </a>
               <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                <li class="dropdown-menu-header">
                  <div class="dropdown-header m-0 p-2">
                    <h3 class="white">5 New</h3>
                    <span class="grey darken-2">App Notifications</span>
                  </div>
                </li>
                <li class="scrollable-container media-list">
                  <a
                    class="d-flex justify-content-between"
                    href="javascript:void(0)"
                  >
                    <div class="media d-flex align-items-start">
                      <div class="media-left">
                        <i class="feather icon-file font-medium-5 warning"></i>
                      </div>
                      <div class="media-body">
                        <h6 class="warning media-heading">
                          Generate monthly report
                        </h6>
                        <small class="notification-text"
                          >Chocolate cake oat cake tiramisu marzipan</small
                        >
                      </div>
                      <small>
                        <time
                          class="media-meta"
                          datetime="2015-06-11T18:29:20+08:00"
                          >Last month</time
                        ></small
                      >
                    </div>
                  </a>
                </li>
                <li class="dropdown-menu-footer">
                  <a
                    class="dropdown-item p-1 text-center"
                    href="javascript:void(0)"
                    >Read all notifications</a
                  >
                </li>
              </ul>
            </li>-->
            <li class="dropdown dropdown-user nav-item">
              <a
                class="dropdown-toggle nav-link dropdown-user-link"
                href="#"
                data-toggle="dropdown"
              >
                <div class="user-nav d-sm-flex d-none">
                  <span class="user-name text-bold-600">{{$store.state.user.user_fullname}}</span>
                  <span class="user-status">{{$store.state.user.role_name}}</span>
                </div>
                <span>
                  <img
                    class="round"
                    :src="base_url + 'assets/upload/user/'+ $store.state.user.user_image"
                    alt="avatar"
                    height="40"
                    width="40"
                  />
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <nuxt-link class="dropdown-item" to="/profile">
                  <i class="feather icon-user"></i> ข้อมูลส่วนตัว
                </nuxt-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" @click="logout">
                  <i class="feather icon-power"></i> ออกจากระบบ
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import config from "../data/config.json";
export default {
  data() {
    return {
      base_url: config.base_url
    };
  }
};
</script>