export default {
  data() {
    return {
      sizeOptions: false
    };
  },
  computed: {
    clientWidth() {
      return document.getElementsByClassName("display")[0].clientWidth;
    },
    width() {
      return this.group.width;
    },
    height() {
      return this.group.height;
    }
  },
  methods: {
    changeHeight(input) {
      this.$store.commit("CHANGE_GROUP_HEIGHT", {
        height: input,
        group: this.group.name
      });
    },
    changeWidth(input) {
      this.$store.commit("CHANGE_GROUP_WIDTH", {
        width: input,
        group: this.group.name
      });
    }
  }
};
