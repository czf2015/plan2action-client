
<template>
  <div class="toggle">
    <pre @click="$emit('click', !show)" v-html="render" />
    <slot v-if="show" />
  </div>
</template>


<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    render: {
      type: String,
      default: "toggle"
    }
  }
};
</script>


<style scoped>
.toggle {
  display: inline-block;
}
</style>