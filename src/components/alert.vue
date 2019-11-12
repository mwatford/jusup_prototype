<template>
  <div class="alert">
    <picture class="alert__image">
      <img :src="alert.image" />
    </picture>
    <div class="info">
      <div class="user">
        <picture class="user__avatar">
          <img :src="alert.avatar" />
        </picture>
        <div class="col">
          <h4 class="user__author">{{ alert.author }}</h4>
          <h4 class="user__group">{{ alert.group }}</h4>
        </div>
      </div>
      <div class="wrapper">
        <div class="info__date">{{ alert.date }}</div>
        <!-- <div class="reactions row">
          <div>a</div>
          <div>s</div>
          <div>d</div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alert: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  margin: 20px 0;
  width: 90%;

  &__image {
    width: 100%;

    & img {
      width: 100%;
      object-fit: contain;
    }
  }
}
.info {
  display: flex;
  padding: 0 19px;
  height: 72px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &__date {
    color: #6c6c6c;
    font-size: 13px;
  }
}

.user {
  align-items: center;
  display: flex;

  &__avatar {
    height: 48px;
    width: 48px;
    margin-right: 19px;
    border-radius: 50%;

    & img {
      width: 100%;
      height: auto;
    }
  }

  &__author {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 4px;
  }

  &__group {
    font-size: 14px;
    font-weight: normal;
    color: #6c6c6c;
  }
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-between;
}
.reactions {
  display: flex;
  justify-content: space-between;
}
</style>