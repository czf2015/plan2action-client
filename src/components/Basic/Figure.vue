<template>
  <figure class="figure">
    <img :src="src" :width="width" :height="height" />
    <figcaption>{{desc}}</figcaption>
  </figure>
</template>


<script>
export default {
  props: {
    src: String,
    desc: String,
    width: String,
    height: String
  },
};
</script>


<style lang="less" scoped>
.figure {
  display: flex;
  flex-direction: column;

  img {
    margin: auto;
  }

  figcaption {
    text-align: center;
  }
}
</style>