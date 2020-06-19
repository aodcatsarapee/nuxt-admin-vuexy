<template>
  <div>
    <form
      class="form-horizontal"
      id="form-user-change-password"
      method="post"
      action="#"
      onsubmit="return false"
      autocomplete="off"
    >
      <div class="form-group row">
        <label class="col-sm-4 col-form-label">Password ( ใหม่ )</label>
        <div class="col-sm-7">
          <input
            type="password"
            v-model="data_user.data.user_password_new"
            class="form-control"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4 col-form-label">Password ( ยืมยัน )</label>
        <div class="col-sm-7">
          <input
            type="password"
            v-model="data_user.data.user_password_confirm"
            class="form-control"
            required
          />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["data_user"]
};
</script>  