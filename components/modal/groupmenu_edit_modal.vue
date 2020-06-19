<template>
  <div>
    <form
      class="form-horizontal"
      id="form-groupmenu-edit"
      method="post"
      action="#"
      onsubmit="return false"
      autocomplete="off"
    >
      <div class="form-group row">
        <label class="col-sm-4 col-form-label">ชื่อกลุ่มเมนู</label>
        <div class="col-sm-7">
          <input type="text" v-model="data.group_menu_name" class="form-control" required />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4 col-form-label">ไอคอน</label>
        <div class="col-sm-7">
          <input type="text" v-model="data.group_menu_icon" class="form-control" required />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4 col-form-label">จัดเรียง</label>
        <div class="col-sm-7">
          <input type="number" v-model="data.group_menu_sort" class="form-control" required />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["data"]
};
</script>  