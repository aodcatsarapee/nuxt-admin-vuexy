<template>
  <div>
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-body">
          <section id="description" class="card">
            <div class="card-header">
              <div class="card-title">{{ this.$store.state.page.page_title }}</div>
            </div>
            <div class="card-content">
              <div class="card-body">
                <div class="table-responsive m-t-20" style="min-height: 30vh;">
                  <table class="table table-hover-animation" v-if="loading == false">
                    <thead class>
                      <tr>
                        <th width="10%">#</th>
                        <th width="50%">สิทธิ์ผู้ใช้งาน</th>
                        <th width="40%" class="text-center">ตัวเลือก</th>
                      </tr>
                    </thead>
                    <tbody v-if="data_role.length > 0">
                      <tr v-for="(row, index) in data_role">
                        <td>{{ index + 1}}</td>
                        <td>{{ row.role_name }}</td>
                        <td class="text-center">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-primary"
                            @click="modalManageShow(row)"
                          >
                            <i class="fa fa-tags"></i> จัดการสิทธ์
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <a-modal
      title="จัดการสิทธิ์ผู้ใช้งาน"
      :footer="null"
      :visible="visible"
      @ok="modalManageCancel"
      @cancel="modalManageCancel"
      @afterClose="modalManageCancel"
      :okText="'ตกลง'"
      :cancelText="'ยกเลิก'"
      :cancelButtonProps="{ style: { display: 'none' } }"
      :okButtonProps="{ style: { display: 'none' } }"
    >
      <RoleManageModal :data_menu="data_menu" :updateRole="updateRole" :role_id="role_id" />
    </a-modal>
  </div>
</template>
<script src="../static/js/pages/role.js"></script>
