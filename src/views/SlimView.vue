<template>
  <div class="slim">
    <h2 :class="['previous', showButtons ? 'show' : 'hide']">
      <base-icon
        iconType="caret"
        width="60"
        height="60"
        iconColor="#000000c5"
        @click.native="previous"
      ></base-icon>
    </h2>
    <h2 :class="['next', showButtons ? 'show' : 'hide']">
      <base-icon
        iconType="caret"
        width="60"
        height="60"
        iconColor="#000000c5"
        class="rotate-180"
        @click.native="next"
      ></base-icon>
    </h2>
    <transition :name="animation" mode="out-in">
      <component :is="current.component" class="display"></component>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      index: 1,
      cursorX: null,
      animation: ""
    };
  },
  computed: {
    ...mapState({
      tabs: state => state.tabs.slice(1)
    }),
    current() {
      return this.tabs[this.index];
    },
    showButtons() {
      return (
        (this.cursorX >= 0 && this.cursorX < 1) ||
        (this.cursorX < window.innerWidth &&
          this.cursorX > window.innerWidth - 2)
      );
    }
  },
  methods: {
    next() {
      const index = this.tabs.indexOf(this.current);
      this.animation = "slideLeft";

      if (this.index < this.tabs.length - 1) {
        return this.index++;
      }
      this.index = 0;
    },

    previous() {
      const index = this.tabs.indexOf(this.current);
      this.animation = "slideRight";

      if (index > 0) {
        return this.index--;
      }
      this.index = this.tabs.length - 1;
    },
    options() {
      if (this.$router.currentRoute.name !== "options") {
        this.$router.push({ path: "/options" });
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", ({ keyCode }) => {
      if (keyCode === 37) {
        this.previous();
      }
      if (keyCode === 39) {
        this.next();
      }
      if (keyCode === 38) {
        this.options();
      }
    });
    window.addEventListener("mousemove", e => {
      this.cursorX = e.clientX;
    });
  }
};
</script>

<style lang="scss" scoped>
.slim {
  position: relative;
  width: 100%;
  height: 100%;
}
.hide {
  opacity: 0;
}
.show {
  opacity: 1;
}
.previous,
.next {
  cursor: pointer;
  position: absolute;
  z-index: 3;
  transition: opacity 0.3s ease;

  & svg {
    padding: 10px;
    border-radius: 50%;
  }

  &::after {
    content: "";
    width: 0px;
    height: 100px;
    display: flex;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    z-index: -1;
    position: absolute;
    box-shadow: 0 0 140px 100px #fff;
  }
}
.previous {
  left: 5px;
  top: 50%;
}
.next {
  right: 15px;
  top: 50%;
}

.slideRight-enter-active {
  animation: scaleDown-right 0.4s ease-in-out reverse;
}
.slideLeft-enter-active {
  // animation: slideRight 2s reverse;
  animation: scaleDown-left 0.4s ease-in-out reverse;
}
.slideRight-leave-active {
  animation: scaleDown-left 0.6s;
}
.slideLeft-leave-active {
  animation: scaleDown-right 0.6s;
}
// .slideLeft-leave-active {
//   animation: slide-l 0.6s;
// }

@keyframes slide-l {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-r {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes scaleDown-left {
  0% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.4) translateX(100%);
    opacity: 0;
  }
}
@keyframes scaleDown-right {
  0% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.4) translateX(-100%);
  }
}
</style>
