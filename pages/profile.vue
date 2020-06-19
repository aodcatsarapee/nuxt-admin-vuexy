<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>{{ this.$store.state.page.page_title }}</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">{{ this.$store.state.page.page_title }}</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="row pl-4 pr-5 pt-3">
        <div class="col-lg-4 col-xlg-3 col-md-5">
          <div class="card">
            <div class="card-body text-center">
              <img
                :src="base_url + 'assets/upload/user/' + this.$store.state.user.user_image"
                width="140"
                class="avatar"
              />
              <h4 class="mt-3">{{ this.$store.state.user.user_fullname }}</h4>
              <h5 class="text-secondary">{{ this.$store.state.user.user_email }}</h5>
            </div>
            <div>
              <hr />
            </div>
            <div class="card-body" style="margin-left: 50px;">
              <h6 class="text-muted">ตำเเหน่ง</h6>
              <h6>{{ this.$store.state.user.role_name }}</h6>
              <h6 class="text-muted">เบอร์โทร</h6>
              <h6>{{ this.$store.state.user.user_tel }}</h6>
              <h6 class="text-muted mt-2">ที่อยู่</h6>
              <h6>{{ this.$store.state.user.user_address }}</h6>
            </div>
            <div>
              <hr />
              <div class="pr-5 pl-5 pt-3 pb-4">
                <button class="btn btn-danger btn-block btn-lg" @click="logout">
                  <i class="fa fa-power-off"></i> ออกจากระบบ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-xlg-9 col-md-7">
          <div class="card">
            <ul class="nav nav-tabs profile-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#profile" role="tab">เเก้ไขข้อมูล</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#changePasword"
                  role="tab"
                >เปลี่ยนรหัสผ่าน</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="profile" role="tabpanel">
                <div class="row">
                  <div class="col-12">
                    <div class="table-responsive">
                      <div class="card-body">
                        <h4 class="card-title"></h4>
                        <form
                          class="form-horizontal"
                          id="form-user"
                          method="post"
                          action="#"
                          onsubmit="return false"
                          autocomplete="off"
                        >
                          <div class="row">
                            <div class="col-lg-12 col-3 text-center">
                              <label
                                class="form-label"
                              >รูปโปรไฟล์ ( ขนาด 300*300px ขนาดไม่เกิน 2 MB. )</label>
                              <div class="text-center mt-1">
                                <img :src="user_image" width="200" class="avatar" />
                                <input
                                  type="file"
                                  id="user_image"
                                  @change="onFileChange"
                                  style="display: none;"
                                />
                                <br />
                                <br />
                                <label for="user_image" class="btn btn-outline-primary m-t-10 mb-1">
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
                                :value="this.$store.state.user.user_username"
                                id="username"
                                class="form-control"
                                required
                                readonly
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">ชื่อผู้ใช้งาน :</label>
                            <div class="col-sm-7">
                              <input
                                type="text"
                                name="user_fullname"
                                v-model="data_user.user_fullname"
                                class="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">เบอร์โทร :</label>
                            <div class="col-sm-7">
                              <input
                                type="text"
                                name="user_tel"
                                v-model="data_user.user_tel"
                                class="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">อีเมล์ :</label>
                            <div class="col-sm-7">
                              <input
                                type="email"
                                name="user_email"
                                v-model="data_user.user_email"
                                class="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">ที่อยู่ :</label>
                            <div class="col-sm-7">
                              <textarea
                                name="user_address"
                                v-model="data_user.user_address"
                                class="form-control"
                                rows="2"
                              >{{ data_user.user_address }}</textarea>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">สถานะผู้ใช้งาน :</label>
                            <div class="col-md-7" style="margin-top:5px;">
                              <span class="badge badge-success">
                                <i class="fa fa-check-circle"></i>
                                {{
                                this.$store.state.user.user_status_name
                                }}
                              </span>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="col-md-12 text-center">
                              <button type="submit" @click="submit" class="btn btn-outline-primary">
                                <i class="fa fa-save"></i>&nbsp;บันทึก
                              </button>
                              <nuxt-link to="/" class="btn btn-outline-dark">
                                <i class="fa fa-arrow-left"></i>&nbsp;ย้อนกลับ
                              </nuxt-link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="changePasword" role="tabpanel">
                <div class="row">
                  <div class="col"></div>
                  <div class="col-6 mt-5">
                    <form
                      class="form-horizontal"
                      id="form-change-password"
                      method="post"
                      action="#"
                      onsubmit="return false"
                      autocomplete="off"
                    >
                      <div class="form-group row">
                        <label for>Password ( เดิม )</label>
                        <input
                          type="password"
                          v-model="data_password.user_password"
                          class="form-control"
                          required
                        />
                      </div>
                      <div class="form-group row">
                        <label for>Password ( ใหม่ )</label>
                        <input
                          type="password"
                          v-model="data_password.user_password_new"
                          class="form-control"
                          required
                          minlength="6"
                        />
                      </div>
                      <div class="form-group row">
                        <label for>Password ( ยืมยัน )</label>
                        <input
                          type="password"
                          v-model="data_password.user_password_confirm"
                          class="form-control"
                          required
                          minlength="6"
                        />
                      </div>
                      <div class="form-group text-center">
                        <button
                          type="submit"
                          @click="submiChangePasword"
                          class="btn btn-outline-primary"
                        >
                          <i class="fa fa-save"></i>&nbsp;บันทึก
                        </button>
                        <nuxt-link to="/" class="btn btn-outline-dark">
                          <i class="fa fa-arrow-left"></i>&nbsp;ย้อนกลับ
                        </nuxt-link>
                      </div>
                    </form>
                  </div>
                  <div class="col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script src="../static/js/pages/profile.js"></script>
<style >
.content {
  min-height: 80vh;
}
</style>
