<template>
  <div>
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <Header />
    <Navbar />
    <nuxt />
    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>
    <Footer />
  </div>
</template>
<style>
body {
  font-family: "Mitr", sans-serif;
}
a {
  font-family: "Mitr", sans-serif;
}
li {
  font-family: "Mitr", sans-serif;
}
.table th {
  font-size: 1.1rem;
}
.table th,
.table td {
  padding: 0.5rem;
  vertical-align: top;
  border-top: 1px solid #f8f8f8;
}
.btn[class*="btn-outline-"].btn-sm {
  padding-top: calc(0.8rem - 1px);
  padding-bottom: calc(0.8rem - 1px);
  font-size: 13px;
}
.content-wrapper {
  min-height: 85vh;
}

.ant-pagination-item-active {
  font-weight: 500;
  background: #fff;
  border-color: #6f42c1 !important;
  color: #6f42c1 !important;
}
.ant-pagination-item:focus,
.ant-pagination-item:hover {
  border-color: #6f42c1;
  transition: all 0.3s;
}
.ant-pagination a {
  color: #6f42c1 !important;
}
</style>