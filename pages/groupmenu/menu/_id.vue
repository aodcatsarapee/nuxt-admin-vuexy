<template>
  <div>
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-body">
          <div class="card">
            <div class="card-header">
              <div class="card-title">{{ this.$store.state.page.page_title }}</div>
              <span class="float-right">
                <nuxt-link :to="'/groupmenu/menu/sort/' + this.$route.params.id">
                  <button type="button" class="btn btn-sm btn-outline-info ml-1">
                    <i class="fa fa-sort"></i> จัดเรียงเมนู
                  </button>
                </nuxt-link>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-success ml-1 mr-1"
                  @click="modalAddShow"
                >
                  <i class="fa fa-plus-circle"></i> เพิ่มเมนู
                </button>
                <nuxt-link to="/groupmenu">
                  <button type="button" class="btn btn-sm btn-outline-dark float-right">
                    <i class="fa fa-arrow-left"></i> ย้อนกลับ
                  </button>
                </nuxt-link>
              </span>
            </div>
            <div class="card-body">
              <div class="table-responsive m-t-20" style="min-height: 30vh;">
                <table class="table table-hover-animation" v-if="loading == false">
                  <thead class>
                    <tr>
                      <th width="10%">#</th>
                      <th width="30%">กลุ่มเมนู</th>
                      <th width="10%" class="text-center">ไอคอน</th>
                      <th width="10%" class="text-center">จัดเรียง</th>
                      <th width="20%" class="text-center">ตัวเลือก</th>
                    </tr>
                  </thead>
                  <tbody v-if="data.length > 0">
                    <tr v-for="(row, index) in data">
                      <td>{{ index + 1}}</td>
                      <td>{{ row.menu_name }} ({{row.menu_id}})</td>
                      <td class="text-center">
                        <i :class="row.menu_icon"></i>
                      </td>
                      <td class="text-center">{{ row.menu_sort}}</td>
                      <td class="text-center">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-warning"
                          @click="modalEditShow(row)"
                        >
                          <i class="fa fa-edit"></i> เเก้ไข
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-danger"
                          v-if="row.count === 0"
                          @click="modalDeleteShow(row)"
                        >
                          <i class="fa fa-trash"></i> ลบ
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" v-else>
                          <i class="fa fa-trash"></i> ลบ
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
        </div>
      </div>
    </div>
    <a-modal
      title="เพิ่มเมนู"
      :visible="modal_add.visible"
      @ok="modalAdd"
      @cancel="modalAddCancel"
      @afterClose="modalAddCancel"
      :okText="'ตกลง'"
      :cancelText="'ยกเลิก'"
    >
      <MenuAddModal :data="modal_add.data" />
    </a-modal>
    <a-modal
      title="เเก้ไขเมนู"
      :visible="modal_edit.visible"
      @ok="modalEdit"
      @cancel="modalEditCancel"
      @afterClose="modalEditCancel"
      :okText="'ตกลง'"
      :cancelText="'ยกเลิก'"
    >
      <MenuEditModal :data="modal_edit.data" />
    </a-modal>
    <a-modal
      title="ลบเมนู"
      :visible="modal_delete.visible"
      @ok="modalDelete"
      @cancel="modalDeleteCancel"
      @afterClose="modalDeleteCancel"
      :okText="'ตกลง'"
      :cancelText="'ยกเลิก'"
    >
      <h5 class="text-danger text-center">
        <i class="fa fa-info-circle"></i> ต้องการลบรายการนี้ใช่หรือไม่ ?
      </h5>
    </a-modal>
  </div>
</template> 
<script src="../../../static/js/pages/menu.js"></script>