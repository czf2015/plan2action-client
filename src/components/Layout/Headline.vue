<template>
  <div class="headline">
    <h3>{{title}}</h3>
    <p>{{desc}}</p>
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    desc: String
  }
}
</script>


<style lang="less" scoped>
.headline {
  width: 100%;
  margin-bottom: 0.44rem;

  h3 {
    text-align: center;
    font-size: 0.4rem;
    margin-top: 0.88rem;
    color: #222;
  }

  p {
    text-align: center;
    font-size: 0.24rem;
    margin-top: 0.3rem;
    color: #9094a5;
  }
}
</style>