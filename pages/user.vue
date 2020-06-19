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
                <div class="row mb-2">
                  <div class="col-lg-3">
                    <select class="form-control" required v-model="role_id" @change="getFirstPage">
                      <option value>สิทธิ์ผู้ใช้งานทั้งหมด</option>
                      <option :value="row.role_id" v-for="row in data_role">{{row.role_name}}</option>
                    </select>
                  </div>
                  <div class="col-lg-3">
                    <select
                      class="form-control"
                      required
                      v-model="user_status_id"
                      @change="getFirstPage"
                    >
                      <option value>สถานะทั้งหมด</option>
                      <option value="1">ปกติ</option>
                      <option value="2">ระงับ</option>
                    </select>
                  </div>
                  <div class="col-lg-5 p-r-0">
                    <input
                      type="text"
                      id="search"
                      class="form-control"
                      placeholder="คีย์ค้นหา"
                      v-model="search"
                    />
                  </div>
                  <div class="col-lg-1">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      @click="getFirstPage"
                      style="margin-top: 2px"
                    >
                      <i class="fa fa-search"></i> ค้นหา
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="description" class="card">
            <div class="card-header">
              <div class="card-title">{{ this.$store.state.page.page_title }}</div>
              <span class="float-right">
                <button type="button" class="btn btn-sm btn-outline-success" @click="modalAddShow">
                  <i class="fa fa-plus-circle"></i> เพิ่มผู้ใช้งาน
                </button>
              </span>
            </div>
            <div class="card-content">
              <div class="card-body">
                <div class="table-responsive m-t-20" style="min-height: 30vh;">
                  <table class="table table-hover-animation" v-if="loading == false">
                    <thead class>
                      <tr>
                        <th>#</th>
                        <th class="text-center">รูปโปรไฟล์</th>
                        <th>ชื่อผู้ใช้</th>
                        <th>ชื่อ-นามสกุล</th>
                        <th>เบอร์โทรศัพท์</th>
                        <th>อีเมล</th>
                        <th>สิทธิ์ผู้ใช้งาน</th>
                        <th class="text-center">สถานะ</th>
                        <th class="text-right">ตัวเลือก</th>
                      </tr>
                    </thead>
                    <tbody v-if="count > 0">
                      <tr v-for="(row, index) in data">
                        <td>{{ index + (offset + 1) }}</td>
                        <td class="text-center">
                          <img
                            class="avatar"
                            :src="base_url+ 'assets/upload/user/'+ row.user_image"
                            width="40"
                            height="40"
                          />
                        </td>
                        <td>{{ row.user_username }}</td>
                        <td>{{ row.user_fullname }}</td>
                        <td>{{ row.user_tel }}</td>
                        <td>{{ row.user_email }}</td>
                        <td>{{ row.role_name }}</td>
                        <td class="text-center">
                          <span
                            class="badge badge-success font-label"
                            v-if="row.user_status_id == 1"
                          >
                            <i class="fa fa-check-circle"></i>
                            {{ row.user_status_name }}
                          </span>
                          <span class="badge badge-danger font-label" v-else>
                            <i class="fa fa-times-circle"></i>
                            {{ row.user_status_name }}
                          </span>
                        </td>
                        <td class="text-right">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-warning"
                            @click="modalEditShow(row)"
                          >
                            <i class="fa fa-edit"></i> แก้ไข
                          </button>
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-primary"
                            @click="modalChangePasswordShow(row)"
                          >
                            <i class="fa fa-unlock-alt"></i> เปลี่ยนรหัสผ่าน
                          </button>
                        </td>
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
    <a-modal
      title="เพิ่มผู้ใช้งาน"
      :visible="modal_add.visible"
      @ok="modalAdd"
      @cancel="modalAddCancel"
      @afterClose="modalAddCancel"
      :okText="'ตกลง'"
      :cancelText="'ยกเลิก'"
      :width="1000"
    >
      <UserAddModal :data_user="modal_add" :data_role="data_role" />
    </a-modal>
    <a-modal
      title="เเก้ไขผู้ใช้งาน"
      :visible="modal_edit.visible"
      @ok="modalEdit"
      @cancel="modalEditCancel"
      @afterClose="modalEditCancel"
      :okText="'ตกลง'"
      :cancelText="'ยกเลิก'"
      :width="1000"
    >
      <UserEditModal :data_user="modal_edit" :data_role="data_role" />
    </a-modal>
    <a-modal
      title="เปลื่ยนรหัสผ่าน"
      :visible="modal_change_password.visible"
      @ok="modalChangePassword"
      @cancel="modalChangePasswordCancel"
      @afterClose="modalChangePasswordCancel"
      :okText="'ตกลง'"
      :cancelText="'ยกเลิก'"
    >
      <UserChangePasswordModal :data_user="modal_change_password" />
    </a-modal>
  </div>
</template>
<script src="../static/js/pages/user.js"></script>
<style>
.content {
  min-height: 80vh;
}
.float-right {
  float: right;
}
.font-label {
  font-size: 12px;
}
</style>
