<template>
  <div>
    <div class="card-content mt-5">
      <div class="card-body text-center mt-5">
        <img src="/images/pages/404.png" class="img-fluid align-self-center" alt="branding logo" />
        <h1 class="font-large-2 my-1">404 - Page Not Found!</h1>
        <a class="btn btn-primary btn-lg mt-2" href="/">Back to Home</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["error"],
  layout: "_error"
};
</script>