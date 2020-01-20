<template>
  <div class="options row">
    <div class="content"></div>
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

<style lang="scss" scoped>
.options {
  width: 100%;
}
.content {
  width: 100%;
}
.navigation {
  position: relative;
  width: 25%;
  height: 100%;
  max-width: 300px;
  background: #509df6;
  justify-content: flex-end;
  padding: 0 0 80px 20px;
  display: flex;
  flex-direction: column;
}
button {
  color: #fff;
  border: none;
  background: none;
  border-radius: 4px;
  font-size: 16px;
  margin: 8px 0;
}
</style>
