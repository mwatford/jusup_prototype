<template>
  <div>options</div>
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
