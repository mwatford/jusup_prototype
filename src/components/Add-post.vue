<template>
  <div class="addPost row">
    <div class="row" v-show="input">
      <input type="text" v-model="text" placeholder="type you message" />
      <input
        type="file"
        id="file-upload"
        value="asd"
        @change="readURL"
        accept="image/png, image/jpeg, image/jpg"
      />
      <label for="file-upload" class="custom-file-upload">
        <picture>
          <img src="/assets/images/icons/Camera Icon.svg" />
        </picture>
      </label>
    </div>
    <button @click="toggleInput" draggable="true" @dragstart="drag">
      <img src="/assets/images/icons/jusup-logo.png" alt />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      input: "",
      image: ""
    };
  },
  methods: {
    drag(e) {
      e.dataTransfer.setData("type", "post");
      e.dataTransfer.setData("message", this.text);
      e.dataTransfer.setData("image", this.image);
    },
    readURL(e) {
      const image = e.srcElement.files[0];
      let reader = new FileReader();

      reader.onloadend = () => {
        this.image = reader.result;
      };

      reader.readAsDataURL(image);
    },
    toggleInput() {
      this.input = !this.input;
    }
  }
};
</script>

<style lang="scss" scoped>
.addPost {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 15px;
  right: 20px;
  // max-width: 80vw;
  z-index: 5;
  background: #fff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
}
button {
  display: flex;
  cursor: pointer;
  // height: auto;
  // width: fit-content;
  border: none;
  padding: 1px;
  background: #fff;
}
input[type="file"] {
  display: none;
}
input[type="text"] {
  @media (min-width: 900px) {
    width: 300px;
  }
  margin-left: 10px;
  width: 155px;
  padding: 0 3px;
  background: #f0efed;
  border: none;
  color: #999;
}
.custom-file-upload {
  cursor: pointer;
  // border: 1px solid #ccc;
  display: flex;
  // padding: 6px 12px;

  & picture {
    height: 35px;
    width: 35px;
    background: #4f4f4f;
    border-radius: 50%;
    display: flex;
    margin: 0 10px;

    img {
      width: 60%;
      height: 60%;
      margin: auto;
    }
  }
}
</style>
