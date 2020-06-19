<template>
  <div>
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-body">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">กรองการค้นหา</h4>
              <a class="heading-elements-toggle">
                <i class="fa fa-ellipsis-v font-medium-3"></i>
              </a>
            </div>
            <div class="card-content collapse show" style>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-2">
                    <a-date-picker @change="getDate" size="large" placeholder="เลือกวันที่" />
                  </div>
                  <div class="col-lg-8 p-r-0">
                    <input
                      type="text"
                      id="search"
                      class="form-control"
                      placeholder="คีย์ค้นหา"
                      v-model="search"
                    />
                  </div>
                  <div class="col-lg-2">
                    <button class="btn btn-outline-primary" @click="getFirstPage">
                      <i class="fa fa-search"></i> ค้นหา
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="description" class="card">
            <div class="card-header">
              <h4 class="card-title">{{ this.$store.state.page.page_title }}</h4>
            </div>
            <div class="card-content">
              <div class="card-body">
                <div class="table-responsive mt-1" style="min-height: 30vh;">
                  <table class="table" v-if="loading == false">
                    <thead class>
                      <tr>
                        <th width="5%">#</th>
                        <th width="15%">ชื่อผู้ใช้</th>
                        <th width="10">ข้อมความ</th>
                        <th width="50%">Browser</th>
                        <th width="20%">เวลา</th>
                      </tr>
                    </thead>
                    <tbody v-if="count > 0">
                      <tr v-for="(row, index) in data">
                        <td>{{ index + (offset + 1) }}</td>
                        <td>{{ row.user_fullname }}</td>
                        <td>{{ row.log_text }}</td>
                        <td>{{ row.log_browser }}</td>
                        <td>{{ row.log_time }}</td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="10" class="text-danger text-center">
                          <i class="fa fa-exclamation-triangle"></i> ไม่พบข้อมูล
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div v-else>
                    <div style="text-align:center; padding:80px;">
                      <i class="fas fa-spinner fa-spin fa-3x fa-fw"></i>
                    </div>
                  </div>
                </div>
                <a-pagination
                  class="text-sm-center text-lg-right"
                  :defaultCurrent="currentPage"
                  :total="count"
                  :defaultPageSize="limit"
                  @change="onChange"
                  :showTotal="
                (total, range) =>
                  `แสดง ${range[0]} ถึง ${range[1]} จากทั้งหมด ${total} รายการ`
              "
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../static/js/pages/loguserlogin.js"></script>

