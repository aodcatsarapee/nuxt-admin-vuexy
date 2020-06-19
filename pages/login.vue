<template>
  <div>
    <section class="row flexbox-container" style="margin-top:150px;">
      <div class="col-xl-12 col-12 d-flex justify-content-center mt-5">
        <div class="card bg-authentication rounded-0 mb-0">
          <div class="row m-0">
            <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
              <img src="/images/pages/login.png" alt="branding logo" />
            </div>
            <div class="col-lg-6 col-12 p-0">
              <div class="card rounded-0 mb-0 px-2">
                <div class="card-header pb-1">
                  <div class="card-title">
                    <h4 class="mb-0">Login</h4>
                  </div>
                </div>
                <p class="px-2">ยินดีต้อนรับโปรดเข้าสู่ระบบบัญชีของคุณ</p>
                <div class="card-content">
                  <div class="card-body pt-1">
                    <form id="loginform" method="post" onsubmit="return false">
                      <fieldset class="form-label-group form-group position-relative has-icon-left">
                        <input
                          type="text"
                          class="form-control"
                          name="username"
                          id="username"
                          v-model="user_username"
                          placeholder="username"
                          autofocus
                        />
                        <div class="form-control-position">
                          <i class="feather icon-user"></i>
                        </div>
                        <label for="user-name">Username</label>
                      </fieldset>

                      <fieldset class="form-label-group position-relative has-icon-left">
                        <input
                          type="password"
                          class="form-control"
                          autocomplete="new-password"
                          name="password"
                          v-model="user_password"
                          placeholder="password"
                        />
                        <div class="form-control-position">
                          <i class="feather icon-lock"></i>
                        </div>
                        <label for="user-password">Password</label>
                      </fieldset>
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg btn-block"
                        @click="submit"
                      >เข้าสู่ระบบ</button>
                    </form>
                  </div>
                </div>
                <div class="login-footer mb-2">
                  <div class="divider">
                    <div class="divider-text">Power By</div>
                  </div>
                  <div class="footer-btn d-inline">
                    <span class="float-md-left d-block d-md-inline-block mt-25">
                      COPYRIGHT © 2020
                      <a
                        href="/"
                        target="_blank"
                        class="text-bold-800 grey darken-2"
                      >AODCAT,</a>All rights Reserved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <div>
    <div class="login-box">
      <div class="card p-0">
        <div class="card-body login-card-body text-center p-3">
          <i class="fa fa-lock fa-3x mt-3"></i>
          <h5 class="mt-3">เข้าสู่ระบบ</h5>
          <h5 class="mt-3 mb-4">Application Name</h5>
          <form id="loginform" method="post" onsubmit="return false">
            <div class="input-group mb-3">
              <input
                class="form-control"
                type="text"
                name="username"
                id="username"
                v-model="user_username"
                placeholder="username"
                autofocus
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                class="form-control"
                autocomplete="new-password"
                type="password"
                name="password"
                v-model="user_password"
                placeholder="password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button @click="submit" class="btn btn-primary btn-block">เข้าสู่ระบบ</button>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <b>Powered by © Aodcat 2020, V.1.0 All right reserved.</b>
        </div>
      </div>
    </div>
  </div>-->
</template>
<script src="../static/js/pages/login.js"></script>
