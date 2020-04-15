<template>
  <component :is="type" :width="width" :height="height" :fill="fill" />
</template>


<script>
export default {
  components: {
    heart: () => import("./Heart"),
    panda: () => import("./Panda"),
    close: () => import("./Close"),
  },

  props: {
    type: {
      type: String,
      default: "close"
    },
    width: {
      type: String,
      default: "1rem"
    },
    height: {
      type: String,
      default: "1rem"
    },
    fill: {
      type: String,
      defualt: "currentColor"
    },
    spin: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: Number,
      default: 0
    }
  }
};
</script>


<style scoped>
.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-size: auto 100%;
}
</style>