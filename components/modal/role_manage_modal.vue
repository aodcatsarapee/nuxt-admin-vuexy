<template>
  <div>
    <div class="table-responsive m-t-20" style="min-height: 30vh;">
      <table class="table">
        <thead class>
          <tr>
            <th width="10%">#</th>
            <th width="30%">กลุ่มเมนู</th>
            <th width="40%">เมนู</th>
            <th width="20%" class="text-center">ตัวเลือก</th>
          </tr>
        </thead>
        <tbody v-if="data_menu.length > 0">
          <tr v-for="(row, index) in data_menu">
            <td>{{ index + 1}}</td>
            <td>{{ row.group_menu_name }}</td>
            <td>{{ row.menu_name }}</td>
            <td class="text-center">
              <a-switch :checked="row.role_id === role_id" @change="updateRole(row.menu_id)" />
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
    </div>
  </div>
</template>
<script>
export default {
  props: ["data_menu", "updateRole", "role_id"]
};
</script>  