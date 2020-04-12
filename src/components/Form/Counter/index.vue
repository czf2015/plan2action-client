<template>
  <div class="counter">
    <button @click="() => counter.sub($emit, alert)">-</button>
    <span>{{counter.count}}</span>
    <button @click="() => counter.add($emit, alert)">+</button>
  </div>
</template>


<script>
import Counter from "./Counter";

export default {
  props: {
    count: Number,
    min: Number,
    max: Number,
    step: Number
  },
  data() {
    return {
      counter: new Counter(this)
    };
  }
};
</script>


<style lang="less" scoped>
.counter {
  button {
    padding: 5px 5px;
  }
  span {
    padding: 0 5px;
  }
}
</style>