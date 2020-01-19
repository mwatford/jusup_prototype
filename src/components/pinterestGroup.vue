<template>
  <div :class="`group--${size} col`">
    <div class="header">
      <picture class="header__icon">
        <img src="/assets/images/icons/pinterest.svg" />
      </picture>
      <h4>Pinterest board</h4>
      <picture class="optionsButton" @click="sizeOptions = !sizeOptions">
        <img src="/assets/images/icons/Three-dots.svg" />
        <ul class="sizeOptions col" v-if="sizeOptions">
          <li @click.stop="resize('small')">Small</li>
          <li @click.stop="resize('medium')">
            Medium
          </li>
          <li @click.stop="resize('large')">Large</li>
        </ul>
      </picture>
    </div>
    <div class="content" ref="grid">
      <img
        class="pinterestItem post"
        src="/assets/images/images/pinterest1.jpg"
      />
      <img
        class="pinterestItem post"
        src="/assets/images/images/pinterest1.jpg"
      />
      <img
        class="pinterestItem post"
        src="/assets/images/images/pinterest1.jpg"
      />
      <img
        class="pinterestItem post"
        src="/assets/images/images/pinterest1.jpg"
      />
      <img
        class="pinterestItem post"
        src="/assets/images/images/pinterest1.jpg"
      />
      <img
        class="pinterestItem post"
        src="/assets/images/images/pinterest1.jpg"
      />
    </div>
  </div>
</template>

<script>
import size from "../mixins/size.js";
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";

export default {
  props: ["group"],
  mixins: [size],
  data() {
    return {
      posts: [
        {
          image: "/assets/images/images/pinterest1.jpg"
        },
        {
          image: "/assets/images/images/pinterest5.jpg"
        },
        {
          image: "/assets/images/images/pinterest3.jpg"
        },
        {
          image: "/assets/images/images/pinterest4.jpg"
        },
        {
          image: "/assets/images/images/pinterest2.jpg"
        },
        {
          image: "/assets/images/images/pinterest6.jpg"
        }
      ],
      grid: null
    };
  },
  methods: {
    masonry() {
      return new Masonry(this.$refs.grid, {
        itemSelector: ".pinterestItem",
        percentPosition: true
      });
    },
    resize(size) {
      this.changeSize(size);
    }
  },
  mounted() {
    console.log(imagesLoaded());
    this.grid = this.masonry();
    this.grid.imagesLoaded().progress(() => {
      console.log("huhu");
      this.grid.masonry("reloadItems");
    });
  },
  updated() {
    this.grid = this.masonry();
  }
};
</script>

<style lang="scss" scoped>
.group {
  display: flex;
  width: 100%;
  margin: 20px 7px;
  min-width: 300px;
  grid-row: span 1;
  height: 100%;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);

  &--small {
    @extend .group;
    grid-column: span 1;
  }
  &--medium {
    @media (max-width: 1080px) {
      grid-column: span 2;
    }
    @extend .group;
    grid-column: span 2;
  }
  &--large {
    @extend .group;
    grid-column: 1 / -1;
  }
}
.header {
  background: #bd081c;
  display: flex;
  width: 100%;
  min-height: 72px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  color: #fff;

  h4 {
    display: flex;
    width: 100%;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 48px;
    min-width: 48px;
    margin-right: 16px;
  }
}
.optionsButton {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 25px;
  min-width: 25px;
  border-radius: 50%;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  & img {
    cursor: pointer;
  }
}

.sizeOptions {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 160px;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  color: #000;
  font-size: 11px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  z-index: 3;
  list-style-type: none;

  & li {
    cursor: pointer;
    font-weight: normal;
    margin: 5px 0;

    &:hover {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    }
  }
}

.content {
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
}
.post {
  display: flex;
  flex-direction: column;
  max-width: 260px;
  margin: 10px;
  height: auto;
  color: #464646;
  font-size: 13px;
  background: #fff;
  border-radius: 15px;
  object-fit: contain;
}
.wrapper {
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
