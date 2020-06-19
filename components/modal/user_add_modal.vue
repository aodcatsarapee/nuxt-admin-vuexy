<template>
  <div>
    <form
      class="form-horizontal"
      id="form-user"
      name="form-user"
      method="post"
      action="#"
      onsubmit="return false"
      autocomplete="off"
    >
      <div class="row">
        <div class="col-lg-12 col-3 text-center">
          <label class="form-label">รูปโปรไฟล์ ( ขนาด 300*300px ขนาดไม่เกิน 2 MB. )</label>
          <div class="text-center mt-2">
            <img :src="data_user.data.user_image_peview" width="200" />
            <input type="file" id="user_image" @change="imgPreview" style="display: none;" />
            <br />
            <br />
            <label for="user_image" class="btn btn-outline-primary btn-sm mt-10 mb-2">
              <i class="fa fa-image"></i> อัพโหลดรูป
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Username :</label>
        <div class="col-sm-7">
          <input
            type="text"
            name="user_username"
            v-model="data_user.data.user_username"
            class="form-control"
            required
            minlength="6"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Password :</label>
        <div class="col-sm-7">
          <input
            type="password"
            v-model="data_user.data.user_password"
            class="form-control"
            required
            minlength="6"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">ชื่อ-นามสกุล :</label>
        <div class="col-sm-7">
          <input type="text" v-model="data_user.data.user_fullname" class="form-control" required />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">อีเมล :</label>
        <div class="col-sm-7">
          <input type="email" v-model="data_user.data.user_email" class="form-control" required />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">เบอร์โทร :</label>
        <div class="col-sm-7">
          <input type="text" v-model="data_user.data.user_tel" class="form-control" required />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">ที่อยู่ :</label>
        <div class="col-sm-7">
          <textarea class="form-control" v-model="data_user.data.user_address"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">เลือกสิทธิ์ผู้ใช้งาน</label>
        <div class="col-sm-7">
          <select class="form-control" required v-model="data_user.data.role_id">
            <option value>สิทธิ์ผู้ใช้งาน</option>
            <option :value="row.role_id" v-for="row in data_role">{{row.role_name}}</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["data_user", "data_role"],
  methods: {
    imgPreview(e) {
      const file = e.target.files[0];
      this.data_user.data.user_image_peview = URL.createObjectURL(file);
      this.data_user.data.user_image = file;
    }
  }
};
</script>  