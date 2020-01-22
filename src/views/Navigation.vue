<template>
  <div class="options row">
    <div class="content col">
      <div class="col">
        <div class="box box-1 row">
          <div class="content content--min">
            <p>You are here</p>
          </div>
          <div class="navigation" style="font-size: 6px; color: #fff;"></div>
        </div>
        <div class="row">
          <div class="box">
            <div class="box__item box__item--high"></div>
            <div class="box__item box__item--high"></div>
            <div class="box__item box__item--high"></div>
          </div>
          <div class="box relative">
            <div class="box__item box__item--high"></div>
            <div class="box__item box__item--long"></div>
            <div class="box__item "></div>
            <div class="box__item "></div>
            <base-icon
              iconType="caret"
              color="#e75995"
              class="arrow arrow--left"
              height="45"
              width="45"
            ></base-icon>
            <base-icon
              iconType="caret"
              color="#e75995"
              class="arrow arrow--down"
              height="45"
              width="45"
            ></base-icon>
            <base-icon
              iconType="caret"
              color="#e75995"
              class="arrow arrow--right"
              height="45"
              width="45"
            ></base-icon>
          </div>
          <div class="box">
            <div class="box__item"></div>
            <div class="box__item"></div>
            <div class="box__item"></div>
            <div class="box__item"></div>
            <div class="box__item"></div>
            <div class="box__item"></div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="content">
          <div class="col">
            <base-icon
              iconType="caret"
              class="key key--up"
              height="45"
              width="45"
            ></base-icon>
            <div class="row">
              <base-icon
                iconType="caret"
                class="key key--left"
                height="45"
                width="45"
              ></base-icon>
              <base-icon
                iconType="caret"
                class="key key--down"
                height="45"
                width="45"
              ></base-icon>
              <base-icon
                iconType="caret"
                class="key key--right"
                height="45"
                width="45"
              ></base-icon>
            </div>
          </div>
          <h3 class="tip">
            Move between views using arrows on your keyboard
          </h3>
        </div>
      </div>
    </div>
    <nav class="navigation">
      <img src="/assets/images/icons/logo.svg" class="logo" />
      <ul class="col">
        <router-link :to="{ path: '/add-group' }">
          Add group
        </router-link>
        <router-link :to="{ path: '/navigation' }">
          Navigation
        </router-link>
        <router-link :to="{ path: '/edit-desk' }">Edit desk</router-link>
        <router-link :to="{ path: '/settings' }">Settings</router-link>
        <router-link :to="{ path: '/about-us' }">About us</router-link>
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
.router-link-exact-active {
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
}
a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  margin: 8px 0;

  &:hover {
    font-weight: bold;
  }
}
.options {
  width: 100%;
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
  color: #509df6;
  justify-content: space-evenly;
  align-items: center;

  &--min {
    justify-content: center;
    align-items: center;
  }
}
.navigation {
  position: relative;
  width: 25%;
  height: 100%;
  max-width: 300px;
  background: #509df6;
  justify-content: space-between;
  padding: 0 0 80px 20px;
  display: flex;
  flex-direction: column;
}
.logo {
  height: 80px;
  width: 80px;
  margin: 20px 20px;
  align-self: flex-end;
}
.wrapper {
  display: grid;
  grid-template-columns: 260px 70px 260px 70px 260px;
  grid-template-rows: 140px 140px;
}
.box {
  width: 260px;
  height: 140px;
  border: 2px solid #e75995;
  margin: 50px;
  padding: 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 4px;

  &-1 {
    margin: 50px auto;
    display: flex;
    padding: 0;
  }

  &-3 {
    position: relative;
  }

  &__item {
    height: 100%;
    width: 100%;
    border: 1px solid #e75995;
    border-radius: 5px;

    &--high {
      grid-row: span 2;
    }
    &--long {
      grid-column: span 2;
    }
  }
}
.arrow {
  position: absolute;

  &--left {
    margin-right: 30px;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  &--right {
    margin-left: 30px;
    left: 100%;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
  }
  &--down {
    margin-bottom: 30px;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) rotate(-90deg);
  }
}
.key {
  color: #8c8c8c;
  border: 2px solid #8c8c8c;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;

  &--up {
    margin: 10px auto;
    transform: rotate(90deg);
  }
  &--right {
    transform: rotate(180deg);
  }
  &--down {
    transform: rotate(-90deg);
  }
}
.tip {
  margin-left: 40px;
}
</style>
