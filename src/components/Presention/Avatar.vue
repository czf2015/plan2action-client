<template>
  <a 
    class="avatar" 
    :href="link" 
    :style="{width, height, backgroundImage: `url(${src})`}" 
  />
</template>


<script>
export default {
  props: {
    src: {
      type: String,
      default: "/icons/logo.png"
    },
    link: {
      type: String,
      default: "javascript:;"
    },
    width: {
      type: String,
      default: "50px"
    },
    height: {
      type: String,
      default: "50px"
    }
  }
};
</script>


<style lang="less" scoped>
.avatar {
  display: inline-block;
  margin: 5px 5px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>