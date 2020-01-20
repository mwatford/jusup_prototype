<template>
  <div class="options row">
    <nav class="navigation">
      <ul class="col">
        <router-link to="/add-group">
          <button>Add Group</button>
        </router-link>
        <button>Navigation</button>
        <button>Edit desk</button>
        <button>Settings</button>
        <button>About us</button>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("keydown", ({ keyCode }) => {
      if (keyCode === 40) {
        this.$router.push({ path: "/" });
      }
    });
  }
};
</script>

<style></style>
