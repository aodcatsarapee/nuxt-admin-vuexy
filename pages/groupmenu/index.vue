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
              <span class="float-right">
                <nuxt-link to="/groupmenu/sort">
                  <button type="button" class="btn btn-sm btn-outline-info ml-2">
                    <i class="fa fa-sort"></i> จัดเรียงกลุ่มเมนู
                  </button>
                </nuxt-link>
                <button type="button" class="btn btn-sm btn-outline-success" @click="modalAddShow">
                  <i class="fa fa-plus-circle"></i> เพิ่มกลุ่มเมนู
                </button>
              </span>
            </div>
            <div class="card-content">
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
                        <td>{{ row.group_menu_name }} ({{row.group_menu_id}})</td>
                        <td class="text-center">
                          <i :class="row.group_menu_icon"></i>
                        </td>
                        <td class="text-center">{{ row.group_menu_sort}}</td>
                        <td class="text-center">
                          <nuxt-link :to="'/groupmenu/menu/' + row.group_menu_id">
                            <button type="button" class="btn btn-sm btn-outline-primary">
                              <i class="fa fa-tags"></i> จัดการเมนู
                            </button>
                          </nuxt-link>
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
                            v-if="row.count_menu === 0"
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
          </section>
        </div>
      </div>
    </div>
    <a-modal
      title="เพิ่มกลุ่มเมนู"
      :visible="modal_add.visible"
      @ok="modalAdd"
      @cancel="modalAddCancel"
      @afterClose="modalAddCancel"
      :okText="'ตกลง'"
      :cancelText="'ยกเลิก'"
    >
      <GroupMenuAddModal :data="modal_add.data" />
    </a-modal>
    <a-modal
      title="เเก้ไขกลุ่มเมนู"
      :visible="modal_edit.visible"
      @ok="modalEdit"
      @cancel="modalEditCancel"
      @afterClose="modalEditCancel"
      :okText="'ตกลง'"
      :cancelText="'ยกเลิก'"
    >
      <GroupMenuEditModal :data="modal_edit.data" />
    </a-modal>
    <a-modal
      title="ลบกลุ่มเมนู"
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
<script src="../../static/js/pages/groupmenu.js"></script>

