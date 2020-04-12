<template>
  <canvas id="clock" :width="width" :height="height" />
</template>

<script>
import Clock from "./Clock.js";

export default {
  props: {
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    }
  },
  mounted() {
    setTimeout(() => new Clock(document.getElementById("clock")));
  }
};
</script>
