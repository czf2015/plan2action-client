<template>
  <figure class="figure" :style="{width}">
    <img :src="src" />
    <figcaption>{{desc}}</figcaption>
  </figure>
</template>


<script>
export default {
  props: {
    src: String,
    desc: String,
    width: {
      type: String,
      default: "auto"
    }
  },
};
</script>


<style lang="less" scoped>
.figure {
  font-size: 0.24rem;

  img {
    width: 100%;
  }

  figcaption {
    text-align: center;
  }
}
</style>