<template>
  <div>
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-body">
          <section id="description" class="card">
            <div class="card-header">
              <div class="card-title">จัดเรียงกลุ่มเมนู</div>
              <nuxt-link to="/groupmenu">
                <button type="button" class="btn btn-sm btn-outline-dark float-right">
                  <i class="fa fa-arrow-left"></i> ย้อนกลับ
                </button>
              </nuxt-link>
            </div>
            <div class="card-content">
              <div class="card-body">
                <div class="row m-t-10">
                  <div class="col-lg-12" style="margin-left: auto; margin-right: auto;">
                    <div class="myadmin-dd-empty dd" id="sort_groupmenu">
                      <ol class="dd-list">
                        <li
                          class="dd-item dd3-item"
                          :data-id="row.group_menu_id"
                          v-for="(row, index) in data"
                        >
                          <div class="dd-handle dd3-handle"></div>
                          <div class="dd3-content">
                            <i :class="row.group_menu_icon"></i>
                            {{row.group_menu_name}}
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../../static/js/pages/groupmenusort.js"></script>

